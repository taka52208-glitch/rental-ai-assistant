# プロジェクト設定

## 基本設定
```yaml
プロジェクト名: 賃貸AIアシスタント
開始日: 2026-01-29
技術スタック:
  frontend: React 18 + TypeScript 5 + Vite 5 + MUI v6 + @chatscope/chat-ui-kit-react
  backend: Python 3.11+ + FastAPI
  database: なし（セッションベース）
  ai: Claude 3.5 Haiku (Anthropic API)
```

## 開発環境
```yaml
ポート設定:
  frontend: 3247
  backend: 8432

環境変数:
  設定ファイル: .env.local（ルートディレクトリ）
  必須項目:
    - ANTHROPIC_API_KEY
    - VITE_API_URL
```

## テスト認証情報
```yaml
開発用アカウント:
  なし（認証機能なし）

外部サービス:
  Anthropic: APIキーを.env.localに設定
```

## コーディング規約

### 命名規則
```yaml
ファイル名:
  - コンポーネント: PascalCase.tsx (例: ChatWindow.tsx)
  - ユーティリティ: camelCase.ts (例: formatMessage.ts)
  - 定数: UPPER_SNAKE_CASE.ts (例: DUMMY_PROPERTIES.ts)

変数・関数:
  - 変数: camelCase
  - 関数: camelCase
  - 定数: UPPER_SNAKE_CASE
  - 型/インターフェース: PascalCase
```

### コード品質
```yaml
必須ルール:
  - TypeScript: strictモード有効
  - 未使用の変数/import禁止
  - console.log本番環境禁止
  - エラーハンドリング必須
  - 関数行数: 100行以下
  - ファイル行数: 700行以下
  - 複雑度: 10以下
  - 行長: 120文字

フォーマット:
  - インデント: スペース2つ
  - セミコロン: あり
  - クォート: シングル
```

## プロジェクト固有ルール

### APIエンドポイント
```yaml
命名規則:
  - RESTful形式を厳守
  - ケバブケース使用 (/api/chat)

主要エンドポイント:
  - POST /api/chat: チャットメッセージ送信・AI応答取得
  - GET /api/health: ヘルスチェック
```

### 型定義
```yaml
配置:
  frontend: src/types/index.ts
  backend: src/types.py

同期ルール:
  - 両ファイルは常に同一内容を保つ
  - 片方を更新したら即座にもう片方も更新
```

### チャットUI実装
```yaml
ライブラリ: @chatscope/chat-ui-kit-react
コンポーネント構成:
  - MainContainer
  - ChatContainer
  - MessageList
  - Message
  - MessageInput

アニメーション:
  - タイピングエフェクト: カスタムHooksで実装
  - 応答表示: 1文字ずつ表示（50ms間隔）
```

### AI応答設計
```yaml
モデル: claude-3-5-haiku-latest
応答速度目標: 3秒以内
会話管理: フロントエンド側でセッション管理

シナリオステップ:
  1. greeting: 挨拶・問い合わせ受付
  2. area: エリアヒアリング
  3. rent: 家賃ヒアリング
  4. layout: 間取りヒアリング
  5. timing: 入居時期ヒアリング
  6. proposal: 物件提案
  7. reservation: 電話予約確定
  8. complete: 完了
```

## ディレクトリ構成（予定）
```
/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── LandingPage.tsx
│   │   │   └── TypingEffect.tsx
│   │   ├── hooks/
│   │   │   └── useTypingEffect.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── data/
│   │   │   └── properties.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   └── vite.config.ts
├── backend/
│   ├── src/
│   │   ├── main.py
│   │   ├── chat.py
│   │   └── types.py
│   └── requirements.txt
├── docs/
│   ├── requirements.md
│   └── SCOPE_PROGRESS.md
├── CLAUDE.md
└── .env.local
```

## 最新技術情報（知識カットオフ対応）
```yaml
# 調査で確認済みの情報
@chatscope/chat-ui-kit-react:
  - 最新バージョンで動作確認済み
  - TypeScript対応
  - Storybook例あり

Claude API:
  - claude-3-5-haiku-latest が最新の高速モデル
  - 従量課金: $1/$5 per 1M tokens (input/output)
```
