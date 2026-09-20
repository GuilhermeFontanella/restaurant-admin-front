const PLAN = {
  name: 'Salão',
  description: 'Para bares com mesa e cozinha própria',
  price: 'R$ 499,90',
  features: [
    'Os quatro painéis em tempo real',
    'Mesas ilimitadas e controle de estoque',
    'Mercado Pago na sua conta: Pix, cartão e Google Pay',
    'Dashboard de gestão com histórico',
    'Acesso separado para gerente, balcão e cozinha',
    'Suporte direto com quem desenvolve',
  ],
  cta: 'Criar conta grátis',
}

export default function Pricing() {
  return (
    <section id="planos" className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Plano</div>
        <h2 className="gradient-text mx-auto mt-4 max-w-[24ch] text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
          Preço pelo que a casa opera, não por usuário
        </h2>
        <p className="mx-auto mt-4 max-w-[54ch] text-[15px] leading-relaxed text-mist-soft">
          Toda a equipe usa a plataforma, sem cobrança por usuário e sem comissão sobre as vendas. O
          que a casa fatura é da casa.
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-[460px] rounded-2xl border border-ember-500/50 bg-night-card p-8 shadow-[0_24px_60px_rgba(245,129,31,0.12)] sm:p-10">
          <div className="text-lg font-extrabold tracking-tight text-white">{PLAN.name}</div>
          <p className="mt-1.5 text-sm leading-snug text-mist-mute">{PLAN.description}</p>

          <div className="mt-5 flex items-baseline gap-1.5">
            <span className="text-[38px] font-extrabold tracking-tighter text-ember-400 sm:text-[44px]">
              {PLAN.price}
            </span>
            <span className="text-sm font-semibold text-mist-mute">/mês</span>
          </div>

          <div className="my-6 h-px bg-night-line" />

          <div className="grid gap-3">
            {PLAN.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 text-sm leading-snug text-mist">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ember-500/15 text-xs font-extrabold text-ember-400">
                  ✓
                </span>
                {feature}
              </div>
            ))}
          </div>

          <a
            href="#cadastro"
            className="mt-8 block rounded-full bg-ember-500 py-3.5 text-center text-[15px] font-bold text-[#2A1403] transition hover:bg-ember-400"
          >
            {PLAN.cta}
          </a>
        </div>
      </div>

      <p className="mx-auto mt-8 max-w-[62ch] text-center text-[13px] leading-relaxed text-mist-mute">
        A plataforma já está no ar e estamos abrindo para as primeiras casas. Quem entra agora fala
        direto com quem desenvolve o produto.
      </p>
    </section>
  )
}
