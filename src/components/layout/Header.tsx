export function Header() {
  return (
    <header className="glass-header sticky top-0 z-50 border-b border-hub-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo + Brand */}
        <a href="/" className="flex items-center gap-3 no-underline">
          <img
            src="/pmerit_lockup.svg"
            alt="PMERIT"
            className="h-8"
            onError={(e) => {
              // Fallback if SVG not available
              e.currentTarget.style.display = 'none'
            }}
          />
          <span className="text-lg font-bold font-heading text-hub-text hidden sm:inline">
            Apps
          </span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-4">
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
