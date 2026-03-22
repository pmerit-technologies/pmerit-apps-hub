import { Grid2x2 } from 'lucide-react'

export function Header() {
  return (
    <header className="glass-header sticky top-0 z-50 border-b border-hub-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo — icon + wordmark */}
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-lg bg-hub-accent/15 flex items-center justify-center">
            <Grid2x2 size={16} className="text-hub-accent" />
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-sm sm:text-base font-bold font-heading text-hub-text">
              PMERIT
            </span>
            <span className="text-sm sm:text-base font-semibold text-hub-text-secondary">
              Apps
            </span>
          </div>
        </a>

        {/* Minimal nav — hide on very small screens */}
        <nav className="hidden sm:flex items-center gap-4">
          <a
            href="https://technologies.pmerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-hub-text-secondary hover:text-hub-text transition-colors"
          >
            Technologies
          </a>
          <a
            href="https://pmerit.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-hub-text-secondary hover:text-hub-text transition-colors"
          >
            Foundation
          </a>
        </nav>
      </div>
    </header>
  )
}
