import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  Avatar,
  CircularProgress,
  Alert,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import { PublicLayout } from '../layouts/PublicLayout';
import type { Message } from '../types';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { sendChatMessage, healthCheck } from '../services/api/chatApi';

// 初期メッセージ
const INITIAL_MESSAGE: Message = {
  messageId: 'initial',
  role: 'assistant',
  content:
    'こんにちは！賃貸物件探しのお手伝いをさせていただきます。どのようなお部屋をお探しですか？ご希望のエリアや条件などがあればお聞かせください。',
  timestamp: new Date(),
};

// タイピング中のメッセージコンポーネント
const TypingMessage = ({ content }: { content: string }) => {
  const { displayText, isTyping } = useTypingEffect(content, true, { speed: 30 });

  return (
    <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
      {displayText}
      {isTyping && (
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: 8,
            height: 16,
            bgcolor: 'primary.main',
            ml: 0.5,
            animation: 'blink 1s infinite',
            '@keyframes blink': {
              '0%, 50%': { opacity: 1 },
              '51%, 100%': { opacity: 0 },
            },
          }}
        />
      )}
    </Typography>
  );
};

export const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState<string | undefined>();
  const [latestAssistantId, setLatestAssistantId] = useState<string | null>(null);
  const [isApiAvailable, setIsApiAvailable] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // APIヘルスチェック
  useEffect(() => {
    const checkApi = async () => {
      const available = await healthCheck();
      setIsApiAvailable(available);
    };
    checkApi();
  }, []);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      messageId: `user-${Date.now()}`,
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date(),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);
    setError(null);

    try {
      // バックエンドAPIを呼び出し
      const response = await sendChatMessage(
        userMessage.content,
        conversationId,
        updatedMessages.filter((m) => m.messageId !== 'initial')
      );

      // 会話IDを保存
      if (!conversationId) {
        setConversationId(response.conversationId);
      }

      const assistantMessage: Message = {
        messageId: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.message,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setLatestAssistantId(assistantMessage.messageId);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'エラーが発生しました';
      setError(errorMessage);

      // エラー時はユーザーメッセージを削除
      setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <PublicLayout maxWidth="md">
      {/* API接続状態の表示 */}
      {isApiAvailable === false && (
        <Alert severity="warning" sx={{ mb: 2 }}>
          バックエンドサーバーに接続できません。サーバーを起動してください。
        </Alert>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      <Paper
        elevation={3}
        sx={{
          height: 'calc(100vh - 200px)',
          minHeight: 500,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
      >
        {/* ヘッダー */}
        <Box
          sx={{
            p: 2,
            bgcolor: 'primary.main',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <SmartToyIcon />
          <Typography variant="h6">賃貸AIアシスタント</Typography>
          {isApiAvailable && (
            <Box
              sx={{
                ml: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: '#4caf50',
                }}
              />
              <Typography variant="caption">AI接続中</Typography>
            </Box>
          )}
        </Box>

        {/* メッセージエリア */}
        <Box
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            p: 2,
            bgcolor: '#f5f5f5',
          }}
        >
          {messages.map((message) => (
            <Box
              key={message.messageId}
              sx={{
                display: 'flex',
                justifyContent: message.role === 'user' ? 'flex-end' : 'flex-start',
                mb: 2,
              }}
            >
              {message.role === 'assistant' && (
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 36,
                    height: 36,
                    mr: 1,
                  }}
                >
                  <SmartToyIcon fontSize="small" />
                </Avatar>
              )}
              <Paper
                sx={{
                  p: 2,
                  maxWidth: '70%',
                  bgcolor: message.role === 'user' ? 'primary.main' : 'white',
                  color: message.role === 'user' ? 'white' : 'text.primary',
                  borderRadius: 2,
                  borderTopLeftRadius: message.role === 'assistant' ? 0 : 2,
                  borderTopRightRadius: message.role === 'user' ? 0 : 2,
                }}
              >
                {message.role === 'assistant' &&
                message.messageId === latestAssistantId ? (
                  <TypingMessage content={message.content} />
                ) : (
                  <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
                    {message.content}
                  </Typography>
                )}
              </Paper>
              {message.role === 'user' && (
                <Avatar
                  sx={{
                    bgcolor: 'secondary.main',
                    width: 36,
                    height: 36,
                    ml: 1,
                  }}
                >
                  <PersonIcon fontSize="small" />
                </Avatar>
              )}
            </Box>
          ))}

          {isLoading && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  width: 36,
                  height: 36,
                }}
              >
                <SmartToyIcon fontSize="small" />
              </Avatar>
              <Paper sx={{ p: 2, bgcolor: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CircularProgress size={16} />
                  <Typography variant="body2" color="text.secondary">
                    AIが考えています...
                  </Typography>
                </Box>
              </Paper>
            </Box>
          )}

          <div ref={messagesEndRef} />
        </Box>

        {/* 入力エリア */}
        <Box
          sx={{
            p: 2,
            bgcolor: 'white',
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            gap: 1,
          }}
        >
          <TextField
            fullWidth
            placeholder="メッセージを入力..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading || isApiAvailable === false}
            multiline
            maxRows={3}
            size="small"
          />
          <IconButton
            color="primary"
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading || isApiAvailable === false}
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              '&:hover': { bgcolor: 'primary.dark' },
              '&:disabled': { bgcolor: 'action.disabledBackground' },
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>

      {/* 注記 */}
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ display: 'block', textAlign: 'center', mt: 2 }}
      >
        ※ Claude AI（Anthropic）を使用してリアルタイムで応答しています
      </Typography>
    </PublicLayout>
  );
};
