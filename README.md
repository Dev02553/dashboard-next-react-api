# Dashboard de Catálogo com Busca em Linguagem Natural

Dashboard administrativo construído para transformar dados de catálogo em **decisão rápida**.  
O projeto simula um cenário de varejo em que é importante identificar produtos sem estoque, itens inativos e sinais de risco operacional **sem depender de relatórios manuais**.

Além da interface, a aplicação também demonstra uma base técnica sólida com **Next.js, React, TypeScript, API Routes, validação com Zod e testes automatizados**.

## Demo

- **Projeto:** https://portfolio-site-nine-tau-41.vercel.app/projects/react-dashboard
- **Aplicação:** https://dashboard-next-react-api.vercel.app/

---

## Sobre o projeto

Em operações de varejo, o dado só gera valor quando consegue chegar rápido à decisão.  
Se um gestor precisa esperar o relatório do dia seguinte para descobrir ruptura de estoque, a venda já foi perdida.

Este projeto foi pensado para reduzir essa fricção. A interface organiza o catálogo com filtros, ordenação, métricas rápidas e busca em linguagem natural, permitindo localizar produtos por intenção — por exemplo: **"sem estoque"**, **"estoque baixo"**, **"mais caro"** ou **"inativos"**.

Do lado técnico, a aplicação foi construída com foco em clareza, previsibilidade e evolução. A estrutura separa bem interface, lógica de busca, tipos, validação e API mock, facilitando a troca futura por um backend real.

---

## O que o projeto resolve

- Torna dados de catálogo mais fáceis de navegar
- Reduz o tempo para identificar risco de ruptura
- Dá visibilidade rápida para itens inativos
- Organiza filtros e ordenação sem poluir a experiência
- Simula uma ferramenta interna de apoio à decisão em contexto de varejo

---

## Principais funcionalidades

- **Busca em linguagem natural** para consultas como:
  - `sem estoque`
  - `estoque baixo`
  - `mais caro`
  - `inativos`
  - `eletrônicos`
- **Filtros por categoria e status**
- **Ordenação por nome, preço e estoque**
- **Resumo visual dos filtros ativos**
- **KPIs operacionais** com leitura rápida no topo da interface
- **Tabela de produtos** com status e contexto visual
- **Formulário com validação**
- **Integração com API mock via fetch**
- **Build pronto para deploy na Vercel**
- **Testes automatizados com Vitest**

---

## Stack utilizada

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Zod**
- **Vitest**
- **Testing Library**
- **API Routes com Next.js**

---

## Destaques técnicos

- **Busca em linguagem natural sem IA externa**, baseada em interpretação de intenção e termos parciais
- **Tipagem centralizada** para reduzir inconsistência entre interface, formulário e API
- **Validação com Zod** aplicada no envio e na API mock
- **Separação entre dados, componentes e regras de negócio**
- **Compatibilidade com fluxo de testes automatizados**
- **Estrutura pronta para evolução** para backend real e autenticação
- **Projeto validado com `npm run test` e `npm run build`**

---

## Como executar localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/Dev02553/dashboard-next-react-api.git
cd dashboard-next-react-api
