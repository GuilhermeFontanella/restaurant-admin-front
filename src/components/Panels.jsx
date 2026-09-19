import shotDisplayTight from '../assets/shot-display-tight.png'
import shotCozinha from '../assets/shot-cozinha.png'

const PANELS = [
  {
    number: '01',
    title: 'Cardápio',
    description:
      'Onde o pedido nasce. O cliente na mesa ou o atendente monta o pedido a partir do menu do estabelecimento.',
    dark: false,
  },
  {
    number: '02',
    title: 'Balcão',
    description:
      'Recebe e processa o pedido antes da produção. É o ponto de atendimento e de gestão do que está em andamento.',
    dark: false,
  },
  {
    number: '03',
    title: 'Cozinha',
    description:
      'Recebe o pedido no instante em que é feito e atualiza o status conforme prepara: em preparo, depois pronto.',
    dark: false,
  },
  {
    number: '04',
    title: 'Display de Chamada',
    description: 'A tela do salão. Quando a cozinha marca pronto, o pedido aparece aqui chamando a mesa automaticamente.',
    dark: true,
  },
]

export default function Panels() {
  return (
    <section id="paineis" className="mx-auto max-w-[1160px] px-8 pt-20">
      <div className="flex flex-wrap items-end justify-between gap-10">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-ember-700">Os quatro painéis</div>
          <h2 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
            Uma tela para cada etapa do pedido
          </h2>
        </div>
        <p className="max-w-[38ch] text-base leading-relaxed text-ink-soft">
          As quatro telas não são independentes: elas trocam status entre si por WebSocket. Marcar
          "pronto" na cozinha muda o display do salão na mesma hora.
        </p>
      </div>

      <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PANELS.map((panel) => (
          <div
            key={panel.number}
            className={
              panel.dark
                ? 'rounded-[22px] border border-white/[0.08] bg-dark p-6 pb-6 text-white shadow-[0_16px_34px_rgba(20,10,4,0.28)]'
                : 'rounded-[22px] border border-ink/[0.07] bg-card p-6 pb-6 shadow-[0_12px_30px_rgba(60,35,15,0.07)]'
            }
          >
            <div
              className={
                panel.dark
                  ? 'flex h-10 w-10 items-center justify-center rounded-xl bg-ember-500/20 text-sm font-extrabold text-ember-400'
                  : 'flex h-10 w-10 items-center justify-center rounded-xl bg-ember-500/[0.14] text-sm font-extrabold text-ember-700'
              }
            >
              {panel.number}
            </div>
            <div className="mt-[18px] text-lg font-extrabold tracking-tight">{panel.title}</div>
            <p className={panel.dark ? 'mt-2 text-sm leading-relaxed text-dark-soft' : 'mt-2 text-sm leading-relaxed text-ink-soft'}>
              {panel.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 items-center gap-9 rounded-3xl border border-ink/[0.07] bg-card p-7 shadow-[0_16px_40px_rgba(60,35,15,0.09)] lg:grid-cols-[1.35fr_1fr]">
        <div className="overflow-hidden rounded-[18px] border border-ink/[0.06]">
          <img
            src={shotCozinha}
            alt="Painel da cozinha com pedidos em preparo e prontos"
            className="block h-auto w-full"
          />
        </div>
        <div>
          <div className="text-xl font-extrabold tracking-tight">A ficha da cozinha, sem papel</div>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            Os pedidos chegam em duas colunas: em preparo e prontos. Cada ficha traz as opções
            escolhidas pelo cliente, a observação da mesa e há quanto tempo o pedido está esperando —
            um toque muda o status e o salão inteiro fica sabendo.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 items-center gap-9 rounded-3xl border border-ink/[0.07] bg-card p-7 shadow-[0_16px_40px_rgba(60,35,15,0.09)] lg:grid-cols-[1.35fr_1fr]">
        <div className="overflow-hidden rounded-[18px] border border-ink/[0.06]">
          <img src={shotDisplayTight} alt="Display de chamada exibindo o pedido pronto" className="block h-auto w-full" />
        </div>
        <div>
          <div className="text-xl font-extrabold tracking-tight">A tela que fica virada para o salão</div>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
            O display fica em espera até a cozinha marcar um pedido como pronto. Nesse instante o
            número e o nome do cliente sobem na tela, com os demais pedidos prontos listados abaixo.
          </p>
        </div>
      </div>
    </section>
  )
}
