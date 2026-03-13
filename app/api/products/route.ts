import { NextResponse } from "next/server";
import { mockProducts } from "@/lib/mock-products";
import { productSchema } from "@/lib/product-schema";

export async function GET() {
  return NextResponse.json(mockProducts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = productSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Dados inválidos.",
        details: parsed.error.issues.map((issue) => issue.message),
      },
      { status: 400 }
    );
  }

  return NextResponse.json(
    {
      id: mockProducts.length + 1,
      ...parsed.data,
      updatedAt: new Date().toISOString().slice(0, 10),
    },
    { status: 201 }
  );
}
