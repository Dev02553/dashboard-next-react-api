"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/Badge";
import type { Product, StatusFilter, SortField } from "@/lib/types";

const PAGE_SIZE = 5;

export function ProductTable({
  items,
  search,
  status,
  sortBy,
}: {
  items: Product[];
  search: string;
  status: StatusFilter;
  sortBy: SortField;
}) {
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    setPage(1);
    return [...items]
      .filter((item) => (status === "Todos" ? true : item.status === status))
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return a[sortBy] - b[sortBy];
      });
  }, [items, search, status, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-sm font-medium text-zinc-300">Nenhum produto encontrado</p>
          <p className="mt-1 text-sm text-zinc-500">
            Tente ajustar a busca ou o filtro de status.
          </p>
        </div>
      ) : (
        <>
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
                {paginated.map((item) => (
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

          {totalPages > 1 ? (
            <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-800 pt-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Anterior
              </button>

              <span className="text-xs text-zinc-500">
                Página {page} de {totalPages}
              </span>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="rounded-lg border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Próximo →
              </button>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}