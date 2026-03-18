import { describe, it, expect } from "vitest";
import { GET, POST } from "@/app/api/products/route";

describe("GET /api/products", () => {
  it("retorna lista de produtos com status 200", async () => {
    const response = await GET();
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
  });
});

describe("POST /api/products", () => {
  it("retorna 201 com dados válidos", async () => {
    const request = new Request("http://localhost/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Novo Produto",
        category: "SaaS",
        price: 99.9,
        stock: 10,
        status: "Ativo",
      }),
    });
    const response = await POST(request);
    expect(response.status).toBe(201);
    const data = await response.json();
    expect(data.name).toBe("Novo Produto");
  });

  it("retorna 400 com dados inválidos", async () => {
    const request = new Request("http://localhost/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "AB", category: "", price: -1, stock: -1, status: "Ativo" }),
    });
    const response = await POST(request);
    expect(response.status).toBe(400);
  });
});