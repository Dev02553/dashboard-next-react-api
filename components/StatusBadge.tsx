import type { Product } from '@/lib/types'

type BadgeConfig = {
  label: string
  className: string
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function getBadge(product: Product): BadgeConfig {
  const status = normalize(String(product.status))

  if ((status === 'active' || status === 'ativo') && product.stock === 0) {
    return {
      label: 'Sem estoque',
      className: 'bg-amber-100 text-amber-800 border-amber-200',
    }
  }

  if (status === 'active' || status === 'ativo') {
    return {
      label: 'Ativo',
      className: 'bg-green-100 text-green-800 border-green-200',
    }
  }

  if (status === 'inactive' || status === 'inativo') {
    return {
      label: 'Inativo',
      className: 'bg-gray-100 text-gray-700 border-gray-200',
    }
  }

  if (status === 'pendente') {
    return {
      label: 'Pendente',
      className: 'bg-blue-100 text-blue-800 border-blue-200',
    }
  }

  if (status === 'arquivado') {
    return {
      label: 'Arquivado',
      className: 'bg-zinc-100 text-zinc-700 border-zinc-200',
    }
  }

  return {
    label: String(product.status),
    className: 'bg-slate-100 text-slate-700 border-slate-200',
  }
}

type Props = {
  product: Product
}

export function StatusBadge({ product }: Props) {
  const config = getBadge(product)

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${config.className}`}
    >
      {config.label}
    </span>
  )
}