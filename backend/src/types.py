"""型定義 - フロントエンドと同期"""

from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum


class MessageRole(str, Enum):
    USER = "user"
    ASSISTANT = "assistant"


class ConversationStep(str, Enum):
    GREETING = "greeting"
    AREA = "area"
    RENT = "rent"
    LAYOUT = "layout"
    TIMING = "timing"
    PROPOSAL = "proposal"
    RESERVATION = "reservation"
    COMPLETE = "complete"


class Message(BaseModel):
    """チャットメッセージ"""
    message_id: str = Field(..., alias="messageId")
    role: MessageRole
    content: str
    timestamp: datetime

    class Config:
        populate_by_name = True


class CollectedInfo(BaseModel):
    """収集した顧客情報"""
    area: Optional[str] = None
    max_rent: Optional[int] = Field(None, alias="maxRent")
    layout: Optional[str] = None
    move_in_timing: Optional[str] = Field(None, alias="moveInTiming")
    name: Optional[str] = None
    phone_number: Optional[str] = Field(None, alias="phoneNumber")
    preferred_date: Optional[str] = Field(None, alias="preferredDate")

    class Config:
        populate_by_name = True


class ChatRequest(BaseModel):
    """チャットリクエスト"""
    message: str
    conversation_id: Optional[str] = Field(None, alias="conversationId")
    messages: Optional[list[Message]] = None

    class Config:
        populate_by_name = True


class ChatResponse(BaseModel):
    """チャットレスポンス"""
    message: str
    conversation_id: str = Field(..., alias="conversationId")

    class Config:
        populate_by_name = True


class Property(BaseModel):
    """物件データ"""
    property_id: str = Field(..., alias="propertyId")
    name: str
    area: str
    rent: int
    layout: str
    station: str
    walk_minutes: int = Field(..., alias="walkMinutes")
    features: list[str]

    class Config:
        populate_by_name = True


class HealthResponse(BaseModel):
    """ヘルスチェックレスポンス"""
    status: str
    timestamp: datetime
