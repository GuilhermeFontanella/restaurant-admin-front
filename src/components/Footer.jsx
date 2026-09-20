import CompanyFooter from './CompanyFooter'
import logoMark from '../assets/logo-mark.png'

const COLUMNS = [
  {
    title: 'Produto',
    links: [
      { href: '#paineis', label: 'Os quatro painéis' },
      { href: '#pagamentos', label: 'Pagamentos' },
      { href: '#tecnologia', label: 'Tecnologia' },
      { href: '#planos', label: 'Planos' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { href: '#faq', label: 'Dúvidas frequentes' },
      { href: '#economia', label: 'Economia de pessoal' },
      { href: '#cadastro', label: 'Falar com a gente' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-night-line bg-night-soft">
      <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-8">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="max-w-[260px]">
            <div className="flex items-center gap-2.5">
              <img src={logoMark} alt="Boteco do Zé" className="h-10 w-10 rounded-xl bg-white object-contain p-1" />
              <div>
                <div className="text-[15px] font-extrabold text-white">Boteco do Zé</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-mist-mute">
                  Software de gestão
                </div>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-mist-soft">
              Plataforma de gestão em tempo real para bares e restaurantes: cardápio digital, balcão,
              cozinha e display de chamada.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <div className="text-[13px] font-bold uppercase tracking-wider text-white">{column.title}</div>
              <div className="mt-4 grid gap-2.5">
                {column.links.map((link) => (
                  <a
                    key={link.href + link.label}
                    href={link.href}
                    className="text-[13.5px] text-mist-soft transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div>
            <div className="text-[13px] font-bold uppercase tracking-wider text-white">Comece agora</div>
            <p className="mt-4 max-w-[220px] text-[13.5px] leading-relaxed text-mist-soft">
              Conta pronta no mesmo dia, sem cartão e sem fidelidade.
            </p>
            <a
              href="#cadastro"
              className="mt-4 inline-block rounded-full bg-ember-500 px-6 py-3 text-sm font-bold text-[#2A1403] transition hover:bg-ember-400"
            >
              Criar conta grátis
            </a>
          </div>
        </div>

        <div className="mt-12">
          <CompanyFooter variant="dark" />
        </div>
      </div>
    </footer>
  )
}
