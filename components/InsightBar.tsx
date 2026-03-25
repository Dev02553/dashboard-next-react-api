import type { Product } from '@/lib/types'

type Props = {
  products: Product[]
}

export function InsightBar({ products }: Props) {
  const critical = products.filter(
    (product) => product.status === 'active' && product.stock > 0 && product.stock <= 3
  ).length

  const noStock = products.filter((product) => product.stock === 0).length
  const inactive = products.filter((product) => product.status === 'inactive').length

  const averageTicket =
    products.length > 0
      ? Math.round(products.reduce((acc, product) => acc + product.price, 0) / products.length)
      : 0

  return (
    <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {critical > 0 && (
          <span>
            ⚠ <strong>{critical}</strong> com estoque crítico
          </span>
        )}

        {noStock > 0 && (
          <span>
            • <strong>{noStock}</strong> sem estoque
          </span>
        )}

        {inactive > 0 && (
          <span>
            • <strong>{inactive}</strong> inativos
          </span>
        )}

        <span>
          • Ticket médio <strong>R$ {averageTicket.toLocaleString('pt-BR')}</strong>
        </span>
      </div>
    </div>
  )
}