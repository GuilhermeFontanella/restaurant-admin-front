export default function Footer() {
  return (
    <footer className="bg-dark text-dark-mute">
      <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-6 px-8 py-11">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-[10px] bg-gradient-to-br from-ember-400 to-ember-600" />
          <div className="text-[15px] font-bold text-white">Botequim do Zé</div>
        </div>
        <div className="text-[13px]">Plataforma de gestão para bares e restaurantes</div>
        <div className="flex gap-6 text-[13px] font-semibold">
          <a href="#cadastro" className="text-dark-soft hover:text-white">
            Criar conta
          </a>
          <a href="#planos" className="text-dark-soft hover:text-white">
            Planos
          </a>
          <a href="#paineis" className="text-dark-soft hover:text-white">
            Painéis
          </a>
        </div>
      </div>
    </footer>
  )
}
