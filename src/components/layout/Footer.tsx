export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hub-border mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-hub-text-muted">
            &copy; {year} PMERIT Technologies LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://technologies.pmerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-hub-text-secondary hover:text-hub-accent transition-colors"
            >
              Technologies
            </a>
            <a
              href="https://pmerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-hub-text-secondary hover:text-hub-accent transition-colors"
            >
              Foundation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
