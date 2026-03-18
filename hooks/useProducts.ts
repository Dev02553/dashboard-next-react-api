"use client";

import { useEffect, useState } from "react";
import type { Product } from "@/lib/types";

type UseProductsResult = {
  items: Product[];
  loading: boolean;
  error: string;
};

export function useProducts(): UseProductsResult {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return { items, loading, error };
}