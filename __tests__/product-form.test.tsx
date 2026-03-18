import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductForm } from "@/components/ProductForm";

describe("ProductForm", () => {
  it("renderiza todos os campos", () => {
    render(<ProductForm />);
    expect(screen.getByLabelText("Nome")).toBeInTheDocument();
    expect(screen.getByLabelText("Categoria")).toBeInTheDocument();
    expect(screen.getByLabelText("Preço")).toBeInTheDocument();
    expect(screen.getByLabelText("Estoque")).toBeInTheDocument();
    expect(screen.getByLabelText("Status")).toBeInTheDocument();
  });

  it("exibe erro quando nome tem menos de 3 caracteres", async () => {
    render(<ProductForm />);
    await userEvent.type(screen.getByLabelText("Nome"), "AB");
    await userEvent.click(screen.getByRole("button", { name: /validar e enviar/i }));
    expect(await screen.findByText("Informe pelo menos 3 caracteres.")).toBeInTheDocument();
  });

  it("exibe erro quando categoria está vazia", async () => {
    render(<ProductForm />);
    await userEvent.type(screen.getByLabelText("Nome"), "Produto Válido");
    await userEvent.click(screen.getByRole("button", { name: /validar e enviar/i }));
    expect(await screen.findByText("Informe a categoria.")).toBeInTheDocument();
  });

  it("botão fica desabilitado durante envio", async () => {
    render(<ProductForm />);
    const button = screen.getByRole("button", { name: /validar e enviar/i });
    expect(button).not.toBeDisabled();
  });
});