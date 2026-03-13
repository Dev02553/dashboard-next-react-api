"use client";

import { useMemo } from "react";
import { Badge } from "@/components/Badge";
import type { Product, ProductStatus } from "@/lib/types";
import type { SortField } from "@/components/ProductFilters";

export function ProductTable({
  items,
  search,
  status,
  sortBy,
}: {
  items: Product[];
  search: string;
  status: "Todos" | ProductStatus;
  sortBy: SortField;
}) {
  const filtered = useMemo(() => {
    return [...items]
      .filter((item) => (status === "Todos" ? true : item.status === status))
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return a[sortBy] - b[sortBy];
      });
  }, [items, search, status, sortBy]);

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold text-zinc-100">Produtos</h2>
          <p className="text-sm text-zinc-400">Tabela com busca, filtros e ordenação.</p>
        </div>
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
          {filtered.length} item(ns)
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="text-zinc-400">
            <tr>
              <th className="px-3 py-2 font-medium">Produto</th>
              <th className="px-3 py-2 font-medium">Categoria</th>
              <th className="px-3 py-2 font-medium">Status</th>
              <th className="px-3 py-2 font-medium">Preço</th>
              <th className="px-3 py-2 font-medium">Estoque</th>
              <th className="px-3 py-2 font-medium">Atualizado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t border-zinc-800 text-zinc-200">
                <td className="px-3 py-3 font-medium">{item.name}</td>
                <td className="px-3 py-3">{item.category}</td>
                <td className="px-3 py-3"><Badge status={item.status} /></td>
                <td className="px-3 py-3">R$ {item.price.toFixed(2)}</td>
                <td className="px-3 py-3">{item.stock}</td>
                <td className="px-3 py-3">{item.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
