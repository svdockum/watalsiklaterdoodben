import type { TrustedContact } from '~/types'

export const useTrustedContacts = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const fetchContacts = async () => {
    if (!user.value) return []

    try {
      const { data, error } = await supabase
        .from('trusted_contacts')
        .select('*')
        .eq('user_id', user.value.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      return (data || []) as TrustedContact[]
    } catch (error) {
      console.error('Error fetching trusted contacts:', error)
      return []
    }
  }

  const addContact = async (contact: Omit<TrustedContact, 'id' | 'created_at' | 'updated_at'>) => {
    if (!user.value) return null

    try {
      const { data, error } = await supabase
        .from('trusted_contacts')
        .insert([
          {
            ...contact,
            user_id: user.value.id,
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data as TrustedContact
    } catch (error) {
      console.error('Error adding trusted contact:', error)
      return null
    }
  }

  const updateContact = async (id: string, updates: Partial<TrustedContact>) => {
    try {
      const { data, error } = await supabase
        .from('trusted_contacts')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data as TrustedContact
    } catch (error) {
      console.error('Error updating trusted contact:', error)
      return null
    }
  }

  const removeContact = async (id: string) => {
    try {
      const { error } = await supabase.from('trusted_contacts').delete().eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error removing trusted contact:', error)
      return false
    }
  }

  return {
    fetchContacts,
    addContact,
    updateContact,
    removeContact,
  }
}
