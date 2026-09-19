import shotItemOpcoes from '../assets/shot-item-opcoes.png'

const STEPS = [
  {
    step: 'Passo 1',
    title: 'Pedido feito na mesa',
    description:
      'O cliente abre o cardápio pelo QR code, monta o item com as opções da casa, escreve observação e informa o nome usado na chamada.',
    active: true,
  },
  {
    step: 'Passo 2',
    title: 'Pagamento confirmado',
    description:
      'O cliente paga no próprio celular por Pix, cartão ou Google Pay. O pedido entra na fila do balcão já confirmado, com valor, mesa e horário.',
    active: false,
  },
  {
    step: 'Passo 3',
    title: 'Cozinha produz',
    description: 'A ficha aparece na tela da cozinha na hora. A equipe muda o status para em preparo e depois para pronto.',
    active: false,
  },
  {
    step: 'Passo 4',
    title: 'Display chama a mesa',
    description:
      'O nome sobe no display do salão e o cliente sabe exatamente quando buscar. Ninguém pergunta "cadê meu pedido?".',
    active: false,
  },
]

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1160px] px-8 pt-[88px]">
      <div className="text-xs font-bold uppercase tracking-widest text-ember-700">Como funciona</div>
      <h2 className="mt-3 max-w-[22ch] text-[32px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
        Do celular do cliente ao balcão, sem intermediário
      </h2>

      <div className="mt-11 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {STEPS.map((item) => (
          <div
            key={item.step}
            className={
              'border-t-2 pt-[22px] lg:pr-7 ' + (item.active ? 'border-ember-500' : 'border-ink/[0.12]')
            }
          >
            <div className={'text-[13px] font-extrabold tracking-tight ' + (item.active ? 'text-ember-700' : 'text-ink-mute')}>
              {item.step}
            </div>
            <div className="mt-2 text-lg font-extrabold tracking-tight sm:text-[19px]">{item.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-11 grid grid-cols-1 items-center gap-8 rounded-3xl border border-ink/[0.07] bg-card p-7 sm:p-8 lg:grid-cols-[1fr_260px]">
        <div>
          <div className="text-xl font-extrabold tracking-tight">O item sai da mesa do jeito que o cliente pediu</div>
          <p className="mt-2 max-w-[52ch] text-[15px] leading-relaxed text-ink-soft">
            Cada produto pode ter grupos de opção — ponto da carne, tamanho da porção, molho — e campo
            de observação. A escolha vai junto para a ficha da cozinha, então ninguém precisa perguntar
            de novo no meio do preparo.
          </p>
        </div>
        <div className="mx-auto w-[220px] overflow-hidden rounded-[18px] border-[5px] border-[#1A1412] bg-dark shadow-[0_18px_40px_rgba(20,10,4,0.3)] lg:mx-0 lg:w-full">
          <img src={shotItemOpcoes} alt="Item do cardápio com opções e observação" className="block h-auto w-full" />
        </div>
      </div>
    </section>
  )
}
