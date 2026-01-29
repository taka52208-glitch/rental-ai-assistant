#!/bin/bash
# バックエンドサーバー起動スクリプト

cd "$(dirname "$0")"

# 仮想環境をアクティベート
source venv/bin/activate

# 環境変数を読み込み（.envがあれば）
if [ -f .env ]; then
    export $(cat .env | grep -v '^#' | xargs)
fi

# サーバー起動
uvicorn src.main:app --host 0.0.0.0 --port ${PORT:-8432} --reload
