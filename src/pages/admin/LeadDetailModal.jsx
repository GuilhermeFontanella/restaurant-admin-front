import { useState } from 'react'
import { api, ApiError } from '../../lib/api'
import { getToken } from '../../lib/auth'

const ORDER_MANAGER_URL = import.meta.env.VITE_ORDER_MANAGER_URL ?? 'http://localhost:5174'

const RESTAURANT_STATUS_LABELS = {
  TRIAL: 'Em teste',
  ACTIVE: 'Ativo',
  PAST_DUE: 'Pagamento pendente',
  SUSPENDED: 'Acesso suspenso',
  CANCELLED: 'Cancelado',
}

function formatDate(value) {
  if (!value) return '—'
  return new Date(value).toLocaleDateString('pt-BR')
}

export default function LeadDetailModal({ lead, onClose, onChanged }) {
  const [busy, setBusy] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [confirmingDelete, setConfirmingDelete] = useState(false)
  const [confirmText, setConfirmText] = useState('')

  const restaurant = lead.restaurant

  async function runAction(action) {
    setBusy(true)
    setErrorMessage('')
    try {
      await action()
      onChanged()
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível concluir a ação.')
    } finally {
      setBusy(false)
    }
  }

  function handleSuspend() {
    runAction(() => api.post(`/restaurants/${restaurant.id}/suspend`, {}, getToken()))
  }

  function handleReactivate() {
    runAction(() => api.post(`/restaurants/${restaurant.id}/reactivate`, {}, getToken()))
  }

  function handleDelete() {
    runAction(async () => {
      await api.del(`/restaurants/${restaurant.id}`, getToken())
      onClose()
    })
  }

  const deletionEligibleAt = restaurant?.exclusaoLiberadaEm ? new Date(restaurant.exclusaoLiberadaEm) : null
  const deletionAllowed = deletionEligibleAt ? deletionEligibleAt <= new Date() : false
  const confirmMatches = confirmText.trim() === lead.nomeEstabelecimento

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        className="max-h-[90vh] w-full max-w-[560px] overflow-y-auto rounded-[28px] border border-ink/[0.07] bg-card p-8 shadow-[0_20px_50px_rgba(60,35,15,0.2)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-xl font-extrabold">{lead.nomeEstabelecimento}</h2>
          <button onClick={onClose} className="text-ink-mute hover:text-ink">
            ✕
          </button>
        </div>

        <div className="mt-4 grid gap-1 text-sm text-ink-soft">
          <div>
            <span className="font-semibold text-ink">E-mail:</span> {lead.emailContato}
          </div>
          <div>
            <span className="font-semibold text-ink">WhatsApp:</span> {lead.telefoneContato}
          </div>
          {lead.nomeDono && (
            <div>
              <span className="font-semibold text-ink">Responsável:</span> {lead.nomeDono}
            </div>
          )}
          {lead.cnpj && (
            <div>
              <span className="font-semibold text-ink">CNPJ:</span> {lead.cnpj}
            </div>
          )}
          {(lead.endereco || lead.cidade) && (
            <div>
              <span className="font-semibold text-ink">Endereço:</span> {lead.endereco}
              {lead.cidade ? ` · ${lead.cidade}${lead.uf ? `/${lead.uf}` : ''}` : ''}
            </div>
          )}
          <div>
            <span className="font-semibold text-ink">Cadastrado em:</span> {formatDate(lead.criadoEm)}
          </div>
          {lead.status === 'REJECTED' && lead.motivoRejeicao && (
            <div>
              <span className="font-semibold text-ink">Motivo da rejeição:</span> {lead.motivoRejeicao}
            </div>
          )}
        </div>

        {restaurant && (
          <div className="mt-6 rounded-2xl border border-ink/[0.07] bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="font-bold">Restaurante</div>
              <div className="text-xs font-bold uppercase tracking-wider text-ink-mute">
                {RESTAURANT_STATUS_LABELS[restaurant.status] ?? restaurant.status}
              </div>
            </div>
            <div className="mt-2 text-sm text-ink-soft">
              Plano: {restaurant.subscription?.plan?.nome ?? '—'}
              {restaurant.subscription?.trialEndsAt && ` · teste até ${formatDate(restaurant.subscription.trialEndsAt)}`}
            </div>
            <a
              href={`${ORDER_MANAGER_URL}/login`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-ember-600 hover:underline"
            >
              Acessar o Order Manager ↗
            </a>

            {errorMessage && <div className="mt-3 text-sm font-semibold text-red-600">{errorMessage}</div>}

            <div className="mt-4 flex flex-wrap gap-2">
              {restaurant.status === 'SUSPENDED' ? (
                <button
                  disabled={busy}
                  onClick={handleReactivate}
                  className="rounded-full bg-ember-500 px-4 py-2 text-sm font-bold text-[#2A1403] transition hover:bg-ember-400 disabled:opacity-60"
                >
                  Reativar acesso
                </button>
              ) : (
                <button
                  disabled={busy}
                  onClick={handleSuspend}
                  className="rounded-full border border-ink/[0.12] px-4 py-2 text-sm font-bold text-ink-soft transition hover:border-ink/[0.3] disabled:opacity-60"
                >
                  Remover acesso
                </button>
              )}
              <button
                disabled={busy}
                onClick={() => setConfirmingDelete(true)}
                className="rounded-full border border-red-200 px-4 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50 disabled:opacity-60"
              >
                Excluir
              </button>
            </div>

            {!deletionAllowed && deletionEligibleAt && (
              <div className="mt-2 text-xs text-ink-mute">
                Exclusão definitiva liberada a partir de {formatDate(deletionEligibleAt)} (3 meses após o fim do último ciclo pago).
              </div>
            )}
          </div>
        )}

        {confirmingDelete && (
          <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4">
            <div className="font-bold text-red-700">Excluir {lead.nomeEstabelecimento} permanentemente</div>
            <p className="mt-1 text-sm text-red-700">
              Essa ação apaga o restaurante, o tenant e todos os dados. Não pode ser desfeita.
            </p>
            {!deletionAllowed ? (
              <p className="mt-2 text-sm font-semibold text-red-700">
                Ainda não é possível excluir este restaurante {deletionEligibleAt && `(liberado em ${formatDate(deletionEligibleAt)})`}.
              </p>
            ) : (
              <>
                <p className="mt-3 text-sm text-red-700">
                  Digite <strong>{lead.nomeEstabelecimento}</strong> para confirmar:
                </p>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(event) => setConfirmText(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-red-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-red-300"
                />
                <div className="mt-3 flex gap-2">
                  <button
                    disabled={!confirmMatches || busy}
                    onClick={handleDelete}
                    className="rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Excluir permanentemente
                  </button>
                  <button
                    onClick={() => {
                      setConfirmingDelete(false)
                      setConfirmText('')
                    }}
                    className="rounded-full border border-red-200 px-4 py-2 text-sm font-bold text-red-700 hover:bg-red-100"
                  >
                    Cancelar
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
