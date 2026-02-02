export interface Conversation {
  id: string
  user_id: string
  user_name?: string
  messages: Message[]
  created_at: string
  updated_at: string
}

export interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: string
}

export interface Client {
  id: string
  name: string
  email: string
  bot_name: string
  telegram_bot_token?: string
  total_conversations: number
  total_tokens: number
  created_at: string
}

export interface UserRole {
  email: string
  role: 'admin' | 'client'
  client_id?: string
}

// Admin email - Camila
export const ADMIN_EMAIL = 'camivelasco@gmail.com'
