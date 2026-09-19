import shotPagamentoMetodos from '../assets/shot-pagamento-metodos.png'
import shotMpConfig from '../assets/shot-mp-config.png'

const CARDS = [
  {
    title: 'Sua conta, seu dinheiro',
    description:
      'Você cadastra as credenciais da sua própria conta Mercado Pago. O valor da venda cai direto lá, no prazo do seu contrato com eles — a plataforma não recebe, não retém e não repassa nada.',
  },
  {
    title: 'Sem comissão por venda',
    description:
      'Não cobramos percentual sobre o que a casa fatura. Você paga a mensalidade do plano e pronto — vender mais não aumenta o que você paga para nós.',
  },
  {
    title: 'Chave guardada com criptografia',
    description:
      'O access token é criptografado antes de ir para o banco (AES-256-GCM) e nunca mais é exibido, nem para você. A tela só mostra se já existe chave configurada.',
  },
]

const METHODS = ['Pix', 'Crédito', 'Débito', 'Google Pay', 'Pagar no balcão']

export default function Payments() {
  return (
    <section id="pagamentos" className="mx-auto max-w-[1160px] px-8 pt-[88px]">
      <div className="text-xs font-bold uppercase tracking-widest text-ember-700">Pagamentos</div>
      <h2 className="mt-3 max-w-[24ch] text-[32px] font-extrabold leading-tight tracking-tight sm:text-[38px]">
        O dinheiro cai direto na conta do seu restaurante
      </h2>
      <p className="text-pretty mt-4 max-w-[62ch] text-base leading-relaxed text-ink-soft sm:text-[17px]">
        O checkout é integrado ao Mercado Pago com as credenciais da sua própria conta. O cliente paga
        no celular dele, o pedido só entra na cozinha depois de confirmado, e o valor vai para onde
        sempre foi: a conta da casa.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {METHODS.map((method) => (
          <span
            key={method}
            className="rounded-full border border-ember-500/30 bg-ember-500/[0.10] px-[15px] py-2.5 text-[13px] font-bold text-ember-700"
          >
            {method}
          </span>
        ))}
      </div>

      <div className="mt-9 grid grid-cols-1 items-center gap-10 rounded-3xl border border-ink/[0.07] bg-card p-7 shadow-[0_16px_40px_rgba(60,35,15,0.09)] sm:p-9 lg:grid-cols-[1fr_300px]">
        <div>
          <div className="text-xl font-extrabold tracking-tight">O cliente escolhe como pagar</div>
          <p className="mt-2.5 max-w-[54ch] text-[15px] leading-relaxed text-ink-soft">
            Pix com QR code, cartão de crédito ou débito e Google Pay são processados pelo Mercado Pago
            sem sair do cardápio. Quem prefere pagar pessoalmente escolhe "pagar no balcão" e o pedido
            fica aguardando o atendente confirmar — útil para quem ainda paga em dinheiro.
          </p>
          <p className="mt-3.5 max-w-[54ch] text-[15px] leading-relaxed text-ink-soft">
            Você liga e desliga cada forma de pagamento na tela de configuração, e o cardápio passa a
            mostrar só o que a casa aceita.
          </p>
        </div>
        <div className="mx-auto w-[240px] overflow-hidden rounded-[18px] border-[5px] border-[#1A1412] bg-dark shadow-[0_18px_40px_rgba(20,10,4,0.3)] lg:mx-0 lg:w-full">
          <img
            src={shotPagamentoMetodos}
            alt="Tela de escolha da forma de pagamento no cardápio do cliente"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CARDS.map((card) => (
          <div key={card.title} className="rounded-[22px] border border-ink/[0.07] bg-card p-7">
            <div className="text-lg font-extrabold tracking-tight">{card.title}</div>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 overflow-hidden rounded-3xl border border-ink/[0.07] bg-card p-7 shadow-[0_16px_40px_rgba(60,35,15,0.09)] sm:p-9">
        <div className="max-w-[58ch]">
          <div className="text-xl font-extrabold tracking-tight">Configurou uma vez, esqueceu</div>
          <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
            Cole a public key e o access token da sua conta Mercado Pago em Configurações → Pagamento.
            Enquanto não configurar, o checkout segue funcionando pela conta padrão do sistema — dá para
            testar a operação antes de plugar a sua.
          </p>
        </div>
        <div className="mt-6 overflow-hidden rounded-[18px] border border-ink/[0.06]">
          <img
            src={shotMpConfig}
            alt="Tela de configuração da integração com o Mercado Pago no painel de gestão"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  )
}
