import { apps } from '../../data/apps.ts'

export function Hero() {
  const liveCount = apps.filter((a) => a.status === 'live').length
  const totalCount = apps.length

  return (
    <section className="py-4 sm:py-6 text-center">
      <h1 className="text-xl sm:text-2xl font-extrabold font-heading text-hub-text mb-1 leading-tight">
        PMERIT Apps
      </h1>
      <p className="text-xs sm:text-sm text-hub-text-secondary mb-2">
        Your apps, one place. Install on any phone.
      </p>
      <div className="inline-flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-1.5 rounded-full bg-hub-bg-secondary/80 border border-hub-border text-[10px] sm:text-xs">
        <span className="font-medium text-hub-text">
          <span className="text-hub-accent font-bold">{liveCount}</span> Ready
        </span>
        <div className="w-px h-3 bg-hub-border" />
        <span className="font-medium text-hub-text">
          <span className="text-hub-warning font-bold">{totalCount - liveCount}</span> Coming
        </span>
        <div className="w-px h-3 bg-hub-border" />
        <span className="text-hub-text-muted">Free to use</span>
      </div>
    </section>
  )
}
