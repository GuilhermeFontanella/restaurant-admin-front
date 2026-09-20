import shotBalcao from '../assets/shot-balcao.png'
import shotCardapio from '../assets/shot-cardapio.png'

export default function Hero() {
  return (
    <section id="topo" className="relative mx-auto max-w-[1200px] px-6 pb-16 pt-16 sm:px-8 sm:pt-20">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-night-line bg-night-soft py-1.5 pl-3 pr-3.5 text-xs font-bold tracking-tight text-ember-400">
          <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-success" />
          Aberto para as primeiras casas
        </div>

        <h1 className="gradient-text text-balance mt-7 max-w-[16ch] text-[40px] font-extrabold uppercase leading-[1.05] tracking-tight sm:text-[58px] lg:text-[70px] lg:leading-[1.02]">
          O salão inteiro em tempo real
        </h1>

        <p className="text-pretty mt-6 max-w-[58ch] text-base leading-relaxed text-mist-soft sm:text-lg">
          Cardápio digital, balcão, cozinha e display de chamada em uma só plataforma. O pedido nasce
          na mesa do cliente, chega à cozinha no mesmo segundo e volta como chamada no salão — sem
          comanda de papel e sem ninguém repassando pedido à mão.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#cadastro"
            className="rounded-full bg-ember-500 px-7 py-3.5 text-[15px] font-bold text-[#2A1403] shadow-[0_10px_30px_rgba(245,129,31,0.35)] transition hover:-translate-y-0.5 hover:bg-ember-400"
          >
            Criar conta grátis
          </a>
          <a
            href="#paineis"
            className="rounded-full border border-night-line bg-night-soft px-7 py-3.5 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:border-mist-mute"
          >
            Ver os quatro painéis
          </a>
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-semibold text-mist-mute">
          <span>Roda no navegador, sem instalar nada</span>
          <span>Conta pronta no mesmo dia</span>
        </div>
      </div>

      <div className="relative mt-14 sm:mt-16">
        <div className="glow-blob absolute left-1/2 top-4 h-[420px] w-[85%] -translate-x-1/2 rounded-full" />

        <div className="relative mx-auto max-w-[1000px]">
          <div className="overflow-hidden rounded-2xl border border-night-line bg-night-soft shadow-[0_40px_120px_rgba(0,0,0,0.65)]">
            <div className="flex items-center gap-1.5 border-b border-night-line bg-night-card px-4 py-3">
              <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
              <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
              <span className="h-[9px] w-[9px] rounded-full bg-white/15" />
              <span className="ml-3 text-[11px] font-semibold text-mist-mute">Painel do Balcão · ao vivo</span>
            </div>
            <img src={shotBalcao} alt="Painel do balcão em operação" className="block h-auto w-full" />
          </div>

          <div className="absolute -bottom-6 -left-4 hidden w-[150px] overflow-hidden rounded-[20px] border-[5px] border-[#1A1412] bg-night shadow-[0_24px_50px_rgba(0,0,0,0.7)] sm:block lg:-left-10 lg:w-[180px]">
            <img src={shotCardapio} alt="Cardápio no celular do cliente" className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
