'use client'

import type { ProductStatusFilter, SortOption } from '@/lib/types'

type Props = {
  query: string
  setQuery: (value: string) => void
  category: string
  setCategory: (value: string) => void
  status: ProductStatusFilter
  setStatus: (value: ProductStatusFilter) => void
  sortBy: SortOption
  setSortBy: (value: SortOption) => void
  categories: string[]
}

const searchSuggestions = [
  'sem estoque',
  'estoque baixo',
  'inativos',
  'eletrônicos',
  'mais caro',
  'barato',
]

export function ProductFilters({
  query,
  setQuery,
  category,
  setCategory,
  status,
  setStatus,
  sortBy,
  setSortBy,
  categories,
}: Props) {
  return (
    <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="space-y-2 xl:col-span-1">
          <label
            htmlFor="search"
            className="text-sm font-medium text-slate-700"
          >
            Busca
          </label>

          <div className="relative">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              🔎
            </span>

            <input
              id="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Ex.: "sem estoque", "estoque baixo", "mais caro"'
              className="w-full rounded-xl border border-blue-200 bg-blue-50/40 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <p className="text-xs leading-5 text-slate-500">
            Busca em <span className="font-medium text-slate-600">nome</span>,{' '}
            <span className="font-medium text-slate-600">categoria</span>,{' '}
            <span className="font-medium text-slate-600">status</span>,{' '}
            <span className="font-medium text-slate-600">estoque</span> e{' '}
            <span className="font-medium text-slate-600">preço</span>.
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {searchSuggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => setQuery(suggestion)}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
              >
                {suggestion}
              </button>
            ))}

            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600 transition hover:bg-rose-100"
              >
                limpar
              </button>
            )}
          </div>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="category"
            className="text-sm font-medium text-slate-700"
          >
            Categoria
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            {categories.map((currentCategory) => (
              <option key={currentCategory} value={currentCategory}>
                {currentCategory === 'all' ? 'Todas as categorias' : currentCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="status"
            className="text-sm font-medium text-slate-700"
          >
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(event) => setStatus(event.target.value as ProductStatusFilter)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="all">Todos os status</option>
            <option value="active">Ativos</option>
            <option value="inactive">Inativos</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="sortBy"
            className="text-sm font-medium text-slate-700"
          >
            Ordenação
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="relevance">Ordem padrão</option>
            <option value="price-desc">Maior preço</option>
            <option value="price-asc">Menor preço</option>
            <option value="stock-asc">Menor estoque</option>
            <option value="stock-desc">Maior estoque</option>
            <option value="name-asc">Nome A-Z</option>
          </select>
        </div>
      </div>
    </div>
  )
}