'use client'

import { useEffect, useMemo, useState } from 'react'
import { naturalSearch } from '@/lib/natural-search'
import type {
  Product,
  ProductStatusFilter,
  SortOption,
} from '@/lib/types'

function sortProducts(products: Product[], sortBy: SortOption) {
  const list = [...products]

  switch (sortBy) {
    case 'price-desc':
      return list.sort((a, b) => b.price - a.price)
    case 'price-asc':
      return list.sort((a, b) => a.price - b.price)
    case 'stock-asc':
      return list.sort((a, b) => a.stock - b.stock)
    case 'stock-desc':
      return list.sort((a, b) => b.stock - a.stock)
    case 'name-asc':
      return list.sort((a, b) => a.name.localeCompare(b.name))
    case 'relevance':
    default:
      return list
  }
}

export function useProducts() {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [status, setStatus] = useState<ProductStatusFilter>('all')
  const [sortBy, setSortBy] = useState<SortOption>('relevance')

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        setAllProducts(data)
      } catch (error) {
        console.error('Erro ao carregar produtos:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const categories = useMemo(() => {
    return ['all', ...new Set(allProducts.map((product) => product.category))] as string[]
  }, [allProducts])

  const filteredProducts = useMemo(() => {
    let result = naturalSearch(query, allProducts)

    if (category !== 'all') {
      result = result.filter((product) => product.category === category)
    }

    if (status !== 'all') {
      result = result.filter((product) => product.status === status)
    }

    return sortProducts(result, sortBy)
  }, [allProducts, query, category, status, sortBy])

  const metrics = useMemo(() => {
    const active = allProducts.filter((product) => product.status === 'active').length
    const noStock = allProducts.filter((product) => product.stock === 0).length
    const critical = allProducts.filter(
      (product) => product.status === 'active' && product.stock > 0 && product.stock <= 3
    ).length
    const averageTicket =
      allProducts.length > 0
        ? Math.round(allProducts.reduce((acc, product) => acc + product.price, 0) / allProducts.length)
        : 0

    return {
      total: allProducts.length,
      active,
      noStock,
      critical,
      averageTicket,
    }
  }, [allProducts])

  return {
    loading,
    products: filteredProducts,
    allProducts,
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
  }
}