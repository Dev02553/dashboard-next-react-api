"use client";

import { useState } from "react";
import { productSchema, type ProductFormValues } from "@/lib/product-schema";
import { PRODUCT_STATUSES } from "@/lib/types";

const initialValues: ProductFormValues = {
  name: "",
  category: "",
  price: 0,
  stock: 0,
  status: "Ativo",
};

export function ProductForm() {
  const [values, setValues] = useState<ProductFormValues>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [feedback, setFeedback] = useState<string>("");
  const [sending, setSending] = useState(false);

  function updateField<K extends keyof ProductFormValues>(field: K, value: ProductFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback("");

    const parsed = productSchema.safeParse(values);

    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        nextErrors[String(issue.path[0])] = issue.message;
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSending(true);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await response.json();

      if (!response.ok) {
        setFeedback(data?.message ?? "Não foi possível enviar o produto.");
        return;
      }

      setFeedback(`Produto validado e enviado para a API mock com sucesso: ${data.name}.`);
      setValues(initialValues);
    } catch (error) {
      console.error("[ProductForm] fetch error:", error);
      setFeedback("Falha de rede ao integrar com a API.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-zinc-100">Novo produto</h2>
        <p className="text-sm text-zinc-400">Formulário com validação e integração via fetch.</p>
      </div>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="field-name" className="mb-1 block text-sm text-zinc-300">Nome</label>
          <input
            id="field-name"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Ex.: Product Suite"
          />
          {errors.name ? <p className="mt-1 text-sm text-rose-400">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="field-category" className="mb-1 block text-sm text-zinc-300">Categoria</label>
          <input
            id="field-category"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
            value={values.category}
            onChange={(e) => updateField("category", e.target.value)}
            placeholder="Ex.: SaaS"
          />
          {errors.category ? <p className="mt-1 text-sm text-rose-400">{errors.category}</p> : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="field-price" className="mb-1 block text-sm text-zinc-300">Preço</label>
            <input
              id="field-price"
              type="number"
              step="0.01"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
              value={Number.isNaN(values.price) ? "" : values.price}
              onChange={(e) => updateField("price", Number(e.target.value))}
              placeholder="149.90"
            />
            {errors.price ? <p className="mt-1 text-sm text-rose-400">{errors.price}</p> : null}
          </div>

          <div>
            <label htmlFor="field-stock" className="mb-1 block text-sm text-zinc-300">Estoque</label>
            <input
              id="field-stock"
              type="number"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
              value={Number.isNaN(values.stock) ? "" : values.stock}
              onChange={(e) => updateField("stock", Number(e.target.value))}
              placeholder="10"
            />
            {errors.stock ? <p className="mt-1 text-sm text-rose-400">{errors.stock}</p> : null}
          </div>
        </div>

        <div>
          <label htmlFor="field-status" className="mb-1 block text-sm text-zinc-300">Status</label>
          <select
            id="field-status"
            className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 outline-none transition focus:border-zinc-500"
            value={values.status}
            onChange={(e) => updateField("status", e.target.value as ProductFormValues["status"])}
          >
            {PRODUCT_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.status ? <p className="mt-1 text-sm text-rose-400">{errors.status}</p> : null}
        </div>

        <button
          type="submit"
          disabled={sending}
          className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {sending ? "Enviando..." : "Validar e enviar"}
        </button>

        {feedback ? <p className="text-sm text-emerald-400">{feedback}</p> : null}
      </form>
    </section>
  );
}