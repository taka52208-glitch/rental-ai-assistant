FROM python:3.12-slim

WORKDIR /app

# 依存関係をインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ソースコードをコピー
COPY src/ ./src/

# ポート設定
ENV PORT=8080
EXPOSE 8080

# アプリケーション起動
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8080"]
