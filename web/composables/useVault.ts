import type { Vault } from '~/types'

export const useVault = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const fetchVaultItems = async () => {
    if (!user.value) return []

    try {
      const { data, error } = await supabase
        .from('vaults')
        .select('*')
        .eq('user_id', user.value.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      return (data || []) as Vault[]
    } catch (error) {
      console.error('Error fetching vault items:', error)
      return []
    }
  }

  const createVaultItem = async (vault: Omit<Vault, 'id' | 'created_at' | 'updated_at'>) => {
    if (!user.value) return null

    try {
      const { data, error } = await supabase
        .from('vaults')
        .insert([
          {
            ...vault,
            user_id: user.value.id,
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data as Vault
    } catch (error) {
      console.error('Error creating vault item:', error)
      return null
    }
  }

  const updateVaultItem = async (id: string, updates: Partial<Vault>) => {
    try {
      const { data, error } = await supabase
        .from('vaults')
        .update(updates)
        .eq('id', id)
        .select()
        .single()

      if (error) throw error
      return data as Vault
    } catch (error) {
      console.error('Error updating vault item:', error)
      return null
    }
  }

  const deleteVaultItem = async (id: string) => {
    try {
      const { error } = await supabase.from('vaults').delete().eq('id', id)

      if (error) throw error
      return true
    } catch (error) {
      console.error('Error deleting vault item:', error)
      return false
    }
  }

  return {
    fetchVaultItems,
    createVaultItem,
    updateVaultItem,
    deleteVaultItem,
  }
}
