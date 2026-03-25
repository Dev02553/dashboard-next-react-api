'use client'

import { InsightBar } from '@/components/InsightBar'
import { ProductFilters } from '@/components/ProductFilters'
import { ProductTable } from '@/components/ProductTable'
import { useProducts } from '@/hooks/useProducts'

function MetricCard({
  label,
  value,
  helper,
}: {
  label: string
  value: string | number
  helper: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
      <p className="mt-1 text-xs text-slate-500">{helper}</p>
    </div>
  )
}

export default function Page() {
  const {
    loading,
    products,
    categories,
    query,
    setQuery,
    category,
    setCategory,
    status,
    setStatus,
    sortBy,
    setSortBy,
    metrics,
  } = useProducts()

  const resultsLabel = products.length === 1 ? 'resultado' : 'resultados'

  const activeFilters = [
    query ? `“${query}”` : null,
    category !== 'all' ? category : null,
    status === 'active' ? 'Ativos' : status === 'inactive' ? 'Inativos' : null,
    sortBy !== 'relevance'
      ? {
          'price-desc': 'Maior preço',
          'price-asc': 'Menor preço',
          'stock-asc': 'Menor estoque',
          'stock-desc': 'Maior estoque',
          'name-asc': 'Nome A-Z',
        }[sortBy]
      : null,
  ].filter(Boolean)

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8">
          <p className="text-sm font-medium text-blue-600">Dashboard de catálogo</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Gestão de produtos com leitura rápida de risco e oportunidade
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
            Este projeto simula um dashboard de varejo para acompanhar catálogo,
            estoque e status operacional. O foco é transformar dados em decisão:
            identificar ruptura antes da perda de venda, destacar itens inativos e
            reduzir fricção na análise.
          </p>
        </header>

        <section className="mb-6 rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm leading-6 text-blue-900">
            <strong>Busca em linguagem natural:</strong> digite consultas como
            <span className="font-semibold"> “sem estoque”</span>,
            <span className="font-semibold"> “estoque baixo”</span>,
            <span className="font-semibold"> “mais caro”</span> ou
            <span className="font-semibold"> “inativo”</span>.
          </p>
        </section>

        <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Produtos totais"
            value={metrics.total}
            helper="Base disponível no catálogo"
          />
          <MetricCard
            label="Produtos ativos"
            value={metrics.active}
            helper="Itens com operação ativa"
          />
          <MetricCard
            label="Sem estoque"
            value={metrics.noStock}
            helper="Risco imediato de ruptura"
          />
          <MetricCard
            label="Ticket médio"
            value={`R$ ${metrics.averageTicket.toLocaleString('pt-BR')}`}
            helper="Preço médio do portfólio"
          />
        </section>

        <ProductFilters
          query={query}
          setQuery={setQuery}
          category={category}
          setCategory={setCategory}
          status={status}
          setStatus={setStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
          categories={categories}
        />

        <InsightBar products={products} />

        <div className="mb-3 rounded-xl bg-slate-100 px-3 py-2 text-sm text-slate-700">
          <span className="font-medium text-slate-900">
            {products.length} {resultsLabel}
          </span>
          {activeFilters.length > 0 && (
            <>
              {' — '}
              {activeFilters.join(' • ')}
            </>
          )}
        </div>

        {loading ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500 shadow-sm">
            Carregando produtos...
          </div>
        ) : (
          <ProductTable products={products} />
        )}
      </div>
    </main>
  )
}