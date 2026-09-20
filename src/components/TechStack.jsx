const FEATURES = [
  {
    title: 'Sincronia via WebSocket',
    description:
      'Socket.io mantém os quatro painéis conectados. Mudança de status em um aparece nos outros sem recarregar a página.',
  },
  {
    title: 'Um banco por restaurante',
    description:
      'Arquitetura database-per-tenant: cada casa tem seus dados em banco próprio, isolados dos demais clientes da plataforma.',
  },
  {
    title: 'Credenciais criptografadas',
    description:
      'As chaves do gateway de pagamento de cada casa são criptografadas com AES-256-GCM antes de ir para o banco e nunca voltam pela API.',
  },
  {
    title: 'Cardápio com a sua cara',
    description:
      'Nome, logo e cor do estabelecimento no cardápio que o cliente abre. A estrutura é a mesma, a identidade é sua.',
  },
  {
    title: 'Controle de estoque',
    description:
      'Insumos vinculados aos produtos, com baixa automática conforme os pedidos saem e leitura de código de barras na conferência.',
  },
  {
    title: 'Permissão por função',
    description:
      'Gerente, head chef, balcão e cozinha enxergam apenas o que precisam, cada um com seu próprio acesso.',
  },
]

const TAGS = ['React + Vite', 'NestJS', 'PostgreSQL', 'Socket.io', 'Mercado Pago', 'Fly.io']

export default function TechStack() {
  return (
    <section id="tecnologia" className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Por baixo do capô</div>
        <h2 className="gradient-text mx-auto mt-4 max-w-[24ch] text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
          Tempo real de verdade e dados isolados por restaurante
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-night-line bg-night-soft p-7 transition hover:border-mist-mute/40"
          >
            <div className="text-[17px] font-extrabold tracking-tight text-white">{feature.title}</div>
            <p className="mt-2.5 text-sm leading-relaxed text-mist-soft">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {TAGS.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-night-line bg-night-soft px-4 py-2 text-[13px] font-semibold text-mist-soft"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
