import { useState } from 'react'

const QUESTIONS = [
  {
    question: 'Preciso comprar algum equipamento?',
    answer:
      'Não. Os quatro painéis rodam no navegador, em qualquer celular, tablet ou computador que a casa já tenha. Para o display de chamada, costuma-se usar uma TV do salão com um navegador aberto.',
  },
  {
    question: 'Como o dinheiro das vendas chega até mim?',
    answer:
      'Você cadastra as credenciais da sua própria conta Mercado Pago na tela de configuração. As cobranças são feitas nessa conta e o valor cai lá direto, no prazo do seu contrato com o Mercado Pago. A plataforma não intermedia o pagamento.',
  },
  {
    question: 'Vocês cobram alguma porcentagem sobre as vendas?',
    answer:
      'Não. A única cobrança é a mensalidade do plano escolhido. As taxas de processamento são as do próprio Mercado Pago, negociadas diretamente com eles.',
  },
  {
    question: 'E se o cliente quiser pagar em dinheiro?',
    answer:
      'O cardápio oferece a opção "pagar no balcão". O pedido é criado com status aguardando pagamento e fica na fila do balcão até o atendente confirmar o recebimento.',
  },
  {
    question: 'Meus dados ficam misturados com os de outros restaurantes?',
    answer:
      'Não. Cada restaurante opera em um banco de dados separado — a arquitetura é database-per-tenant. Os dados da sua casa ficam isolados dos demais clientes da plataforma.',
  },
  {
    question: 'Existe fidelidade ou multa para cancelar?',
    answer:
      'Não há contrato de permanência nem multa de saída. Você pode cancelar quando quiser e levar seus dados.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-8">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Dúvidas frequentes</div>
        <h2 className="gradient-text mx-auto mt-4 max-w-[30ch] text-[30px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
          O que costumam perguntar antes de assinar
        </h2>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-[860px] flex-col gap-3">
        {QUESTIONS.map((item, index) => {
          const open = openIndex === index
          return (
            <div key={item.question} className="rounded-xl border border-night-line bg-night-soft">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                aria-expanded={open}
                className="flex w-full items-center gap-4 px-6 py-5 text-left"
              >
                <span className="flex-1 text-[16px] font-bold tracking-tight text-white sm:text-[17px]">
                  {item.question}
                </span>
                <span
                  className={
                    'flex h-6 w-6 flex-none items-center justify-center text-xl font-light text-mist-soft transition-transform ' +
                    (open ? 'rotate-45' : '')
                  }
                >
                  +
                </span>
              </button>
              <div className={'faq-answer' + (open ? ' open' : '')}>
                <div>
                  <p className="px-6 pb-5 text-[14.5px] leading-relaxed text-mist-soft">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-[15px] text-mist-soft">Ficou alguma pergunta de fora?</p>
        <a
          href="#cadastro"
          className="mt-4 inline-block rounded-full border border-night-line bg-night-soft px-7 py-3 text-sm font-bold text-white transition hover:border-mist-mute"
        >
          Falar com a gente
        </a>
      </div>
    </section>
  )
}
