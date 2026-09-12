const currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

const CARDS = [
  { key: 'activeCount', label: 'Assinaturas ativas' },
  { key: 'pendingApproval', label: 'Aguardando aprovação' },
  { key: 'expiringSoonCount', label: 'Próximas de vencer' },
  { key: 'inactiveCount', label: 'Inativos' },
]

export default function StatsPanel({ stats }) {
  if (!stats) return null

  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {CARDS.map((card) => (
        <div key={card.key} className="rounded-2xl border border-ink/[0.07] bg-card p-4 shadow-[0_10px_30px_rgba(60,35,15,0.06)]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-ink-mute">{card.label}</div>
          <div className="mt-1 text-2xl font-extrabold">{stats[card.key]}</div>
          {card.key === 'activeCount' && (
            <div className="mt-1 text-xs font-semibold text-ember-600">{currencyFormatter.format(stats.monthlyRevenue)} / mês</div>
          )}
        </div>
      ))}
    </div>
  )
}
