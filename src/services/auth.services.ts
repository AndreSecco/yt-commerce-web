import api from './api'

export async function loginWithGoogle(code: string) {
    const { data } = await api.post('/auth/google', { code })  // ✅ envia 'code'
    return data // { accessToken, user }
}

export async function loginWithCredentials(email: string, password: string) {
    const { data } = await api.post('/auth/login', { email, password })
    return data
}