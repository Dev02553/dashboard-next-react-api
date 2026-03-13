export function KpiCard({ title, value, helper }: { title: string; value: string; helper: string }) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-sm">
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-zinc-100">{value}</p>
      <p className="mt-2 text-sm text-zinc-500">{helper}</p>
    </div>
  );
}
