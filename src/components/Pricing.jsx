const PLANS = [
  {
    name: 'Balcão',
    description: 'Para casas de atendimento rápido',
    price: 'R$ 149',
    featured: false,
    features: ['Cardápio digital e painel do balcão', 'Display de chamada no salão', 'Pagamento por Pix e cartão', 'Até 15 mesas', 'Relatório do dia'],
    cta: 'Começar grátis',
  },
  {
    name: 'Salão',
    description: 'Para bares com mesa e cozinha própria',
    price: 'R$ 289',
    featured: true,
    badge: 'Mais escolhido',
    features: [
      'Os quatro painéis em tempo real',
      'Mesas ilimitadas e controle de estoque',
      'Mercado Pago na sua conta: Pix, cartão e Google Pay',
      'Dashboard de gestão com histórico',
    ],
    cta: 'Criar conta grátis',
  },
  {
    name: 'Rede',
    description: 'Para quem opera mais de uma unidade',
    price: 'R$ 549',
    featured: false,
    features: [
      'Tudo do plano Salão',
      'Módulo order-manager com código de barras',
      'Comparativo entre unidades',
      'Suporte no WhatsApp em horário de pico',
    ],
    cta: 'Começar grátis',
  },
]

export default function Pricing() {
  return (
    <section id="planos" className="mx-auto max-w-[1160px] px-8 pt-[88px]">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-700">Planos</div>
        <h2 className="mx-auto mt-3 text-[32px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
          Preço pelo que a casa opera, não por usuário
        </h2>
        <p className="mx-auto mt-3.5 max-w-[54ch] text-base leading-relaxed text-ink-soft">
          Toda a equipe usa a plataforma no plano que você escolher, sem cobrança por usuário e sem
          comissão sobre as vendas. O que a casa fatura é da casa.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 items-start gap-4 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={
              plan.featured
                ? 'relative rounded-3xl border border-ember-500/50 bg-dark p-8 text-white shadow-[0_24px_54px_rgba(20,10,4,0.3)]'
                : 'rounded-3xl border border-ink/[0.07] bg-card p-8'
            }
          >
            {plan.badge && (
              <div className="absolute -top-[13px] left-8 rounded-full bg-ember-500 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#2A1403]">
                {plan.badge}
              </div>
            )}
            <div className="text-lg font-extrabold tracking-tight">{plan.name}</div>
            <p className={plan.featured ? 'mt-1.5 text-sm leading-snug text-dark-mute' : 'mt-1.5 text-sm leading-snug text-ink-mute'}>
              {plan.description}
            </p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span className={plan.featured ? 'text-[38px] font-extrabold tracking-tighter text-ember-400' : 'text-[38px] font-extrabold tracking-tighter'}>
                {plan.price}
              </span>
              <span className={plan.featured ? 'text-sm font-semibold text-dark-mute' : 'text-sm font-semibold text-ink-mute'}>/mês</span>
            </div>
            <div className={plan.featured ? 'my-6 h-px bg-white/10' : 'my-6 h-px bg-ink/[0.08]'} />
            <div className={plan.featured ? 'grid gap-2.5 text-sm leading-snug text-[#E8DED8]' : 'grid gap-2.5 text-sm leading-snug text-ink'}>
              {plan.features.map((feature) => (
                <div key={feature}>{feature}</div>
              ))}
            </div>
            <a
              href="#cadastro"
              className={
                plan.featured
                  ? 'mt-7 block rounded-full bg-ember-500 py-3.5 text-center text-[15px] font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:bg-ember-400'
                  : 'mt-7 block rounded-full border border-ink/10 bg-ink/5 py-3.5 text-center text-[15px] font-bold text-ink transition hover:bg-ink/[0.09]'
              }
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-7 max-w-[62ch] text-center text-[13px] leading-relaxed text-ink-mute">
        A plataforma já está no ar e estamos abrindo para as primeiras casas. Quem entra agora fala
        direto com quem desenvolve o produto.
      </p>
    </section>
  )
}
