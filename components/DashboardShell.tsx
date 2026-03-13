"use client";

import { useEffect, useMemo, useState } from "react";
import { KpiCard } from "@/components/KpiCard";
import { ProductFilters, type SortField } from "@/components/ProductFilters";
import { ProductForm } from "@/components/ProductForm";
import { ProductTable } from "@/components/ProductTable";
import type { Product, ProductStatus } from "@/lib/types";

export function DashboardShell() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<"Todos" | ProductStatus>("Todos");
  const [sortBy, setSortBy] = useState<SortField>("name");

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Falha ao buscar produtos.");
        }
        const data = (await response.json()) as Product[];
        setItems(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro inesperado.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const totalProducts = items.length;
  const activeProducts = items.filter((item) => item.status === "Ativo").length;
  const totalStock = useMemo(() => items.reduce((acc, item) => acc + item.stock, 0), [items]);

  return (
    <>
      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <KpiCard title="Produtos" value={String(totalProducts)} helper="Catálogo listado via API." />
        <KpiCard title="Ativos" value={String(activeProducts)} helper="Itens prontos para operação." />
        <KpiCard title="Estoque total" value={String(totalStock)} helper="Soma disponível no dashboard." />
      </section>

      {loading ? (
        <div className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 text-sm text-zinc-300">
          Carregando produtos...
        </div>
      ) : null}

      {error ? (
        <div className="mb-6 rounded-2xl border border-rose-500/20 bg-rose-500/10 p-6 text-sm text-rose-300">
          {error}
        </div>
      ) : null}

      {!loading && !error ? (
        <>
          <ProductFilters
            search={search}
            onSearchChange={setSearch}
            status={status}
            onStatusChange={setStatus}
            sortBy={sortBy}
            onSortByChange={setSortBy}
          />

          <section className="grid gap-6 lg:grid-cols-[1.45fr_0.85fr]">
            <ProductTable items={items} search={search} status={status} sortBy={sortBy} />
            <ProductForm />
          </section>
        </>
      ) : null}
    </>
  );
}
