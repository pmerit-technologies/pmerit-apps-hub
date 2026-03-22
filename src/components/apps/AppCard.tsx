import {
  UtensilsCrossed,
  Brain,
  Sparkles,
  Calculator,
  Scale,
  Shield,
  Globe,
  ArrowRight,
} from 'lucide-react'
import type { AppInfo } from '../../types/app.ts'
import { StatusBadge } from './StatusBadge.tsx'

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

  const cardContent = (
    <div
      className={`card-glow rounded-xl sm:rounded-2xl border bg-hub-card flex flex-col items-center text-center p-3 sm:p-4 gap-1.5 sm:gap-2 h-full ${
        isAvailable
          ? 'border-hub-border cursor-pointer'
          : 'border-hub-border/60 opacity-75'
      }`}
      data-testid={`app-card-${app.id}`}
    >
      {/* Icon */}
      <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-hub-accent/10 flex items-center justify-center shrink-0">
        {Icon && <Icon size={20} className={`${isAvailable ? 'text-hub-accent' : 'text-hub-text-muted'} sm:hidden`} />}
        {Icon && <Icon size={28} className={`${isAvailable ? 'text-hub-accent' : 'text-hub-text-muted'} hidden sm:block`} />}
      </div>

      {/* Name */}
      <h3 className="text-xs sm:text-sm font-bold font-heading text-hub-text leading-tight">
        {app.name}
      </h3>

      {/* Category */}
      <span className="text-[8px] sm:text-[10px] font-medium uppercase tracking-wider text-hub-text-muted">
        {app.category}
      </span>

      {/* Description — hidden on mobile to save space, 1 line on desktop */}
      <p className="hidden sm:block text-[11px] text-hub-text-secondary leading-snug line-clamp-1 w-full">
        {app.description}
      </p>

      {/* Action — pushed to bottom */}
      <div className="w-full mt-auto pt-1">
        {isAvailable ? (
          <span className="inline-flex items-center justify-center gap-1 w-full py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-hub-accent text-hub-bg text-[11px] sm:text-xs font-semibold transition-all hover:bg-hub-accent-hover active:scale-[0.98]">
            GET
            <ArrowRight size={12} />
          </span>
        ) : (
          <StatusBadge status={app.status} />
        )}
      </div>
    </div>
  )

  if (isAvailable && app.url) {
    return (
      <a href={app.url} target="_blank" rel="noopener noreferrer" className="no-underline block h-full">
        {cardContent}
      </a>
    )
  }

  return cardContent
}
