import { useState, useEffect } from 'react'
import { Download, Share, Plus, X } from 'lucide-react'

type Platform = 'ios' | 'android' | 'desktop'

function detectPlatform(): Platform {
  const ua = navigator.userAgent
  if (/iPad|iPhone|iPod/.test(ua)) return 'ios'
  if (/Android/.test(ua)) return 'android'
  return 'desktop'
}

function isStandalone(): boolean {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    ('standalone' in navigator && (navigator as unknown as { standalone: boolean }).standalone === true)
  )
}

export function InstallBanner() {
  const [platform, setPlatform] = useState<Platform>('desktop')
  const [dismissed, setDismissed] = useState(false)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    setPlatform(detectPlatform())
    setInstalled(isStandalone())
  }, [])

  // Don't show if already installed as PWA or dismissed
  if (installed || dismissed) return null

  // Don't show on desktop — PWA install is less relevant there
  if (platform === 'desktop') return null

  return (
    <div className="install-banner bg-hub-accent/10 border-b border-hub-accent/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-hub-accent/15 flex items-center justify-center shrink-0">
            <Download size={18} className="text-hub-accent" />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-hub-text truncate">
              Install PMERIT Apps
            </p>
            <p className="text-xs text-hub-text-secondary">
              {platform === 'ios' ? (
                <span className="inline-flex items-center gap-1">
                  Tap <Share size={12} className="inline" /> then <Plus size={12} className="inline" /> Add to Home Screen
                </span>
              ) : (
                'Tap the menu and select "Install app"'
              )}
            </p>
          </div>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1.5 rounded-lg hover:bg-hub-border/50 text-hub-text-muted hover:text-hub-text transition-colors shrink-0"
          aria-label="Dismiss install banner"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}
