import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api, ApiError } from '../lib/api'

const inputClasses =
  'w-full box-border rounded-2xl border border-ink/[0.12] bg-white px-4 py-3.5 font-sans text-[15px] text-ink outline-none focus:border-ember-500 focus:ring-[3px] focus:ring-ember-500/[0.18]'

const labelClasses = 'mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute'

export default function ConfirmSignup() {
  const { token } = useParams()
  const [status, setStatus] = useState('loading')
  const [lead, setLead] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    nomeDono: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    uf: '',
    senha: '',
    confirmarSenha: '',
  })

  useEffect(() => {
    api
      .get(`/leads/confirm/${token}`)
      .then((data) => {
        setLead(data)
        setStatus('ready')
      })
      .catch((error) => {
        setErrorMessage(
          error instanceof ApiError && error.status === 410
            ? 'Esse link expirou. Preencha o formulário na landing page novamente para receber um novo e-mail.'
            : 'Esse link de confirmação é inválido.',
        )
        setStatus('error')
      })
  }, [token])

  function updateField(field) {
    return (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (form.senha !== form.confirmarSenha) {
      setErrorMessage('As senhas não conferem.')
      return
    }
    setErrorMessage('')
    setSubmitting(true)
    try {
      await api.post(`/leads/confirm/${token}`, {
        nomeDono: form.nomeDono,
        cnpj: form.cnpj,
        endereco: form.endereco || undefined,
        cidade: form.cidade || undefined,
        uf: form.uf || undefined,
        senha: form.senha,
      })
      setStatus('done')
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível concluir o cadastro.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="mx-auto max-w-[560px] px-6 py-16">
        {status === 'loading' && <p className="text-center text-ink-soft">Carregando...</p>}

        {status === 'error' && (
          <div className="rounded-[28px] border border-ink/[0.07] bg-card p-8 text-center shadow-[0_20px_50px_rgba(60,35,15,0.1)]">
            <p className="text-ink-soft">{errorMessage}</p>
          </div>
        )}

        {status === 'done' && (
          <div className="rounded-[28px] border border-ink/[0.07] bg-card p-8 text-center shadow-[0_20px_50px_rgba(60,35,15,0.1)]">
            <h1 className="text-2xl font-extrabold">Cadastro em análise</h1>
            <p className="mt-3 text-ink-soft">
              Recebemos seus dados. Vamos revisar e liberar seu acesso em até um dia útil — você receberá um e-mail assim
              que estiver pronto.
            </p>
          </div>
        )}

        {status === 'ready' && lead && (
          <div className="rounded-[28px] border border-ink/[0.07] bg-card p-8 shadow-[0_20px_50px_rgba(60,35,15,0.1)] sm:p-10">
            <h1 className="text-2xl font-extrabold leading-tight sm:text-[28px]">Complete seu cadastro</h1>
            <p className="mt-3 text-ink-soft">
              {lead.nomeEstabelecimento} · {lead.emailContato}
            </p>

            <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
              <div>
                <div className={labelClasses}>Nome do responsável</div>
                <input type="text" className={inputClasses} required value={form.nomeDono} onChange={updateField('nomeDono')} />
              </div>
              <div>
                <div className={labelClasses}>CNPJ</div>
                <input type="text" className={inputClasses} required value={form.cnpj} onChange={updateField('cnpj')} />
              </div>
              <div>
                <div className={labelClasses}>Endereço</div>
                <input type="text" className={inputClasses} value={form.endereco} onChange={updateField('endereco')} />
              </div>
              <div className="grid grid-cols-[1fr_100px] gap-3">
                <div>
                  <div className={labelClasses}>Cidade</div>
                  <input type="text" className={inputClasses} value={form.cidade} onChange={updateField('cidade')} />
                </div>
                <div>
                  <div className={labelClasses}>UF</div>
                  <input type="text" maxLength={2} className={inputClasses} value={form.uf} onChange={updateField('uf')} />
                </div>
              </div>
              <div>
                <div className={labelClasses}>Senha</div>
                <input type="password" minLength={8} className={inputClasses} required value={form.senha} onChange={updateField('senha')} />
              </div>
              <div>
                <div className={labelClasses}>Confirmar senha</div>
                <input
                  type="password"
                  minLength={8}
                  className={inputClasses}
                  required
                  value={form.confirmarSenha}
                  onChange={updateField('confirmarSenha')}
                />
              </div>

              <div className="mt-1 rounded-2xl bg-ember-500/10 px-4 py-3 text-sm font-semibold text-ink-soft">
                Plano: 30 dias grátis (intermediário)
              </div>

              {errorMessage && <div className="text-sm font-semibold text-red-600">{errorMessage}</div>}

              <button
                type="submit"
                disabled={submitting}
                className="mt-1.5 rounded-full bg-ember-500 py-4 font-sans text-base font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:bg-ember-400 disabled:opacity-60"
              >
                {submitting ? 'Enviando...' : 'Concluir cadastro'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
