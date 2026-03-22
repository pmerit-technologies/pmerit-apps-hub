import {
  UtensilsCrossed,
  Brain,
  Sparkles,
  Calculator,
  Scale,
  Shield,
  Globe,
  ExternalLink,
} from 'lucide-react'
import type { AppInfo } from '../../types/app.ts'
import { StatusBadge } from './StatusBadge.tsx'
import { Button } from '../ui/Button.tsx'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  UtensilsCrossed,
  Brain,
  Sparkles,
  Calculator,
  Scale,
  Shield,
  Globe,
}

interface AppCardProps {
  app: AppInfo
}

export function AppCard({ app }: AppCardProps) {
  const Icon = iconMap[app.icon]
  const isAvailable = app.status === 'live' || app.status === 'beta'

  return (
    <div
      className="card-glow rounded-2xl border border-hub-border bg-hub-card p-6 flex flex-col gap-4"
      data-testid={`app-card-${app.id}`}
    >
      {/* Header: Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 rounded-xl bg-hub-accent/10 flex items-center justify-center">
          {Icon && <Icon size={24} className="text-hub-accent" />}
        </div>
        <StatusBadge status={app.status} />
      </div>

      {/* Name + Category */}
      <div>
        <h3 className="text-lg font-bold font-heading text-hub-text">
          {app.name}
        </h3>
        <span className="text-xs font-medium uppercase tracking-wider text-hub-text-muted">
          {app.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-hub-text-secondary leading-relaxed flex-1">
        {app.description}
      </p>

      {/* Action */}
      <div className="pt-2">
        {isAvailable && app.url ? (
          <Button href={app.url} variant="primary">
            Open App
            <ExternalLink size={14} />
          </Button>
        ) : (
          <Button variant="secondary" disabled>
            Coming Soon
          </Button>
        )}
      </div>
    </div>
  )
}
