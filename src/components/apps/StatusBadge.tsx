import type { AppStatus } from '../../types/app.ts'

interface StatusBadgeProps {
  status: AppStatus
}

const statusConfig: Record<
  AppStatus,
  { label: string; bg: string; text: string }
> = {
  live: {
    label: 'Live',
    bg: 'bg-hub-success/15',
    text: 'text-hub-success',
  },
  beta: {
    label: 'Beta',
    bg: 'bg-hub-accent/15',
    text: 'text-hub-accent',
  },
  'coming-soon': {
    label: 'Coming Soon',
    bg: 'bg-hub-warning/15',
    text: 'text-hub-warning',
  },
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${config.bg} ${config.text}`}
      data-testid={`badge-${status}`}
    >
      {config.label}
    </span>
  )
}
