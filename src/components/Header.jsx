const NAV_LINKS = [
  { href: '#paineis', label: 'Painéis' },
  { href: '#pagamentos', label: 'Pagamentos' },
  { href: '#economia', label: 'Economia' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#planos', label: 'Planos' },
]

const ORDER_MANAGER_URL = import.meta.env.VITE_ORDER_MANAGER_URL ?? 'http://localhost:5174'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.07] bg-cream/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex max-w-[1160px] items-center gap-8 px-8 py-3.5">
        <div className="mr-auto flex items-center gap-3">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-gradient-to-br from-ember-400 to-ember-600 shadow-[0_6px_16px_rgba(224,108,12,0.32)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFF4E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="14" rx="3"></rect>
              <path d="M8 20h8"></path>
            </svg>
          </div>
          <div>
            <div className="text-base font-extrabold leading-tight tracking-tight">Boteco do Zé</div>
            <div className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-ink-mute">
              Software de gestão
            </div>
          </div>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink-soft lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-ink-soft hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={`${ORDER_MANAGER_URL}/login`}
            className="hidden whitespace-nowrap text-sm font-semibold text-ink-soft hover:text-ink sm:block"
          >
            Entrar
          </a>
          <a
            href="#cadastro"
            className="whitespace-nowrap rounded-full bg-ember-500 px-[22px] py-[11px] text-sm font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:-translate-y-0.5 hover:bg-ember-400"
          >
            Criar conta grátis
          </a>
        </div>
      </div>
    </header>
  )
}
