# Dashboard (Next/React) consumindo API

Interface de produto com tabela, filtros, formulários e integração com backend.

![Status](https://img.shields.io/badge/status-completo-22c55e)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8)

## Sobre o projeto

Este projeto simula uma interface moderna de produto, com foco em listagem, busca, filtros, ordenação e validação de formulário.  
A aplicação foi estruturada para servir como base reutilizável em dashboards administrativos e painéis internos, com organização simples, componentes escaláveis e integração com API.

## Stack utilizada

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Zod**
- **API Route mock com Next.js**

## Funcionalidades

- Tabela de produtos
- Busca por nome
- Filtro por status
- Ordenação por nome, preço e estoque
- Formulário com validação
- Estrutura pronta para deploy no Vercel
- Integração inicial com backend via `fetch`

## Preview

> Adicione aqui uma screenshot da aplicação depois que rodar localmente ou publicar no Vercel.

## Como executar

### Instalação

```bash
npm install
Ambiente de desenvolvimento
npm run dev

<<<<<<< HEAD
A aplicação ficará disponível em:

http://localhost:3000
Build de produção
npm run build
Executar versão de produção
npm run start
Estrutura do projeto
dashboard_next_react_api/
├── app/
│   ├── api/
│   │   └── products/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ProductForm.tsx
│   └── ProductTable.tsx
├── lib/
│   └── data.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── README.md
Fluxo da aplicação

A tabela consome dados da rota /api/products

Os produtos são listados dinamicamente na interface

O usuário pode:

buscar produtos

filtrar por status

ordenar resultados

O formulário valida os campos antes de enviar

A estrutura já está preparada para troca do mock por backend real

API utilizada

Atualmente o projeto usa uma rota mock interna:

GET /api/products

Ela retorna uma lista de produtos em JSON para simular a integração com backend.

Destaques técnicos

Componentização simples e reaproveitável

Separação entre interface, componentes e dados mockados

Validação com Zod

UI pensada para escala e manutenção

Projeto Vercel-ready

Base estável para evolução com autenticação, paginação e testes

Próximos passos

Adicionar paginação

Melhorar estados de loading, empty e error

Integrar com backend real

Adicionar autenticação

Implementar testes de interface com Playwright

Caso de uso

Dashboards precisam ser rápidos e claros: listar dados, filtrar, editar e manter consistência visual.

Este projeto foi pensado como uma base de interface administrativa para operações, produtos ou sistemas internos, servindo como ponto de partida para aplicações mais robustas.

Repositório
https://github.com/Dev02553/dashboard-next-react-api
Autor

David Rodrigues

Portfólio com projetos em QA, automação, dados e desenvolvimento.

GitHub: https://github.com/Dev02553

LinkedIn: https://www.linkedin.com/in/david-silva-rodrigues-500190284/

E-mail: David_2553@hotmail.com
=======
Acesse em `http://localhost:3000`

## Build de produção
```bash
npm run build
npm run start
```

## Estrutura do projeto
```
dashboard_next_react_api/
├── app/
│   ├── api/products/route.ts   # API mock (GET + POST)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Badge.tsx
│   ├── DashboardShell.tsx      # fetch, loading, error e estado global
│   ├── KpiCard.tsx
│   ├── ProductFilters.tsx
│   ├── ProductForm.tsx
│   └── ProductTable.tsx
├── lib/
│   ├── mock-products.ts
│   ├── product-schema.ts       # schema Zod compartilhado
│   └── types.ts                # tipos e constantes centralizados
├── package.json
└── tsconfig.json
```

## Fluxo da aplicação

1. `DashboardShell` faz `fetch` em `/api/products` ao montar
2. Durante o carregamento, exibe skeleton de loading
3. Os produtos são listados na tabela com busca, filtro e ordenação
4. O formulário valida os campos via Zod antes de enviar
5. O POST é validado novamente na API route com o mesmo schema

## API mock
```
GET  /api/products   → retorna lista de produtos
POST /api/products   → valida com Zod e retorna produto criado (status 201)
```

## Destaques técnicos

- Schema Zod reutilizado no cliente e no servidor — sem duplicação de regras
- `PRODUCT_STATUSES as const` como única fonte de verdade para os status
- `useMemo` para derivar a lista filtrada sem efeitos colaterais
- Skeleton de loading com `animate-pulse` nativo do Tailwind
- Labels acessíveis com `htmlFor` + `id` em todos os campos do formulário
- `strict: true` no tsconfig

## Próximos passos

- Paginação na tabela
- Custom hook `useProducts` para encapsular fetch e estado
- Testes com Vitest + Testing Library
- Integração com backend real
- Autenticação com NextAuth

## Autor

**David Rodrigues**
Portfólio com projetos em QA, automação, dados e desenvolvimento.

- GitHub: [Dev02553](https://github.com/Dev02553)
- LinkedIn: [david-silva-rodrigues](https://www.linkedin.com/in/david-silva-rodrigues-500190284/)
- E-mail: David_2553@hotmail.com
>>>>>>> c0b2770 (refactor: centraliza tipos, melhora a11y e UX do dashboard)
