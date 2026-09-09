import shotDashboardKpi from '../assets/shot-dashboard-kpi.png'

const CHECKLIST = [
  'Faturamento, pedidos, ticket médio e bebidas do dia',
  'Vendas por categoria e pratos mais vendidos',
  'Acesso separado para gerente, balcão e cozinha',
]

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-[1160px] px-8 pt-[88px]">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-ember-700">Controle do dono</div>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
            Faturamento, ticket médio e horário de pico na mesma tela
          </h2>
          <p className="mt-4 max-w-[40ch] text-base leading-relaxed text-ink-soft sm:text-[17px]">
            O painel de gestão mostra o dia em andamento e compara com ontem, sete e trinta dias.
            Cardápio, estoque, pedidos e equipe ficam no mesmo lugar, com permissão por função.
          </p>
          <div className="mt-6 grid gap-3">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ember-500/[0.16] text-xs font-extrabold text-ember-700">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-ink/[0.07] bg-card shadow-[0_22px_52px_rgba(60,35,15,0.14)]">
          <div className="h-[280px] overflow-hidden sm:h-[350px] lg:h-[430px]">
            <img
              src={shotDashboardKpi}
              alt="Dashboard de gestão interna"
              className="block h-full w-full object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
