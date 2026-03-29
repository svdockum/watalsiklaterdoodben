// User Types
export interface User {
  id: string
  email: string
  full_name: string
  date_of_birth?: string
  phone?: string
  created_at: string
  updated_at: string
}

// Memory Types
export interface Memory {
  id: string
  user_id: string
  title: string
  description: string
  category: 'voorbereiding' | 'herinnering' | 'nabestaanden'
  image_url?: string
  created_at: string
  updated_at: string
}

// Vault Types
export interface Vault {
  id: string
  user_id: string
  title: string
  content: string
  is_encrypted: boolean
  access_level: 'private' | 'trusted_contacts' | 'public'
  created_at: string
  updated_at: string
}

// Funeral Wish Types
export interface FuneralWish {
  id: string
  user_id: string
  ceremony_type: 'burial' | 'cremation' | 'other'
  location?: string
  music_selections: string[]
  readings: string[]
  special_requests: string
  created_at: string
  updated_at: string
}

// Trusted Contact Types
export interface TrustedContact {
  id: string
  user_id: string
  name: string
  email: string
  phone?: string
  relationship: string
  access_level: 'view' | 'edit' | 'full'
  created_at: string
  updated_at: string
}

// Checklist Types
export interface ChecklistItem {
  id: string
  user_id: string
  title: string
  description?: string
  category: 'legal' | 'financial' | 'property' | 'digital' | 'personal'
  completed: boolean
  due_date?: string
  created_at: string
  updated_at: string
}

export interface Checklist {
  id: string
  user_id: string
  items: ChecklistItem[]
  completion_percentage: number
  created_at: string
  updated_at: string
}
