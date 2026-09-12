import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, ApiError } from '../../lib/api'
import { setToken } from '../../lib/auth'

const inputClasses =
  'w-full box-border rounded-2xl border border-ink/[0.12] bg-white px-4 py-3.5 font-sans text-[15px] text-ink outline-none focus:border-ember-500 focus:ring-[3px] focus:ring-ember-500/[0.18]'

export default function AdminLogin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [forgotMode, setForgotMode] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotSent, setForgotSent] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  function toggleForgotMode(next) {
    setForgotMode(next)
    setForgotSent(false)
    setErrorMessage('')
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setErrorMessage('')
    setSubmitting(true)
    try {
      const data = await api.post('/auth/login', { email, senha })
      setToken(data.accessToken)
      navigate('/admin/leads')
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível entrar.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleForgotPassword(event) {
    event.preventDefault()
    setErrorMessage('')
    setSubmitting(true)
    try {
      await api.post('/auth/forgot-password', { email: forgotEmail })
      setForgotSent(true)
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível solicitar a recuperação.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream font-sans text-ink">
      <form
        className="w-full max-w-[380px] rounded-[28px] border border-ink/[0.07] bg-card p-8 shadow-[0_20px_50px_rgba(60,35,15,0.1)]"
        onSubmit={forgotMode ? handleForgotPassword : handleSubmit}
      >
        <h1 className="text-xl font-extrabold">Portal admin</h1>
        <p className="mt-1 text-sm text-ink-soft">
          {forgotMode ? 'Informe seu e-mail para receber o link de recuperação.' : 'Acesse o painel de leads.'}
        </p>

        <div className="mt-6 grid gap-3">
          {forgotMode ? (
            <input
              type="email"
              placeholder="E-mail"
              className={inputClasses}
              required
              value={forgotEmail}
              onChange={(event) => setForgotEmail(event.target.value)}
            />
          ) : (
            <>
              <input
                type="email"
                placeholder="E-mail"
                className={inputClasses}
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                className={inputClasses}
                required
                value={senha}
                onChange={(event) => setSenha(event.target.value)}
              />
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => toggleForgotMode(true)}
                  className="text-xs font-semibold text-ink-soft hover:text-ink"
                >
                  Esqueci minha senha
                </button>
              </div>
            </>
          )}

          {forgotSent && (
            <div className="text-sm font-semibold text-emerald-600">
              Se o e-mail estiver cadastrado, você receberá as instruções em instantes.
            </div>
          )}
          {errorMessage && <div className="text-sm font-semibold text-red-600">{errorMessage}</div>}

          <button
            type="submit"
            disabled={submitting}
            className="mt-1.5 rounded-full bg-ember-500 py-3.5 font-sans text-base font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:bg-ember-400 disabled:opacity-60"
          >
            {submitting ? 'Enviando...' : forgotMode ? 'Enviar instruções' : 'Entrar'}
          </button>

          {forgotMode && (
            <button
              type="button"
              onClick={() => toggleForgotMode(false)}
              className="text-center text-xs font-semibold text-ink-mute hover:text-ink"
            >
              Voltar para o login
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
