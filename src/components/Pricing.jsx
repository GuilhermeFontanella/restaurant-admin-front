const PLANS = [
  {
    name: 'Balcão',
    description: 'Para casas de atendimento rápido',
    price: 'R$ 149',
    featured: false,
    features: [
      'Cardápio digital e painel do balcão',
      'Display de chamada no salão',
      'Pagamento por Pix e cartão',
      'Até 15 mesas',
      'Relatório do dia',
    ],
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
    <section id="planos" className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Planos</div>
        <h2 className="gradient-text mx-auto mt-4 max-w-[24ch] text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
          Preço pelo que a casa opera, não por usuário
        </h2>
        <p className="mx-auto mt-4 max-w-[54ch] text-[15px] leading-relaxed text-mist-soft">
          Toda a equipe usa a plataforma no plano que você escolher, sem cobrança por usuário e sem
          comissão sobre as vendas. O que a casa fatura é da casa.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 items-start gap-4 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={
              plan.featured
                ? 'relative rounded-2xl border border-ember-500/50 bg-night-card p-8 shadow-[0_24px_60px_rgba(245,129,31,0.12)]'
                : 'rounded-2xl border border-night-line bg-night-soft p-8'
            }
          >
            {plan.badge && (
              <div className="absolute -top-[13px] left-8 rounded-full bg-ember-500 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#2A1403]">
                {plan.badge}
              </div>
            )}
            <div className="text-lg font-extrabold tracking-tight text-white">{plan.name}</div>
            <p className="mt-1.5 text-sm leading-snug text-mist-mute">{plan.description}</p>
            <div className="mt-5 flex items-baseline gap-1.5">
              <span
                className={
                  plan.featured
                    ? 'text-[38px] font-extrabold tracking-tighter text-ember-400'
                    : 'text-[38px] font-extrabold tracking-tighter text-white'
                }
              >
                {plan.price}
              </span>
              <span className="text-sm font-semibold text-mist-mute">/mês</span>
            </div>
            <div className="my-6 h-px bg-night-line" />
            <div className="grid gap-2.5 text-sm leading-snug text-mist">
              {plan.features.map((feature) => (
                <div key={feature}>{feature}</div>
              ))}
            </div>
            <a
              href="#cadastro"
              className={
                plan.featured
                  ? 'mt-7 block rounded-full bg-ember-500 py-3.5 text-center text-[15px] font-bold text-[#2A1403] transition hover:bg-ember-400'
                  : 'mt-7 block rounded-full border border-night-line bg-night-card py-3.5 text-center text-[15px] font-bold text-white transition hover:border-mist-mute'
              }
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-[62ch] text-center text-[13px] leading-relaxed text-mist-mute">
        A plataforma já está no ar e estamos abrindo para as primeiras casas. Quem entra agora fala
        direto com quem desenvolve o produto.
      </p>
    </section>
  )
}
