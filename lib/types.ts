export const PRODUCT_STATUSES = ['Ativo', 'Pendente', 'Arquivado'] as const
export const API_PRODUCT_STATUSES = ['active', 'inactive'] as const

export type ProductStatus =
  | (typeof PRODUCT_STATUSES)[number]
  | (typeof API_PRODUCT_STATUSES)[number]

export type ProductStatusFilter = 'all' | 'active' | 'inactive'

export type SortOption =
  | 'relevance'
  | 'price-desc'
  | 'price-asc'
  | 'stock-asc'
  | 'stock-desc'
  | 'name-asc'

export interface Product {
  id: string | number
  name: string
  category: string
  status: ProductStatus
  stock: number
  price: number
  updatedAt?: string
}