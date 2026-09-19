import { APP_VERSION, COMPANY } from '../config/company'

// Para exibir o logo, coloque um arquivo chamado company-logo.svg, .png, .webp ou .jpg em src/assets/.
const logoFiles = import.meta.glob('/src/assets/company-logo.{svg,png,webp,jpg,jpeg}', {
  query: '?url',
  import: 'default',
  eager: true,
})
const logoUrl = Object.values(logoFiles)[0]

const initials = COMPANY.name
  .split(' ')
  .filter((word) => word.length > 2)
  .map((word) => word[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

export default function CompanyFooter({ variant = 'light' }) {
  const dark = variant === 'dark'
  const textClasses = dark ? 'text-dark-mute' : 'text-ink-mute'
  const strongClasses = dark ? 'text-dark-soft' : 'text-ink-soft'
  const linkClasses = dark ? 'hover:text-white' : 'hover:text-ink'
  const borderClasses = dark ? 'border-white/10' : 'border-ink/[0.08]'
  const pillClasses = dark ? 'border-white/10 bg-white/5' : 'border-ink/[0.08] bg-ink/[0.04]'
  const logoBoxClasses = dark
    ? 'border-white/20 text-dark-soft'
    : 'border-ink/20 text-ink-soft'

  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t pt-5 text-[12.5px] ${borderClasses} ${textClasses}`}
    >
      <div className="flex items-center gap-3">
        {logoUrl ? (
          <img src={logoUrl} alt={COMPANY.name} className="h-9 w-9 rounded-[9px] object-contain" />
        ) : (
          <div
            aria-hidden="true"
            className={`grid h-9 w-9 place-items-center rounded-[9px] border border-dashed text-xs font-extrabold tracking-wide ${logoBoxClasses}`}
          >
            {initials}
          </div>
        )}
        <div>
          <div className={`font-bold ${strongClasses}`}>Desenvolvido por {COMPANY.name}</div>
          <div>CNPJ {COMPANY.cnpj}</div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
        <a href={`tel:${COMPANY.phone.replace(/\D/g, '')}`} className={linkClasses}>
          {COMPANY.phone}
        </a>
        <a href={`mailto:${COMPANY.email}`} className={linkClasses}>
          {COMPANY.email}
        </a>
        <span className={`rounded-full border px-2 py-0.5 font-mono text-[11.5px] ${pillClasses}`}>
          Versão {APP_VERSION}
        </span>
      </div>
    </div>
  )
}
