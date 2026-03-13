import type { ProductStatus } from "@/lib/types";

export type SortField = "name" | "price" | "stock";

export function ProductFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
  sortBy,
  onSortByChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  status: "Todos" | ProductStatus;
  onStatusChange: (value: "Todos" | ProductStatus) => void;
  sortBy: SortField;
  onSortByChange: (value: SortField) => void;
}) {
  return (
    <div className="mb-4 grid gap-3 md:grid-cols-3">
      <input
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
        placeholder="Buscar produto"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
        value={status}
        onChange={(e) => onStatusChange(e.target.value as "Todos" | ProductStatus)}
      >
        <option value="Todos">Todos</option>
        <option value="Ativo">Ativo</option>
        <option value="Pendente">Pendente</option>
        <option value="Arquivado">Arquivado</option>
      </select>

      <select
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
        value={sortBy}
        onChange={(e) => onSortByChange(e.target.value as SortField)}
      >
        <option value="name">Ordenar por nome</option>
        <option value="price">Ordenar por preço</option>
        <option value="stock">Ordenar por estoque</option>
      </select>
    </div>
  );
}
