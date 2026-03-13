import type { ProductStatus } from "@/lib/types";

const styles: Record<ProductStatus, string> = {
  Ativo: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Pendente: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Arquivado: "border-zinc-700 bg-zinc-800 text-zinc-300",
};

export function Badge({ status }: { status: ProductStatus }) {
  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}
