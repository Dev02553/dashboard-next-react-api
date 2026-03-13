import { DashboardShell } from "@/components/DashboardShell";

const tags = [
  "Frontend",
  "Produto",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "API",
  "Repositório",
  "Métricas",
  "UI",
  "Tabela + filtros",
  "busca e ordenação",
  "Forms",
  "Validação",
  "inputs consistentes",
  "Integração",
  "fetch/handlers",
  "Deploy",
  "Vercel-ready",
  "build estável",
];

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-6 py-10 lg:px-8">
      <header className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.24em] text-zinc-500">Completo • 2026</p>
        <h1 className="mb-3 text-4xl font-bold tracking-tight text-zinc-100 md:text-5xl">
          Dashboard (Next/React) consumindo API
        </h1>
        <p className="max-w-3xl text-base leading-7 text-zinc-300">
          Interface de produto com tabela, filtros, formulários e integração com backend.
        </p>
      </header>

      <section className="mb-10 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-zinc-700 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-300">
            {tag}
          </span>
        ))}
      </section>

      <DashboardShell />

      <section className="mt-12 grid gap-8 lg:grid-cols-3">
        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100">Como executar</h2>
          <div className="space-y-3 text-zinc-300">
            <p><strong>Headless</strong><br />npm run build</p>
            <p><strong>UI (visual)</strong><br />npm run dev</p>
            <p className="text-sm text-zinc-500">
              Dica: rode dentro da pasta que contém o pom.xml (Java/Maven) ou o package.json (Node).
            </p>
          </div>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100">Destaques</h2>
          <ul className="list-disc space-y-2 pl-5 text-zinc-300">
            <li>DataTable + filtros e busca</li>
            <li>Forms com validação</li>
            <li>Estrutura pronta para deploy no Vercel</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
          <h2 className="mb-3 text-2xl font-semibold text-zinc-100">Case Study</h2>
          <div className="space-y-4 text-zinc-300">
            <div>
              <h3 className="font-medium text-white">Contexto / Context</h3>
              <p>Dashboards precisam ser rápidos e claros: listar dados, filtrar, editar e manter consistência visual.</p>
              <p className="mt-2">Dashboards must be fast and clear: list data, filter, edit, and keep visual consistency.</p>
            </div>
            <div>
              <h3 className="font-medium text-white">Objetivo / Goal</h3>
              <p>PT: Criar UI focada em produto: tabela + filtros + formulários. Organizar componentes para escala e manutenção. Preparar para deploy e iteração contínua.</p>
              <p className="mt-2">EN: Create a product-focused UI: table + filters + forms. Organize components for scale and maintenance. Prepare for deployment and continuous iteration.</p>
            </div>
            <div>
              <h3 className="font-medium text-white">Próximos passos / Next steps</h3>
              <p>PT: Adicionar paginação e estados de loading, empty e error melhores. Testes de UI com Playwright para fluxos críticos. Integração com backend real e autenticação.</p>
              <p className="mt-2">EN: Add pagination and better loading, empty, and error states. UI tests with Playwright for critical flows. Integrate with a real backend and authentication.</p>
            </div>
          </div>
        </article>
      </section>

      <footer className="mt-16 border-t border-zinc-800 pt-8 text-sm text-zinc-400">
        <p className="text-base font-semibold text-zinc-200">David Rodrigues</p>
        <p className="mt-1">Portfólio com projetos em QA, automação, dados e desenvolvimento.</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <span>Home</span>
          <span>Projetos</span>
          <span>Sobre</span>
          <span>Contato</span>
          <span>GitHub</span>
          <span>LinkedIn</span>
          <span>David_2553@hotmail.com</span>
        </div>
      </footer>
    </main>
  );
}
