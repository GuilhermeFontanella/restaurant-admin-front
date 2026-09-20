import shotDashboardKpi from '../assets/shot-dashboard-kpi.png'

const CHECKLIST = [
  'Faturamento, pedidos, ticket médio e bebidas do dia',
  'Vendas por categoria e pratos mais vendidos',
  'Horários de pico para dimensionar a escala',
  'Acesso separado para gerente, balcão e cozinha',
]

export default function Dashboard() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Controle do dono</div>
          <h2 className="gradient-text mt-4 text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
            Faturamento, ticket médio e horário de pico na mesma tela
          </h2>
          <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-mist-soft sm:text-base">
            O painel de gestão mostra o dia em andamento e compara com ontem, sete e trinta dias.
            Cardápio, estoque, pedidos e equipe ficam no mesmo lugar, com permissão por função.
          </p>
          <div className="mt-7 grid gap-3">
            {CHECKLIST.map((item) => (
              <div key={item} className="flex items-start gap-3 text-[15px] leading-snug text-mist">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-ember-500/15 text-xs font-extrabold text-ember-400">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="glow-blob absolute -right-10 top-10 h-[300px] w-[70%] rounded-full opacity-60" />
          <div className="relative overflow-hidden rounded-2xl border border-night-line bg-night-soft shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
            <img
              src={shotDashboardKpi}
              alt="Dashboard de gestão com faturamento, ticket médio e horários de pico"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
