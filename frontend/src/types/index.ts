// メッセージの型定義
export interface Message {
  messageId: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// 会話の型定義
export interface Conversation {
  conversationId: string;
  messages: Message[];
  currentStep: ConversationStep;
  collectedInfo: CollectedInfo;
  createdAt: Date;
  updatedAt: Date;
}

// シナリオステップ
export type ConversationStep =
  | 'greeting'
  | 'area'
  | 'rent'
  | 'layout'
  | 'timing'
  | 'proposal'
  | 'reservation'
  | 'complete';

// 収集した情報
export interface CollectedInfo {
  area?: string;
  maxRent?: number;
  layout?: string;
  moveInTiming?: string;
  name?: string;
  phoneNumber?: string;
  preferredDate?: string;
}

// 物件データの型定義
export interface Property {
  propertyId: string;
  name: string;
  area: string;
  rent: number;
  layout: string;
  station: string;
  walkMinutes: number;
  features: string[];
}

// APIリクエスト/レスポンスの型定義
export interface ChatRequest {
  message: string;
  conversationId?: string;
  messages?: Message[];
}

export interface ChatResponse {
  message: string;
  conversationId: string;
}
