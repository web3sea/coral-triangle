export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      ct_newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      followup_trackers: {
        Row: {
          created_at: string
          hubspot_contact_id: string | null
          hubspot_deal_id: string | null
          id: string
          last_email_id: string | null
          last_followup_sent_at: string | null
          lead_email: string
          status: string
          thread_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          hubspot_contact_id?: string | null
          hubspot_deal_id?: string | null
          id?: string
          last_email_id?: string | null
          last_followup_sent_at?: string | null
          lead_email: string
          status: string
          thread_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          hubspot_contact_id?: string | null
          hubspot_deal_id?: string | null
          id?: string
          last_email_id?: string | null
          last_followup_sent_at?: string | null
          lead_email?: string
          status?: string
          thread_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      sent_emails: {
        Row: {
          company_name: string | null
          created_at: string
          email_address: string
          icebreaker: string | null
          id: string
          phone: string | null
          sent_at: string
          subject: string | null
          updated_at: string
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          email_address: string
          icebreaker?: string | null
          id?: string
          phone?: string | null
          sent_at?: string
          subject?: string | null
          updated_at?: string
        }
        Update: {
          company_name?: string | null
          created_at?: string
          email_address?: string
          icebreaker?: string | null
          id?: string
          phone?: string | null
          sent_at?: string
          subject?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      webchat_check_flags: {
        Row: {
          created_at: string
          id: string
          is_summary: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          is_summary?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_summary?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      whatsapp_check_flags: {
        Row: {
          created_at: string
          id: string
          is_summary: boolean
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          is_summary?: boolean
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_summary?: boolean
          updated_at?: string
        }
        Relationships: []
      }
      whatsapp_messages: {
        Row: {
          contact_name: string | null
          created_at: string
          direction: string
          from_number: string
          id: number
          log_id: string
          message_body: string | null
          message_id: string
          message_type: string
          raw_payload: Json | null
          to_number: string
          wa_id: string
        }
        Insert: {
          contact_name?: string | null
          created_at?: string
          direction: string
          from_number: string
          id?: never
          log_id: string
          message_body?: string | null
          message_id: string
          message_type: string
          raw_payload?: Json | null
          to_number: string
          wa_id: string
        }
        Update: {
          contact_name?: string | null
          created_at?: string
          direction?: string
          from_number?: string
          id?: never
          log_id?: string
          message_body?: string | null
          message_id?: string
          message_type?: string
          raw_payload?: Json | null
          to_number?: string
          wa_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      sms_check_flag: { Args: { p_id: string }; Returns: boolean }
      webchat_check_flag: { Args: { p_id: string }; Returns: boolean }
      whatsapp_check_flag: { Args: { p_id: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
