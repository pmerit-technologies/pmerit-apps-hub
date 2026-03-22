import { apps } from '../../data/apps.ts'

export function Hero() {
  const liveCount = apps.filter((a) => a.status === 'live').length
  const totalCount = apps.length

  return (
    <section className="hero-gradient py-16 sm:py-24">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Entity badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-hub-accent/10 border border-hub-accent/20 mb-6">
          <span className="text-xs font-semibold text-hub-accent uppercase tracking-wider">
            PMERIT Technologies
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-hub-text mb-4 leading-tight">
          PMERIT Apps
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-hub-text-secondary max-w-2xl mx-auto mb-8 leading-relaxed">
          Discover tools built to simplify your life. Track food, manage
          finances, navigate legal processes, and more &mdash; all from one
          place.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-hub-accent">
              {liveCount}
            </span>
            <span className="text-hub-text-muted">Live Apps</span>
          </div>
          <div className="w-px h-10 bg-hub-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-hub-warning">
              {totalCount - liveCount}
            </span>
            <span className="text-hub-text-muted">Coming Soon</span>
          </div>
          <div className="w-px h-10 bg-hub-border" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-hub-success">100%</span>
            <span className="text-hub-text-muted">Cloudflare</span>
          </div>
        </div>
      </div>
    </section>
  )
}
