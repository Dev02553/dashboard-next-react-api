import type { ProductStatus } from "@/lib/types";

const styles: Record<ProductStatus, string> = {
  Ativo: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  Pendente: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Arquivado: "border-zinc-700 bg-zinc-800 text-zinc-300",
  active: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  inactive: "border-zinc-700 bg-zinc-800 text-zinc-300",
};

const labels: Record<ProductStatus, string> = {
  Ativo: "Ativo",
  Pendente: "Pendente",
  Arquivado: "Arquivado",
  active: "Ativo",
  inactive: "Inativo",
};

type BadgeProps = {
  status: ProductStatus;
};

export function Badge({ status }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-1 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

export default Badge;