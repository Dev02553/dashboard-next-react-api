import { StatusBadge } from '@/components/StatusBadge'
import type { Product } from '@/lib/types'

type LegacySort = 'name' | 'price' | 'stock'
type LegacyStatus = 'Todos' | string

type Props = {
  products?: Product[]
  items?: Product[]
  search?: string
  status?: LegacyStatus
  sortBy?: LegacySort
}

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function matchesStatus(product: Product, selectedStatus: string) {
  const selected = normalize(selectedStatus)
  const current = normalize(String(product.status))

  if (!selected || selected === 'todos') return true

  if (selected === 'ativo') {
    return current === 'ativo' || current === 'active'
  }

  if (selected === 'inativo') {
    return current === 'inativo' || current === 'inactive'
  }

  return current === selected
}

function sortItems(items: Product[], sortBy: LegacySort) {
  const result = [...items]

  switch (sortBy) {
    case 'price':
      return result.sort((a, b) => a.price - b.price)
    case 'stock':
      return result.sort((a, b) => a.stock - b.stock)
    case 'name':
    default:
      return result.sort((a, b) => a.name.localeCompare(b.name))
  }
}

export function ProductTable({
  products,
  items,
  search = '',
  status = 'Todos',
  sortBy = 'name',
}: Props) {
  const filtered = Array.isArray(products)
    ? products
    : sortItems(
        (items ?? []).filter((product) => {
          const query = normalize(search)

          const matchesSearch =
            !query ||
            normalize(product.name).includes(query) ||
            normalize(product.category).includes(query)

          return matchesSearch && matchesStatus(product, status)
        }),
        sortBy
      )

  if (filtered.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
        <p className="mb-2 font-medium text-slate-700">0 item(ns)</p>
        <p>Nenhum produto encontrado</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600">
        {filtered.length} item(ns)
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-50 text-left text-slate-600">
            <tr>
              <th className="px-4 py-3 font-semibold">Produto</th>
              <th className="px-4 py-3 font-semibold">Categoria</th>
              <th className="px-4 py-3 font-semibold">Preço</th>
              <th className="px-4 py-3 font-semibold">Estoque</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((product) => (
              <tr key={String(product.id)} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium text-slate-900">{product.name}</td>
                <td className="px-4 py-3 text-slate-600">{product.category}</td>
                <td className="px-4 py-3 text-slate-600">{currency.format(product.price)}</td>
                <td className="px-4 py-3 text-slate-600">{product.stock}</td>
                <td className="px-4 py-3">
                  <StatusBadge product={product} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}