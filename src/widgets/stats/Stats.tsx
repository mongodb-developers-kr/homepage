import { StatsGrid } from './ui/StatsGrid'

export const Stats = () => {
  return (
    <section className="relative isolate py-20 border-t border-border bg-bg-primary/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <StatsGrid />
      </div>
    </section>
  )
}
