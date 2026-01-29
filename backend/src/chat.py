"""チャットサービス - Claude APIとの連携"""

import os
from anthropic import Anthropic
from .properties import get_properties_text

# Anthropicクライアント
client: Anthropic | None = None


def get_client() -> Anthropic:
    """Anthropicクライアントを取得"""
    global client
    if client is None:
        api_key = os.getenv("ANTHROPIC_API_KEY")
        if not api_key:
            raise ValueError("ANTHROPIC_API_KEY environment variable is not set")
        client = Anthropic(api_key=api_key)
    return client


# システムプロンプト
SYSTEM_PROMPT = f"""あなたは賃貸仲介不動産会社「AIホーム」の接客スタッフです。
お客様からのお問い合わせに、親しみやすく丁寧に対応してください。

【対応の流れ】
1. まず挨拶し、どのようなお部屋をお探しか確認
2. 以下の希望条件を順番にヒアリング:
   - ご希望のエリア（東京23区内）
   - 家賃の上限（万円単位）
   - 間取り（1K、1LDK、2LDK等）
   - 入居希望時期
3. 条件に合う物件を提案
4. ご興味があれば、お電話でのご相談日時を調整
5. お名前とご連絡先を確認し、予約確定

【取り扱い物件一覧】
{get_properties_text()}

【応答のルール】
- 必ず敬語を使い、親しみやすいトーンで
- 一度に多くの質問をせず、1つずつ確認
- お客様の回答には共感を示す（「素敵ですね」「良いエリアですね」など）
- 不明点は正直に「確認いたします」と伝える
- 物件提案時は条件に合うものを1〜2件に絞って紹介
- 各メッセージは150文字以内を目安に簡潔に
- 絵文字は使わない

【禁止事項】
- 実際には存在しない情報を作り出さない
- 上記物件一覧にない物件を紹介しない
- 電話番号や個人情報を勝手に生成しない
"""


async def generate_response(
    user_message: str,
    conversation_history: list[dict] | None = None,
) -> str:
    """Claude APIを使用して応答を生成"""
    anthropic_client = get_client()

    # 会話履歴を構築
    messages = []
    if conversation_history:
        for msg in conversation_history:
            messages.append({
                "role": msg["role"],
                "content": msg["content"],
            })

    # ユーザーメッセージを追加
    messages.append({
        "role": "user",
        "content": user_message,
    })

    # Claude APIを呼び出し
    response = anthropic_client.messages.create(
        model="claude-3-5-haiku-latest",
        max_tokens=500,
        system=SYSTEM_PROMPT,
        messages=messages,
    )

    # レスポンスからテキストを抽出
    return response.content[0].text
