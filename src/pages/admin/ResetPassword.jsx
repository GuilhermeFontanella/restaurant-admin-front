import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { api, ApiError } from '../../lib/api'

const inputClasses =
  'w-full box-border rounded-2xl border border-ink/[0.12] bg-white px-4 py-3.5 font-sans text-[15px] text-ink outline-none focus:border-ember-500 focus:ring-[3px] focus:ring-ember-500/[0.18]'

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get('token') ?? ''
  const [senha, setSenha] = useState('')
  const [confirmacao, setConfirmacao] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    if (!token) {
      setErrorMessage('Link de recuperação inválido.')
      return
    }
    if (senha.length < 8) {
      setErrorMessage('A nova senha deve ter pelo menos 8 caracteres.')
      return
    }
    if (senha !== confirmacao) {
      setErrorMessage('A confirmação não confere.')
      return
    }

    setErrorMessage('')
    setSubmitting(true)
    try {
      await api.post('/auth/reset-password', { token, novaSenha: senha })
      setSuccess(true)
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível redefinir a senha.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream font-sans text-ink">
      <div className="w-full max-w-[380px] rounded-[28px] border border-ink/[0.07] bg-card p-8 shadow-[0_20px_50px_rgba(60,35,15,0.1)]">
        <h1 className="text-xl font-extrabold">Redefinir senha</h1>

        {success ? (
          <>
            <p className="mt-3 text-sm font-semibold text-emerald-600">Sua senha foi redefinida com sucesso.</p>
            <button
              onClick={() => navigate('/admin/login')}
              className="mt-6 w-full rounded-full bg-ember-500 py-3.5 font-sans text-base font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:bg-ember-400"
            >
              Ir para o login
            </button>
          </>
        ) : (
          <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
            <p className="text-sm text-ink-soft">Escolha uma nova senha para acessar o portal.</p>
            <input
              type="password"
              placeholder="Nova senha"
              minLength={8}
              className={inputClasses}
              required
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
            />
            <input
              type="password"
              placeholder="Confirmar nova senha"
              minLength={8}
              className={inputClasses}
              required
              value={confirmacao}
              onChange={(event) => setConfirmacao(event.target.value)}
            />
            {errorMessage && <div className="text-sm font-semibold text-red-600">{errorMessage}</div>}
            <button
              type="submit"
              disabled={submitting}
              className="mt-1.5 rounded-full bg-ember-500 py-3.5 font-sans text-base font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:bg-ember-400 disabled:opacity-60"
            >
              {submitting ? 'Salvando...' : 'Salvar nova senha'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
