import type { Product } from '@/lib/types'

function normalize(value: string | number) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

function getStatusTerms(status: string) {
  const s = normalize(status)

  if (s === 'active' || s === 'ativo') {
    return ['active', 'ativo', 'ativos']
  }

  if (s === 'inactive' || s === 'inativo') {
    return ['inactive', 'inativo', 'inativos']
  }

  if (s === 'pendente') {
    return ['pendente', 'pendentes']
  }

  if (s === 'arquivado') {
    return ['arquivado', 'arquivados']
  }

  return [s]
}

function getSearchableText(product: Product) {
  const stockTags =
    product.stock === 0
      ? 'sem estoque esgotado zerado ruptura'
      : product.stock > 0 && product.stock <= 3
      ? 'estoque baixo estoque critico estoque crítico'
      : ''

  const priceTags =
    product.price >= 2000
      ? 'caro mais caro maior preco maior preço alto valor alto ticket alto'
      : product.price < 1000
      ? 'barato mais barato menor preco menor preço baixo valor baixo ticket baixo'
      : ''

  return normalize([
    product.name,
    product.category,
    ...getStatusTerms(String(product.status)),
    product.stock,
    product.price,
    product.price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    stockTags,
    priceTags,
  ].join(' '))
}

export function naturalSearch(query: string, products: Product[]) {
  const q = normalize(query)

  if (!q) return products

  const terms = q.split(/\s+/).filter(Boolean)

  return products.filter((product) => {
    const searchable = getSearchableText(product)

    return terms.every((term) =>
      searchable
        .split(/\s+/)
        .some((word) => word.startsWith(term) || word.includes(term))
    )
  })
}