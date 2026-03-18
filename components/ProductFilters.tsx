import { PRODUCT_STATUSES } from "@/lib/types";
import type { StatusFilter, SortField } from "@/lib/types";

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
  status: StatusFilter;
  onStatusChange: (value: StatusFilter) => void;
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
        onChange={(e) => onStatusChange(e.target.value as StatusFilter)}
      >
        <option value="Todos">Todos</option>
        {PRODUCT_STATUSES.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
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