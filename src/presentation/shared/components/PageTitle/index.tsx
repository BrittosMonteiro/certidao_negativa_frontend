export function PageTitle({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-bold">{title}</span>
      {subtitle && (
        <span className="text-sm font-base text-zinc-600">{subtitle}</span>
      )}
    </div>
  )
}