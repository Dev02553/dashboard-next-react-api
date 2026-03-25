import type { Product } from '@/lib/types'

export const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Smart TV 55" 4K', category: 'Eletrônicos', status: 'active', stock: 12, price: 2899 },
  { id: '2', name: 'Geladeira Frost Free 400L', category: 'Eletrodomésticos', status: 'active', stock: 3, price: 3499 },
  { id: '3', name: 'Notebook Core i5 16GB', category: 'Informática', status: 'active', stock: 0, price: 3199 },
  { id: '4', name: 'Sofá Retrátil 3 Lugares', category: 'Móveis', status: 'inactive', stock: 8, price: 1899 },
  { id: '5', name: 'Máquina de Lavar 12kg', category: 'Eletrodomésticos', status: 'active', stock: 2, price: 2199 },
  { id: '6', name: 'Ar Condicionado 12.000 BTU', category: 'Climatização', status: 'active', stock: 5, price: 1749 },
  { id: '7', name: 'Mesa de Escritório em L', category: 'Móveis', status: 'inactive', stock: 15, price: 699 },
  { id: '8', name: 'Fone Bluetooth Over-Ear', category: 'Eletrônicos', status: 'active', stock: 1, price: 449 },
  { id: '9', name: 'Micro-ondas 32L Inox', category: 'Eletrodomésticos', status: 'active', stock: 7, price: 599 },
  { id: '10', name: 'Câmera de Segurança Wi-Fi', category: 'Segurança', status: 'active', stock: 0, price: 329 },
  { id: '11', name: 'Ventilador Torre Premium', category: 'Climatização', status: 'active', stock: 9, price: 379 },
  { id: '12', name: 'Cadeira Gamer Ergonômica', category: 'Móveis', status: 'active', stock: 4, price: 1299 },
]