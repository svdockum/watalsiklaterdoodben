import type { User } from '~/types'

export const useSupabaseAuth = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const signUp = async (email: string, password: string, fullName: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      })

      if (error) throw error
      return { user: data.user, error: null }
    } catch (error) {
      return { user: null, error }
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error
      return { session: data.session, error: null }
    } catch (error) {
      return { session: null, error }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      return { error }
    }
  }

  const resetPassword = async (email: string) => {
    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email)
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  return {
    user,
    signUp,
    signIn,
    signOut,
    resetPassword,
  }
}

export const useSupabaseProfile = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const fetchProfile = async () => {
    if (!user.value) return null

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.value.id)
        .single()

      if (error) throw error
      return data as User
    } catch (error) {
      console.error('Error fetching profile:', error)
      return null
    }
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!user.value) return null

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.value.id)
        .select()
        .single()

      if (error) throw error
      return data as User
    } catch (error) {
      console.error('Error updating profile:', error)
      return null
    }
  }

  return {
    fetchProfile,
    updateProfile,
  }
}
