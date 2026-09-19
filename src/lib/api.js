import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'https://restaurant-admin-service-ydvk4w.fly.dev'

const http = axios.create({ baseURL: API_URL })

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

async function request(path, { method = 'GET', body, token } = {}) {
  try {
    const { data } = await http.request({
      url: path,
      method,
      data: body,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
    return data
  } catch (error) {
    const message = error.response?.data?.message ?? 'Não foi possível completar a solicitação.'
    throw new ApiError(Array.isArray(message) ? message.join(', ') : message, error.response?.status)
  }
}

export const api = {
  get: (path, token) => request(path, { token }),
  post: (path, body, token) => request(path, { method: 'POST', body, token }),
  patch: (path, body, token) => request(path, { method: 'PATCH', body, token }),
  del: (path, token) => request(path, { method: 'DELETE', token }),
}
