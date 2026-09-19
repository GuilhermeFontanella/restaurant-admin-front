const COMMITMENTS = [
  {
    title: 'O dinheiro da venda é seu',
    description:
      'O checkout usa as credenciais da conta Mercado Pago do próprio restaurante. A plataforma não recebe, não retém e não repassa valor nenhum.',
  },
  {
    title: 'Sem comissão por venda',
    description:
      'Você paga a mensalidade do plano e mais nada. Faturar mais não aumenta o que você paga para nós.',
  },
  {
    title: 'Dados em banco próprio',
    description:
      'Cada restaurante opera em um banco de dados separado, isolado das outras casas que usam a plataforma.',
  },
  {
    title: 'Sem fidelidade',
    description:
      'Não há contrato de permanência nem multa de saída. Se parar de fazer sentido, você cancela e leva seus dados.',
  },
]

export default function Trust() {
  return (
    <section className="mx-auto max-w-[1160px] px-8 pt-14">
      <div className="rounded-[28px] border border-ink/[0.07] bg-card px-7 py-8 shadow-[0_12px_30px_rgba(60,35,15,0.07)] sm:px-9">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-700">
          Compromissos, não promessas
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {COMMITMENTS.map((item) => (
            <div key={item.title} className="border-t-2 border-ember-500/30 pt-4">
              <div className="text-[15px] font-extrabold leading-snug tracking-tight">{item.title}</div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
