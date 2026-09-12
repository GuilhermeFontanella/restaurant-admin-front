import { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { api } from '../../lib/api'
import { clearToken, getToken } from '../../lib/auth'

export default function ProtectedRoute() {
  const [status, setStatus] = useState('checking')

  useEffect(() => {
    const token = getToken()
    if (!token) {
      setStatus('unauthenticated')
      return
    }
    api
      .get('/auth/me', token)
      .then(() => setStatus('authenticated'))
      .catch(() => {
        clearToken()
        setStatus('unauthenticated')
      })
  }, [])

  if (status === 'checking') {
    return <div className="flex min-h-screen items-center justify-center bg-cream text-ink-soft">Carregando...</div>
  }

  if (status === 'unauthenticated') {
    return <Navigate to="/admin/login" replace />
  }

  return <Outlet />
}
