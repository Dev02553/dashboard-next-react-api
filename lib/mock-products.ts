import type { Product } from "@/lib/types";

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Dashboard Pro",
    category: "SaaS",
    status: "Ativo",
    price: 199,
    stock: 24,
    updatedAt: "2026-03-01",
  },
  {
    id: 2,
    name: "Analytics Kit",
    category: "Dados",
    status: "Pendente",
    price: 129,
    stock: 11,
    updatedAt: "2026-02-28",
  },
  {
    id: 3,
    name: "CRM Light",
    category: "Vendas",
    status: "Ativo",
    price: 89,
    stock: 57,
    updatedAt: "2026-03-04",
  },
  {
    id: 4,
    name: "Ops Panel",
    category: "Operações",
    status: "Arquivado",
    price: 59,
    stock: 0,
    updatedAt: "2026-01-15",
  },
  {
    id: 5,
    name: "Billing Flow",
    category: "Financeiro",
    status: "Ativo",
    price: 149,
    stock: 8,
    updatedAt: "2026-03-06",
  }
];
