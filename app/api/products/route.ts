import { NextResponse } from 'next/server'
import { z } from 'zod'
import { MOCK_PRODUCTS } from '@/lib/mock-products'

const createProductSchema = z.object({
  name: z.string().min(3),
  category: z.string().min(1),
  price: z.number().min(0),
  stock: z.number().int().min(0),
  status: z.enum(['Ativo', 'Pendente', 'Arquivado', 'active', 'inactive']),
})

export async function GET() {
  return NextResponse.json(MOCK_PRODUCTS, { status: 200 })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = createProductSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: 'Dados inválidos',
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      )
    }

    const newProduct = {
      id: String(MOCK_PRODUCTS.length + 1),
      ...parsed.data,
    }

    return NextResponse.json(newProduct, { status: 201 })
  } catch {
    return NextResponse.json(
      { message: 'Requisição inválida' },
      { status: 400 }
    )
  }
}