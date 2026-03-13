export type ProductStatus = "Ativo" | "Pendente" | "Arquivado";

export type Product = {
  id: number;
  name: string;
  category: string;
  status: ProductStatus;
  price: number;
  stock: number;
  updatedAt: string;
};
