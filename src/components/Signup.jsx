import { useState } from 'react'
import { api, ApiError } from '../lib/api'

const BENEFITS = ['Conta pronta no mesmo dia', 'Ajudamos a subir seu cardápio', 'Cancele quando quiser']

const inputClasses =
  'w-full box-border rounded-2xl border border-ink/[0.12] bg-white px-4 py-3.5 font-sans text-[15px] text-ink outline-none focus:border-ember-500 focus:ring-[3px] focus:ring-ember-500/[0.18]'

export default function Signup() {
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [form, setForm] = useState({ nomeEstabelecimento: '', emailContato: '', telefoneContato: '' })

  function updateField(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    try {
      await api.post('/leads', form)
      setStatus('done')
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível enviar seu cadastro. Tente de novo.')
      setStatus('idle')
    }
  }

  return (
    <section id="cadastro" className="mx-auto max-w-[1160px] px-8 pb-24 pt-[88px]">
      <div className="grid grid-cols-1 items-center gap-12 rounded-[28px] border border-ink/[0.07] bg-card p-8 shadow-[0_20px_50px_rgba(60,35,15,0.1)] sm:p-10 lg:grid-cols-[1fr_400px] lg:p-[52px]">
        <div>
          <h2 className="max-w-[20ch] text-[28px] font-extrabold leading-tight tracking-tight sm:text-[36px]">
            Crie sua conta grátis e teste com uma mesa hoje
          </h2>
          <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-ink-soft sm:text-[17px]">
            Você monta o cardápio, abre os painéis e roda um pedido de ponta a ponta. Sem cartão, sem
            contrato, sem instalar nada.
          </p>
          <div className="mt-6 grid gap-2 text-sm font-semibold text-ink-soft">
            {BENEFITS.map((benefit) => (
              <div key={benefit}>{benefit}</div>
            ))}
          </div>
        </div>

        {status === 'done' ? (
          <div className="rounded-2xl bg-ember-500/10 p-6 text-center">
            <div className="font-bold">Confira seu e-mail</div>
            <p className="mt-2 text-sm text-ink-soft">
              Enviamos um link para {form.emailContato} para você concluir o cadastro.
            </p>
          </div>
        ) : (
          <form className="grid gap-3" onSubmit={handleSubmit}>
            <div>
              <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">Nome do estabelecimento</div>
              <input
                type="text"
                placeholder="Bar do Alto"
                className={inputClasses}
                required
                value={form.nomeEstabelecimento}
                onChange={updateField('nomeEstabelecimento')}
              />
            </div>
            <div>
              <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">E-mail</div>
              <input
                type="email"
                placeholder="voce@seubar.com.br"
                className={inputClasses}
                required
                value={form.emailContato}
                onChange={updateField('emailContato')}
              />
            </div>
            <div>
              <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">WhatsApp</div>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className={inputClasses}
                required
                value={form.telefoneContato}
                onChange={updateField('telefoneContato')}
              />
            </div>
            {errorMessage && <div className="text-sm font-semibold text-red-600">{errorMessage}</div>}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="mt-1.5 rounded-full bg-ember-500 py-4 font-sans text-base font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:bg-ember-400 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Enviando...' : 'Criar conta grátis'}
            </button>
            <div className="text-center text-xs leading-relaxed text-ink-mute">
              Você recebe um e-mail na hora para continuar o cadastro.
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
