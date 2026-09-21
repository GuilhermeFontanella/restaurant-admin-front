import shotItemOpcoes from '../assets/shot-item-opcoes.png';
import { useState } from 'react';

const STEPS = [
  {
    id: 1,
    step: 'Passo 1',
    title: 'Pedido feito na mesa',
    subtitle: 'O pedido sai da mesa do jeito que o cliente pediu',
    description:
      'O cliente abre o cardápio pelo QR code, monta o item com as opções da casa, escreve observação e informa o nome usado na chamada.',
    image: 'src/assets/shot-cardapio.png'
  },
  {
    id: 2,
    step: 'Passo 2',
    title: 'Pagamento confirmado',
    subtitle: 'O pagamento é confirmado e o pedido entra na fila do balcão',
    description:
      'O cliente paga no próprio celular por Pix, cartão ou Google Pay. O pedido entra na fila do balcão já confirmado, com valor, mesa e horário.',
    image: 'src/assets/shot-pgto-ok.jpeg'
  },
  {
    id: 3,
    step: 'Passo 3',
    title: 'Cozinha produz',
    subtitle: 'A ficha aparece na tela da cozinha e muda de status conforme o preparo',
    description:
      'A ficha aparece na tela da cozinha na hora. A equipe muda o status para em preparo e depois para pronto.',
    image: 'src/assets/shot-cozinha.png'
  },
  {
    id: 4,
    step: 'Passo 4',
    title: 'Display chama a mesa',
    subtitle: 'O número e o nome do cliente sobem no display do salão',
    description:
      'O número e o nome do cliente sobem no display do salão assim que o pedido fica pronto. O atendimento para de ser interrompido para responder onde está cada pedido.',
    image: 'src/assets/shot-display-tight.png'
  },
]

export default function HowItWorks() {
  const [stepSelected, setStepSelected] = useState(STEPS[0] ?? null);

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
          <div onClick={() => {
            setStepSelected(item);
          }} key={item.step} className="border border-night-line pt-5 bg-night px-4 transition hover:border-ember-500/40" style={{borderRadius: `8px`}}>
            <div
              className={
                'text-[13px] font-extrabold tracking-tight ' +
                (stepSelected.id === item.id ? 'text-ember-400' : 'text-mist-mute')
              }
            >
              {item.step}
            </div>
            <div className="mt-2 text-lg font-extrabold tracking-tight text-white">{item.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-mist-soft">{item.description}</p>
          </div>
        ))}
      </div>

      {stepSelected && (
        <div className="relative mt-12 h-90 overflow-hidden rounded-2xl border border-night-line bg-night-soft sm:h-180">
          <img
            key={`${stepSelected.id}-image`}
            src={stepSelected.image}
            alt={stepSelected.title}
            className={
              (stepSelected.id === 1 || stepSelected.id === 2
                ? 'absolute inset-y-0 left-2/5 h-full w-auto max-w-[60%] -translate-x-1/2 object-contain p-8 sm:p-12'
                : 'absolute inset-0 h-full w-full object-cover') + ' animate-panel-image'
            }
          />
          <div
            key={`${stepSelected.id}-overlay`}
            className="absolute inset-y-0 right-0 w-4/5 bg-linear-to-l from-night via-night/60 to-transparent backdrop-blur-3xl"
            style={{
              WebkitMaskImage: 'linear-gradient(to left, white, rgba(255, 255, 255, 0.9), transparent)',
              maskImage: 'linear-gradient(to left, white, rgba(255, 255, 255, 0.9), transparent)',
            }}
          />
          <div
            key={`${stepSelected.id}-text`}
            className="animate-panel-text absolute inset-y-0 right-0 flex max-w-[40%] flex-col justify-center p-6 text-right sm:p-8"
          >
            <div className="text-xl font-extrabold tracking-tight text-white">{stepSelected.subtitle}</div>
            <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">{stepSelected.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}
