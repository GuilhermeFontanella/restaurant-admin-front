import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, ApiError } from '../../lib/api'
import { clearToken, getToken } from '../../lib/auth'
import Pagination from '../../components/Pagination'
import LeadDetailModal from './LeadDetailModal'
import StatsPanel from './StatsPanel'

const STATUS_LABELS = {
  AWAITING_CONFIRMATION: 'Aguardando confirmação',
  PENDING: 'Aguardando aprovação',
  APPROVED: 'Aprovado',
  REJECTED: 'Rejeitado',
}

const UFS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
  'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO',
]

const PAGE_SIZE = 10

const inputClasses =
  'rounded-xl border border-ink/[0.12] bg-white px-3 py-2 text-sm text-ink outline-none focus:border-ember-500 focus:ring-[3px] focus:ring-ember-500/[0.18]'

function formatDate(value) {
  return new Date(value).toLocaleDateString('pt-BR')
}

export default function AdminLeads() {
  const navigate = useNavigate()
  const [leads, setLeads] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const [busyId, setBusyId] = useState(null)
  const [selectedLeadId, setSelectedLeadId] = useState(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [ufFilter, setUfFilter] = useState('')

  async function loadLeads(filters, pageNumber) {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (filters.search) params.set('search', filters.search)
      if (filters.status) params.set('status', filters.status)
      if (filters.uf) params.set('uf', filters.uf)
      params.set('page', String(pageNumber))
      params.set('pageSize', String(PAGE_SIZE))
      const data = await api.get(`/leads?${params.toString()}`, getToken())
      setLeads(data.items)
      setTotal(data.total)
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível carregar os leads.')
    } finally {
      setLoading(false)
    }
  }

  async function loadStats() {
    try {
      const data = await api.get('/restaurants/stats', getToken())
      setStats(data)
    } catch {
      // painel de números é informativo; falha aqui não deve travar a listagem
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPage(1)
      loadLeads({ search, status: statusFilter, uf: ufFilter }, 1)
    }, 350)
    return () => clearTimeout(timeout)
  }, [search, statusFilter, ufFilter])

  useEffect(() => {
    loadStats()
  }, [])

  function handleLogout() {
    clearToken()
    navigate('/admin/login')
  }

  function refresh() {
    loadLeads({ search, status: statusFilter, uf: ufFilter }, page)
    loadStats()
  }

  function handlePageChange(nextPage) {
    setPage(nextPage)
    loadLeads({ search, status: statusFilter, uf: ufFilter }, nextPage)
  }

  async function handleApprove(id) {
    setBusyId(id)
    setErrorMessage('')
    try {
      await api.post(`/leads/${id}/approve`, {}, getToken())
      refresh()
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível aprovar o lead.')
    } finally {
      setBusyId(null)
    }
  }

  async function handleReject(id) {
    const motivo = window.prompt('Motivo da rejeição:')
    if (!motivo) return
    setBusyId(id)
    setErrorMessage('')
    try {
      await api.post(`/leads/${id}/reject`, { motivo }, getToken())
      refresh()
    } catch (error) {
      setErrorMessage(error instanceof ApiError ? error.message : 'Não foi possível rejeitar o lead.')
    } finally {
      setBusyId(null)
    }
  }

  const selectedLead = leads.find((lead) => lead.id === selectedLeadId) ?? null

  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <div className="mx-auto max-w-[1160px] px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold">Leads</h1>
          <button onClick={handleLogout} className="text-sm font-semibold text-ink-soft hover:text-ink">
            Sair
          </button>
        </div>

        <StatsPanel stats={stats} />

        <div className="mt-6 flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Buscar por nome, e-mail, telefone, CNPJ..."
            className={`${inputClasses} min-w-[240px] flex-1`}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className={inputClasses}>
            <option value="">Todos os status</option>
            {Object.entries(STATUS_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          <select value={ufFilter} onChange={(event) => setUfFilter(event.target.value)} className={inputClasses}>
            <option value="">Todas as UFs</option>
            {UFS.map((uf) => (
              <option key={uf} value={uf}>
                {uf}
              </option>
            ))}
          </select>
        </div>

        {errorMessage && <div className="mt-4 text-sm font-semibold text-red-600">{errorMessage}</div>}

        {loading ? (
          <p className="mt-8 text-ink-soft">Carregando...</p>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.07] bg-card shadow-[0_10px_30px_rgba(60,35,15,0.06)]">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-ink/[0.07] text-left text-[11px] font-bold uppercase tracking-wider text-ink-mute">
                  <th className="px-4 py-3">Estabelecimento</th>
                  <th className="px-4 py-3">Contato</th>
                  <th className="px-4 py-3">Responsável / CNPJ</th>
                  <th className="px-4 py-3">UF</th>
                  <th className="px-4 py-3">Cadastrado em</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Ações</th>
                </tr>
              </thead>
              <tbody>
                {leads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-ink-soft">
                      Nenhum lead encontrado.
                    </td>
                  </tr>
                )}
                {leads.map((lead) => (
                  <tr
                    key={lead.id}
                    onClick={() => setSelectedLeadId(lead.id)}
                    className="cursor-pointer border-b border-ink/[0.05] transition last:border-0 hover:bg-ink/[0.03]"
                  >
                    <td className="px-4 py-3 font-bold">{lead.nomeEstabelecimento}</td>
                    <td className="px-4 py-3 text-ink-soft">
                      <div>{lead.emailContato}</div>
                      <div className="text-xs">{lead.telefoneContato}</div>
                    </td>
                    <td className="px-4 py-3 text-ink-soft">
                      {lead.nomeDono ? (
                        <>
                          <div>{lead.nomeDono}</div>
                          <div className="text-xs">{lead.cnpj}</div>
                        </>
                      ) : (
                        '—'
                      )}
                    </td>
                    <td className="px-4 py-3 text-ink-soft">{lead.uf ?? '—'}</td>
                    <td className="px-4 py-3 text-ink-soft">{formatDate(lead.criadoEm)}</td>
                    <td className="px-4 py-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink-mute">
                        {STATUS_LABELS[lead.status] ?? lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      {lead.status === 'PENDING' && (
                        <div className="flex gap-2">
                          <button
                            disabled={busyId === lead.id}
                            onClick={(event) => {
                              event.stopPropagation()
                              handleApprove(lead.id)
                            }}
                            className="rounded-full bg-ember-500 px-3 py-1.5 text-xs font-bold text-[#2A1403] transition hover:bg-ember-400 disabled:opacity-60"
                          >
                            Aprovar
                          </button>
                          <button
                            disabled={busyId === lead.id}
                            onClick={(event) => {
                              event.stopPropagation()
                              handleReject(lead.id)
                            }}
                            className="rounded-full border border-ink/[0.12] px-3 py-1.5 text-xs font-bold text-ink-soft transition hover:border-ink/[0.3] disabled:opacity-60"
                          >
                            Rejeitar
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <Pagination page={page} pageSize={PAGE_SIZE} total={total} onPageChange={handlePageChange} />
      </div>

      {selectedLead && (
        <LeadDetailModal
          lead={selectedLead}
          onClose={() => setSelectedLeadId(null)}
          onChanged={async () => {
            refresh()
          }}
        />
      )}
    </div>
  )
}
