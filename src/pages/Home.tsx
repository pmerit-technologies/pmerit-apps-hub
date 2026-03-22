import { Header } from '../components/layout/Header.tsx'
import { InstallBanner } from '../components/install/InstallBanner.tsx'
import { Hero } from '../components/hero/Hero.tsx'
import { AppGrid } from '../components/apps/AppGrid.tsx'

export function Home() {
  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      <Header />
      <InstallBanner />
      <main className="flex-1 flex flex-col overflow-hidden">
        <Hero />
        <AppGrid />
        {/* Minimal footer inline */}
        <div className="text-center py-2 text-[9px] sm:text-[10px] text-hub-text-muted shrink-0">
          &copy; {new Date().getFullYear()} PMERIT Technologies LLC
        </div>
      </main>
    </div>
  )
}
