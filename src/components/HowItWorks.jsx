import shotItemOpcoes from '../assets/shot-item-opcoes.png'

const STEPS = [
  {
    step: 'Passo 1',
    title: 'Pedido feito na mesa',
    description:
      'O cliente abre o cardápio pelo QR code, monta o item com as opções da casa, escreve observação e informa o nome usado na chamada.',
  },
  {
    step: 'Passo 2',
    title: 'Pagamento confirmado',
    description:
      'O cliente paga no próprio celular por Pix, cartão ou Google Pay. O pedido entra na fila do balcão já confirmado, com valor, mesa e horário.',
  },
  {
    step: 'Passo 3',
    title: 'Cozinha produz',
    description:
      'A ficha aparece na tela da cozinha na hora. A equipe muda o status para em preparo e depois para pronto.',
  },
  {
    step: 'Passo 4',
    title: 'Display chama a mesa',
    description:
      'O número e o nome do cliente sobem no display do salão assim que o pedido fica pronto. O atendimento para de ser interrompido para responder onde está cada pedido.',
  },
]

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Como funciona</div>
        <h2 className="gradient-text mx-auto mt-4 max-w-[22ch] text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
          Quatro etapas, nenhuma digitação repetida
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {STEPS.map((item, index) => (
          <div key={item.step} className="border-t border-night-line pt-5">
            <div
              className={
                'text-[13px] font-extrabold tracking-tight ' +
                (index === 0 ? 'text-ember-400' : 'text-mist-mute')
              }
            >
              {item.step}
            </div>
            <div className="mt-2 text-lg font-extrabold tracking-tight text-white">{item.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-mist-soft">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 items-center gap-10 rounded-2xl border border-night-line bg-night-soft p-6 sm:p-8 lg:grid-cols-[1fr_240px]">
        <div>
          <div className="text-xl font-extrabold tracking-tight text-white">
            O item sai da mesa do jeito que o cliente pediu
          </div>
          <p className="mt-3 max-w-[54ch] text-[15px] leading-relaxed text-mist-soft">
            Cada produto pode ter grupos de opção — ponto da carne, tamanho da porção, molho — e campo
            de observação. A escolha vai junto para a ficha da cozinha, então ninguém precisa perguntar
            de novo no meio do preparo.
          </p>
        </div>
        <div className="mx-auto w-[200px] overflow-hidden rounded-[18px] border-[5px] border-[#1A1412] bg-night shadow-[0_20px_50px_rgba(0,0,0,0.6)] lg:mx-0 lg:w-full">
          <img src={shotItemOpcoes} alt="Item do cardápio com opções e observação" className="block h-auto w-full" />
        </div>
      </div>
    </section>
  )
}
