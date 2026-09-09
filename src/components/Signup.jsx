import { useState } from 'react'

const BENEFITS = ['Conta pronta no mesmo dia', 'Ajudamos a subir seu cardápio', 'Cancele quando quiser']

const inputClasses =
  'w-full box-border rounded-2xl border border-ink/[0.12] bg-white px-4 py-3.5 font-sans text-[15px] text-ink outline-none focus:border-ember-500 focus:ring-[3px] focus:ring-ember-500/[0.18]'

export default function Signup() {
  const [enviado, setEnviado] = useState(false)

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

        <form
          className="grid gap-3"
          onSubmit={(event) => {
            event.preventDefault()
            setEnviado(true)
          }}
        >
          <div>
            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">Nome do estabelecimento</div>
            <input type="text" placeholder="Botequim do Zé" className={inputClasses} required />
          </div>
          <div>
            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">E-mail</div>
            <input type="email" placeholder="voce@seubar.com.br" className={inputClasses} required />
          </div>
          <div>
            <div className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-ink-mute">WhatsApp</div>
            <input type="tel" placeholder="(00) 00000-0000" className={inputClasses} required />
          </div>
          <button
            type="submit"
            className="mt-1.5 rounded-full bg-ember-500 py-4 font-sans text-base font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:bg-ember-400"
          >
            {enviado ? 'Recebemos seu contato' : 'Criar conta grátis'}
          </button>
          <div className="text-center text-xs leading-relaxed text-ink-mute">
            Respondemos em até um dia útil para liberar seu acesso.
          </div>
        </form>
      </div>
    </section>
  )
}
