import { getCookie } from '@/lib/cookies'

export function isAuthenticated(): boolean {
  const token = getCookie('token')

  return !!token
}