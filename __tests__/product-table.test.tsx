import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProductTable } from "@/components/ProductTable";
import type { Product } from "@/lib/types";

const mockItems: Product[] = [
  { id: 1, name: "Alpha", category: "SaaS", status: "Ativo", price: 100, stock: 10, updatedAt: "2026-01-01" },
  { id: 2, name: "Beta",  category: "Dados", status: "Pendente", price: 200, stock: 5, updatedAt: "2026-01-02" },
  { id: 3, name: "Gamma", category: "Vendas", status: "Arquivado", price: 300, stock: 0, updatedAt: "2026-01-03" },
];

describe("ProductTable", () => {
  it("renderiza todos os itens sem filtro", () => {
    render(<ProductTable items={mockItems} search="" status="Todos" sortBy="name" />);
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
    expect(screen.getByText("Gamma")).toBeInTheDocument();
  });

  it("filtra por busca", () => {
    render(<ProductTable items={mockItems} search="alp" status="Todos" sortBy="name" />);
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.queryByText("Beta")).not.toBeInTheDocument();
  });

  it("filtra por status", () => {
    render(<ProductTable items={mockItems} search="" status="Ativo" sortBy="name" />);
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.queryByText("Beta")).not.toBeInTheDocument();
  });

  it("exibe empty state quando nenhum item bate", () => {
    render(<ProductTable items={mockItems} search="zzz" status="Todos" sortBy="name" />);
    expect(screen.getByText("Nenhum produto encontrado")).toBeInTheDocument();
  });

  it("exibe contador correto de itens", () => {
    render(<ProductTable items={mockItems} search="" status="Todos" sortBy="name" />);
    expect(screen.getByText("3 item(ns)")).toBeInTheDocument();
  });
});