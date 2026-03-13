import { z } from "zod";

export const productSchema = z.object({
  name: z.string().trim().min(3, "Informe pelo menos 3 caracteres."),
  category: z.string().trim().min(2, "Informe a categoria."),
  price: z.coerce.number().positive("Preço deve ser maior que zero."),
  stock: z.coerce.number().int().min(0, "Estoque não pode ser negativo."),
  status: z.enum(["Ativo", "Pendente", "Arquivado"]),
});

export type ProductFormValues = z.infer<typeof productSchema>;
