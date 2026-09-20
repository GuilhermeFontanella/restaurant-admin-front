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
    <section className="mx-auto max-w-[1200px] px-6 pt-20 sm:px-8">
      <div className="text-center text-xs font-bold uppercase tracking-widest text-mist-mute">
        Compromissos, não promessas
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {COMMITMENTS.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-night-line bg-night-soft p-6 transition hover:border-mist-mute/40"
          >
            <div className="text-[15px] font-extrabold leading-snug tracking-tight text-white">
              {item.title}
            </div>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-mist-soft">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
