import type { Memory } from '~/types'

export const useMemories = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const fetchMemories = async (category?: string) => {
    if (!user.value) return []

    try {
      let query = supabase
        .from('memories')
        .select('*')
        .eq('user_id', user.value.id)
        .order('created_at', { ascending: false })

      if (category) {
        query = query.eq('category', category)
      }

      const { data, error } = await query

      if (error) throw error
      return (data || []) as Memory[]
    } catch (error) {
      console.error('Error fetching memories:', error)
      return []
    }
  }

  const createMemory = async (memory: Omit<Memory, 'id' | 'created_at' | 'updated_at'>) => {
    if (!user.value) return null

    try {
      const { data, error } = await supabase
        .from('memories')
        .insert([
          {
            ...memory,
            user_id: user.value.id,
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data as Memory
    } catch (error) {
      console.error('Error creating memory:', error)
      return null
    }
  }

  const updateMemory = async (id: string, updates: Partial<Memory>) => {
    try {
      const { data, error } = await supabase
        .from('memories')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data as Memory
    } catch (error) {
      console.error('Error updating memory:', error)
      return null
    }
  }

  const deleteMemory = async (id: string) => {
    try {
      const { error } = await supabase.from('memories').delete().eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting memory:', error)
      return false
    }
  }

  return {
    fetchMemories,
    createMemory,
    updateMemory,
    deleteMemory,
  }
}
