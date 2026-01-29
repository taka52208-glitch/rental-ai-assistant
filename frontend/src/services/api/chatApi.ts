/**
 * チャットAPI通信サービス
 */

import type { Message, ChatRequest, ChatResponse } from '../../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8432';

/**
 * チャットメッセージを送信してAI応答を取得
 */
export const sendChatMessage = async (
  message: string,
  conversationId?: string,
  messages?: Message[]
): Promise<ChatResponse> => {
  const request: ChatRequest = {
    message,
    conversationId,
    messages: messages?.map((msg) => ({
      messageId: msg.messageId,
      role: msg.role,
      content: msg.content,
      timestamp: msg.timestamp,
    })),
  };

  const response = await fetch(`${API_BASE_URL}/api/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `API Error: ${response.status}`);
  }

  return response.json();
};

/**
 * ヘルスチェック
 */
export const healthCheck = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return response.ok;
  } catch {
    return false;
  }
};
