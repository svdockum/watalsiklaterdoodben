import type { Checklist, ChecklistItem } from '~/types'

export const useChecklist = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const fetchChecklist = async () => {
    if (!user.value) return null

    try {
      const { data, error } = await supabase
        .from('checklists')
        .select('*')
        .eq('user_id', user.value.id)
        .single()

      if (error && error.code !== 'PGRST116') {
        throw error
      }

      return data as Checklist | null
    } catch (error) {
      console.error('Error fetching checklist:', error)
      return null
    }
  }

  const addItem = async (item: Omit<ChecklistItem, 'id' | 'created_at' | 'updated_at'>) => {
    if (!user.value) return null

    try {
      const { data, error } = await supabase
        .from('checklist_items')
        .insert([
          {
            ...item,
            user_id: user.value.id,
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data as ChecklistItem
    } catch (error) {
      console.error('Error adding checklist item:', error)
      return null
    }
  }

  const updateItem = async (id: string, updates: Partial<ChecklistItem>) => {
    try {
      const { data, error } = await supabase
        .from('checklist_items')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data as ChecklistItem
    } catch (error) {
      console.error('Error updating checklist item:', error)
      return null
    }
  }

  const toggleItem = async (id: string, completed: boolean) => {
    return updateItem(id, { completed })
  }

  const deleteItem = async (id: string) => {
    try {
      const { error } = await supabase.from('checklist_items').delete().eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting checklist item:', error)
      return false
    }
  }

  return {
    fetchChecklist,
    addItem,
    updateItem,
    toggleItem,
    deleteItem,
  }
}
