const API_URL = import.meta.env.VITE_API_URL ?? 'https://kitchen-service-jwjmpw.fly.dev'

export class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.status = status
  }
}

async function request(path, { method = 'GET', body, token } = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  })

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const message = data?.message ?? 'Não foi possível completar a solicitação.'
    throw new ApiError(Array.isArray(message) ? message.join(', ') : message, response.status)
  }

  return data
}

export const api = {
  get: (path, token) => request(`${API_URL}${path}`, { token }),
  post: (path, body, token) => request(path, { method: 'POST', body, token }),
  patch: (path, body, token) => request(path, { method: 'PATCH', body, token }),
  del: (path, token) => request(path, { method: 'DELETE', token }),
}
