import shotDisplayTight from '../assets/shot-display-tight.png'
import shotCozinha from '../assets/shot-cozinha.png'

const PANELS = [
  {
    number: '01',
    title: 'Cardápio',
    description:
      'Onde o pedido nasce. O cliente abre pelo QR code da mesa, monta o item com as opções da casa e paga no próprio celular.',
  },
  {
    number: '02',
    title: 'Balcão',
    description:
      'Recebe o pedido já confirmado, com valor, mesa e horário. É o ponto de atendimento e de gestão do que está em andamento.',
  },
  {
    number: '03',
    title: 'Cozinha',
    description:
      'Recebe a ficha no instante em que o pedido é feito e atualiza o status conforme prepara: em preparo, depois pronto.',
  },
  {
    number: '04',
    title: 'Display de chamada',
    description:
      'A tela do salão. Quando a cozinha marca pronto, o número e o nome do cliente sobem aqui automaticamente.',
  },
]

export default function Panels() {
  return (
    <section id="paineis" className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Os quatro painéis</div>
        <h2 className="gradient-text mx-auto mt-4 max-w-[20ch] text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
          Uma tela para cada etapa do pedido
        </h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-[15px] leading-relaxed text-mist-soft">
          As quatro telas não são independentes: elas trocam status entre si por WebSocket. Marcar
          "pronto" na cozinha muda o display do salão na mesma hora.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PANELS.map((panel) => (
          <div
            key={panel.number}
            className="rounded-xl border border-night-line bg-night-soft p-6 transition hover:border-ember-500/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ember-500/15 text-sm font-extrabold text-ember-400">
              {panel.number}
            </div>
            <div className="mt-5 text-lg font-extrabold tracking-tight text-white">{panel.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-mist-soft">{panel.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 items-center gap-10 rounded-2xl border border-night-line bg-night-soft p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-night-line">
          <img
            src={shotCozinha}
            alt="Painel da cozinha com pedidos em preparo e prontos"
            className="block h-auto w-full"
          />
        </div>
        <div>
          <div className="text-xl font-extrabold tracking-tight text-white">A ficha da cozinha, sem papel</div>
          <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">
            Os pedidos chegam em duas colunas: em preparo e prontos. Cada ficha traz as opções
            escolhidas pelo cliente, a observação da mesa e há quanto tempo o pedido está esperando —
            um toque muda o status e o salão inteiro fica sabendo.
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 items-center gap-10 rounded-2xl border border-night-line bg-night-soft p-6 sm:p-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="overflow-hidden rounded-xl border border-night-line">
          <img src={shotDisplayTight} alt="Display de chamada exibindo o pedido pronto" className="block h-auto w-full" />
        </div>
        <div>
          <div className="text-xl font-extrabold tracking-tight text-white">A tela virada para o salão</div>
          <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">
            O display fica em espera até a cozinha marcar um pedido como pronto. Nesse instante o
            número e o nome do cliente sobem na tela, com os demais pedidos prontos listados abaixo.
          </p>
        </div>
      </div>
    </section>
  )
}
