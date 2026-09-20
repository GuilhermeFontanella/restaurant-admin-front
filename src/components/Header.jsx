import { useState } from 'react'
import logoMark from '../assets/logo-mark.png'

const NAV_LINKS = [
  { href: '#paineis', label: 'Painéis' },
  { href: '#pagamentos', label: 'Pagamentos' },
  { href: '#economia', label: 'Economia' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'Dúvidas' },
]

const ORDER_MANAGER_URL = import.meta.env.VITE_ORDER_MANAGER_URL ?? 'http://localhost:5174'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-night-line/70 bg-night/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1200px] items-center gap-6 px-6 py-3.5 sm:px-8">
        <a href="#topo" className="flex items-center gap-2.5">
          <img
            src={logoMark}
            alt="Boteco do Zé"
            className="h-9 w-9 rounded-xl bg-white object-contain p-1"
          />
          <span className="whitespace-nowrap text-[15px] font-extrabold tracking-tight text-white">
            Boteco do Zé
          </span>
        </a>

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-mist-soft transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href={`${ORDER_MANAGER_URL}/login`}
            className="hidden text-sm font-semibold text-mist-soft transition hover:text-white sm:block"
          >
            Entrar
          </a>
          <a
            href="#cadastro"
            className="whitespace-nowrap rounded-full bg-white px-4 py-2.5 text-[13px] font-bold text-night transition hover:bg-mist sm:px-5 sm:text-sm"
          >
            Criar conta
          </a>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md p-2 text-mist-soft transition hover:text-white lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-night-line/70 px-6 pb-4 lg:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-mist-soft transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
