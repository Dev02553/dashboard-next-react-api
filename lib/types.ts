export const PRODUCT_STATUSES = ["Ativo", "Pendente", "Arquivado"] as const;

export type ProductStatus = typeof PRODUCT_STATUSES[number];

export type StatusFilter = "Todos" | ProductStatus;

export type SortField = "name" | "price" | "stock";

export type Product = {
  id: number;
  name: string;
  category: string;
  status: ProductStatus;
  price: number;
  stock: number;
  updatedAt: string;
};