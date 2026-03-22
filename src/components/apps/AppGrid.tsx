import { apps } from '../../data/apps.ts'
import { AppCard } from './AppCard.tsx'

export function AppGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </section>
  )
}
