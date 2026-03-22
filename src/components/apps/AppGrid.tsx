import { apps } from '../../data/apps.ts'
import { AppCard } from './AppCard.tsx'

export function AppGrid() {
  // Show live/beta apps first, then coming soon
  const sorted = [...apps].sort((a, b) => {
    const order = { live: 0, beta: 1, 'coming-soon': 2 }
    return order[a.status] - order[b.status]
  })

  return (
    <section className="w-full max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 flex-1 flex flex-col min-h-0">
      {/* Section label */}
      <h2 className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-hub-text-muted mb-2 sm:mb-3 shrink-0">
        All Apps
      </h2>

      {/* Scrollable grid area — only this section scrolls on mobile */}
      <div className="flex-1 overflow-y-auto min-h-0 -mx-1 px-1 pb-2 scrollbar-hide">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
          {sorted.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  )
}
