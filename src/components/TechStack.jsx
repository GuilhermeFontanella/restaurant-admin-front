const FEATURES = [
  {
    title: 'Sincronia via WebSocket',
    description: 'Socket.io mantém os quatro painéis conectados. Mudança de status em um aparece nos outros sem recarregar a página.',
  },
  {
    title: 'Um banco por restaurante',
    description: 'Arquitetura database-per-tenant: cada casa tem seus dados em banco próprio, isolados dos demais clientes da plataforma.',
  },
  {
    title: 'Cardápio com a sua cara',
    description: 'Nome, logo e cor do estabelecimento no cardápio que o cliente abre. A estrutura é a mesma, a identidade é sua.',
  },
]

const TAGS = ['React + Vite', 'Tailwind', 'Framer Motion', 'TanStack Query', 'Socket.io', '@zxing · código de barras', 'Fly.io']

export default function TechStack() {
  return (
    <section id="tecnologia" className="mx-auto max-w-[1160px] px-8 pt-[88px]">
      <div className="text-xs font-bold uppercase tracking-widest text-ember-700">Por baixo do capô</div>
      <h2 className="mt-3 max-w-[24ch] text-[32px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
        Tempo real de verdade e dados isolados por restaurante
      </h2>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {FEATURES.map((feature) => (
          <div key={feature.title} className="rounded-[22px] border border-ink/[0.07] bg-card p-7">
            <div className="text-lg font-extrabold tracking-tight">{feature.title}</div>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 items-center gap-11 rounded-3xl border border-ink/[0.07] bg-card p-8 sm:p-10 lg:grid-cols-2">
        <div>
          <div className="inline-flex rounded-full bg-ember-500/[0.12] px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-ember-700">
            Módulo avançado
          </div>
          <div className="mt-4 text-2xl font-extrabold tracking-tight sm:text-[26px]">order-manager</div>
          <p className="mt-2.5 max-w-[46ch] text-[15px] leading-relaxed text-ink-soft">
            O módulo dedicado ao ciclo de vida do pedido entre os painéis, com leitura de código de
            barras para dar baixa e conferir item. Em produção no Fly.io.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <span key={tag} className="rounded-full border border-ink/[0.08] bg-ink/5 px-[15px] py-2.5 text-[13px] font-semibold text-ink">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
