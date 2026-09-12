function getPageNumbers(page, totalPages) {
  const pages = new Set([1, totalPages, page, page - 1, page + 1])
  return [...pages]
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b)
}

export default function Pagination({ page, pageSize, total, onPageChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  if (totalPages <= 1) return null

  const pageNumbers = getPageNumbers(page, totalPages)

  const buttonClasses = (active) =>
    `min-w-[36px] rounded-lg px-3 py-1.5 text-sm font-semibold transition ${
      active ? 'bg-ember-500 text-[#2A1403]' : 'text-ink-soft hover:bg-ink/[0.06]'
    }`

  return (
    <div className="mt-6 flex items-center justify-between gap-3">
      <div className="text-xs text-ink-mute">
        {total} {total === 1 ? 'resultado' : 'resultados'}
      </div>
      <div className="flex items-center gap-1">
        <button
          disabled={page <= 1}
          onClick={() => onPageChange(page - 1)}
          className="rounded-lg px-2 py-1.5 text-sm font-semibold text-ink-soft transition hover:bg-ink/[0.06] disabled:cursor-not-allowed disabled:opacity-40"
        >
          ‹
        </button>
        {pageNumbers.map((pageNumber, index) => {
          const previous = pageNumbers[index - 1]
          const showGap = previous !== undefined && pageNumber - previous > 1
          return (
            <span key={pageNumber} className="flex items-center gap-1">
              {showGap && <span className="px-1 text-ink-mute">…</span>}
              <button onClick={() => onPageChange(pageNumber)} className={buttonClasses(pageNumber === page)}>
                {pageNumber}
              </button>
            </span>
          )
        })}
        <button
          disabled={page >= totalPages}
          onClick={() => onPageChange(page + 1)}
          className="rounded-lg px-2 py-1.5 text-sm font-semibold text-ink-soft transition hover:bg-ink/[0.06] disabled:cursor-not-allowed disabled:opacity-40"
        >
          ›
        </button>
      </div>
    </div>
  )
}
