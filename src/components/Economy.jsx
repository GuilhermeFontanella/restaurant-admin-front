const STATS = [
  { value: '1', label: 'atendente a menos no repasse de pedidos' },
  { value: '0', label: 'comandas de papel para conferir no fim da noite' },
  { value: '4', label: 'etapas visíveis ao vivo, do pedido à retirada' },
  { value: 'R$ 0', label: 'de investimento em equipamento: use o que já tem' },
]

export default function Economy() {
  return (
    <section id="economia" className="mx-auto max-w-[1160px] px-8 pt-[88px]">
      <div className="relative overflow-hidden rounded-[28px] bg-dark p-8 text-white shadow-[0_26px_60px_rgba(20,10,4,0.32)] sm:p-10 lg:p-[52px]">
        <div
          className="pointer-events-none absolute -left-32 -top-44 h-[560px] w-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,129,31,.28), rgba(245,129,31,0) 70%)' }}
        />
        <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-ember-400">Economia de pessoal</div>
            <h2 className="mt-3.5 text-[32px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
              Menos gente correndo entre mesa, cozinha e balcão
            </h2>
            <p className="mt-4 max-w-[42ch] text-base leading-relaxed text-dark-soft sm:text-[17px]">
              Repassar pedido não é serviço, é retrabalho. Quando a informação anda sozinha entre os
              painéis, a mesma equipe atende mais mesas — e o dono vê em qual etapa cada pedido está.
            </p>
            <div className="mt-7 rounded-2xl border border-white/[0.08] bg-white/[0.05] px-6 py-5">
              <div className="text-[13px] leading-relaxed text-dark-mute">
                Conta de um bar com 20 mesas, dois turnos: um atendente a menos no salão representa
                cerca de <strong className="font-bold text-white">R$ 2.400 por mês</strong> em salário e
                encargos. A plataforma custa uma fração disso.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-white/[0.08] bg-white/[0.06] p-6">
                <div className="text-3xl font-extrabold tracking-tighter text-ember-400 sm:text-[40px]">{stat.value}</div>
                <div className="mt-1.5 text-[13px] leading-snug text-dark-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative mt-4 text-[11px] text-[#6E5B51]">
          Estimativa para ilustrar a conta. Os números variam com o porte e o formato de atendimento da casa.
        </div>
      </div>
    </section>
  )
}
