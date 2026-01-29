"""メインアプリケーション - FastAPI"""

import os
import signal
import asyncio
from datetime import datetime
from contextlib import asynccontextmanager
from uuid import uuid4

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from .types import ChatRequest, ChatResponse, HealthResponse
from .chat import generate_response

# 環境変数を読み込み
load_dotenv()

# グレースフルシャットダウン用
shutdown_event = asyncio.Event()


def handle_sigterm(*args):
    """SIGTERMシグナルハンドラー"""
    shutdown_event.set()


@asynccontextmanager
async def lifespan(app: FastAPI):
    """アプリケーションのライフサイクル管理"""
    # スタートアップ
    signal.signal(signal.SIGTERM, handle_sigterm)
    yield
    # シャットダウン（最大8秒待機）
    try:
        await asyncio.wait_for(shutdown_event.wait(), timeout=8.0)
    except asyncio.TimeoutError:
        pass


# FastAPIアプリケーション
app = FastAPI(
    title="賃貸AIアシスタント API",
    description="賃貸仲介不動産向けAI自動応答システム",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3247",
        "http://127.0.0.1:3247",
        "https://rental-ai-assistant.vercel.app",
        "https://rental-ai-assistant-takas-projects-de61dd0f.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health", response_model=HealthResponse)
async def health_check():
    """ヘルスチェックエンドポイント"""
    return HealthResponse(
        status="healthy",
        timestamp=datetime.now(),
    )


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """チャットエンドポイント"""
    try:
        # 会話IDがなければ生成
        conversation_id = request.conversation_id or str(uuid4())

        # 会話履歴を構築
        history = []
        if request.messages:
            for msg in request.messages:
                history.append({
                    "role": msg.role.value,
                    "content": msg.content,
                })

        # Claude APIで応答を生成
        response_text = await generate_response(
            user_message=request.message,
            conversation_history=history,
        )

        return ChatResponse(
            message=response_text,
            conversationId=conversation_id,
        )

    except ValueError as e:
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"チャット処理中にエラーが発生しました: {str(e)}",
        )


if __name__ == "__main__":
    import uvicorn

    port = int(os.getenv("PORT", "8432"))
    uvicorn.run(
        "src.main:app",
        host="0.0.0.0",
        port=port,
        reload=True,
    )
