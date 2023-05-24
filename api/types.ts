export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Categories: {
        Row: {
          id: number
          label: string | null
        }
        Insert: {
          id?: number
          label?: string | null
        }
        Update: {
          id?: number
          label?: string | null
        }
      }
      events: {
        Row: {
          categoria: string | null
          created_by: string | null
          description: string | null
          event_date_end: string | null
          event_date_start: string | null
          event_end_time: string | null
          event_time_end: string | null
          event_time_start: string | null
          id: number
          image: string | null
          location: string | null
          subtitle: string | null
          title: string | null
        }
        Insert: {
          categoria?: string | null
          created_by?: string | null
          description?: string | null
          event_date_end?: string | null
          event_date_start?: string | null
          event_end_time?: string | null
          event_time_end?: string | null
          event_time_start?: string | null
          id?: number
          image?: string | null
          location?: string | null
          subtitle?: string | null
          title?: string | null
        }
        Update: {
          categoria?: string | null
          created_by?: string | null
          description?: string | null
          event_date_end?: string | null
          event_date_start?: string | null
          event_end_time?: string | null
          event_time_end?: string | null
          event_time_start?: string | null
          id?: number
          image?: string | null
          location?: string | null
          subtitle?: string | null
          title?: string | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
