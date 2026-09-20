const STATS = [
  { value: '1', label: 'atendente a menos no repasse de pedidos' },
  { value: '0', label: 'comandas de papel para conferir no fim da noite' },
  { value: '4', label: 'etapas visíveis ao vivo, do pedido à retirada' },
  { value: 'R$ 0', label: 'de investimento em equipamento: use o que já tem' },
]

export default function Economy() {
  return (
    <section id="economia" className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-ember-500/25 bg-night-card p-8 sm:p-10 lg:p-14">
        <div className="glow-blob absolute -left-24 -top-32 h-[420px] w-[420px] rounded-full opacity-70" />

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ember-400">Economia de pessoal</div>
            <h2 className="mt-4 text-[30px] font-extrabold leading-tight tracking-tight text-white sm:text-[38px]">
              Menos gente correndo entre mesa, cozinha e balcão
            </h2>
            <p className="mt-4 max-w-[44ch] text-[15px] leading-relaxed text-mist-soft sm:text-base">
              Repassar pedido não é atendimento, é retrabalho. Quando a informação circula sozinha
              entre os painéis, a mesma equipe cobre mais mesas — e a gerência enxerga em que etapa
              cada pedido está, sem precisar perguntar.
            </p>
            <div className="mt-7 rounded-2xl border border-night-line bg-night-soft px-6 py-5">
              <div className="text-[13px] leading-relaxed text-mist-soft">
                Conta de um bar com 20 mesas, dois turnos: um atendente a menos no salão representa
                cerca de <strong className="font-bold text-white">R$ 2.400 por mês</strong> em salário e
                encargos. A plataforma custa uma fração disso.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-night-line bg-night-soft p-6">
                <div className="text-3xl font-extrabold tracking-tighter text-ember-400 sm:text-[40px]">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[13px] leading-snug text-mist-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6 text-[11px] text-mist-mute">
          Estimativa para ilustrar a conta. Os números variam com o porte e o formato de atendimento da casa.
        </div>
      </div>
    </section>
  )
}
