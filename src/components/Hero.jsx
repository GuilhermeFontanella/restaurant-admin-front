import shotBalcao from '../assets/shot-balcao.png'
import shotCardapio from '../assets/shot-cardapio.png'

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-[1160px] px-8 pb-10 pt-16 sm:pt-[72px]">
      <div
        className="pointer-events-none absolute -right-40 -top-36 h-[620px] w-[620px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(245,129,31,.22), rgba(245,129,31,0) 68%)' }}
      />
      <div className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-ember-500/40 bg-ember-500/10 py-1.5 pl-3 pr-3.5 text-xs font-bold tracking-tight text-ember-700">
            <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-success" />
            Aberto para as primeiras casas
          </div>
          <h1 className="text-balance mt-6 text-[42px] font-extrabold leading-[1.05] tracking-tighter sm:text-[52px] lg:text-[60px] lg:leading-[1.02]">
            O salão inteiro
            <br />
            <span className="text-ember-600">em tempo real</span>
          </h1>
          <p className="text-pretty mt-6 max-w-[36ch] text-lg leading-relaxed text-ink-soft sm:text-[19px]">
            Cardápio digital, balcão, cozinha e display de chamada em uma só plataforma. O pedido
            nasce na mesa do cliente, chega à cozinha no mesmo segundo e volta como chamada no salão —
            sem comanda de papel e sem ninguém repassando pedido à mão.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#cadastro"
              className="rounded-full bg-ember-500 px-[30px] py-4 text-base font-bold text-[#2A1403] shadow-[0_8px_22px_rgba(224,108,12,0.38)] transition hover:-translate-y-0.5 hover:bg-ember-400"
            >
              Criar conta grátis
            </a>
            <a
              href="#paineis"
              className="rounded-full border border-ink/10 bg-card px-7 py-4 text-base font-bold text-ink transition hover:-translate-y-0.5"
            >
              Ver os quatro painéis
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-semibold text-ink-mute">
            <span>Roda no navegador, sem instalar nada</span>
            <span>Conta pronta no mesmo dia</span>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-ink/[0.07] bg-card shadow-[0_24px_60px_rgba(60,35,15,0.18)]">
            <div className="flex items-center gap-1.5 border-b border-ink/[0.06] bg-[#F7F1EC] px-4 py-3">
              <span className="h-[9px] w-[9px] rounded-full bg-ink/[0.16]" />
              <span className="h-[9px] w-[9px] rounded-full bg-ink/[0.16]" />
              <span className="h-[9px] w-[9px] rounded-full bg-ink/[0.16]" />
              <span className="ml-3 text-[11px] font-semibold text-ink-mute">Painel do Balcão · ao vivo</span>
            </div>
            <div className="h-[300px] overflow-hidden sm:h-[380px] lg:h-[440px]">
              <img
                src={shotBalcao}
                alt="Painel do balcão"
                className="block h-full w-full object-cover object-left-top"
              />
            </div>
            <div className="absolute bottom-6 left-6 hidden w-[152px] overflow-hidden rounded-[18px] border-[5px] border-[#1A1412] bg-[#100C0A] shadow-[0_18px_40px_rgba(20,10,4,0.42)] sm:block">
              <img src={shotCardapio} alt="Cardápio no celular do cliente" className="block h-auto w-full" />
            </div>
            <div className="absolute bottom-6 right-6 rounded-2xl border border-ink/[0.07] bg-card px-[18px] py-3 shadow-[0_14px_32px_rgba(60,35,15,0.22)]">
              <div className="text-[10px] font-bold uppercase tracking-wider text-ink-mute">Pedido #33 · Mesa 4</div>
              <div className="mt-1 flex items-center gap-2 text-sm font-bold text-ink">
                <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-ember-500" />
                Pronto em 0,2s na cozinha
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
