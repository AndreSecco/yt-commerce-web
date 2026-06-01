import { create } from 'zustand'
import { loginWithCredentials, loginWithGoogle } from '@/services/auth.services'

interface User {
  id: number
  name: string
  email: string
  avatar: string
}

interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  googleLogin: (accessToken: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isLoading: false,

  googleLogin: async (accessToken) => {
    set({ isLoading: true })
    try {
      const { accessToken: jwt, user } = await loginWithGoogle(accessToken)
      document.cookie = `token=${jwt}; path=/; max-age=${60 * 60 * 24 * 7}` // 7 days
      set({ token: jwt, user })
      window.location.href = '/dashboard'
    } finally {
      set({ isLoading: false })
    }
  },

  login: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      // Implement traditional login logic here
      // console.log("Logging in with:", { email, password })
      const data = await loginWithCredentials(email, password)

      console.log(data)
    } catch (e) {
      console.error(e)
    }
  },

  logout: () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    set({ user: null, token: null })
  },
}))