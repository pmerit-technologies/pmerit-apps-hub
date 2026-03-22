interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  href?: string
  disabled?: boolean
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  href,
  disabled = false,
  className = '',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer'

  const variants = {
    primary:
      'bg-hub-accent text-hub-bg hover:bg-hub-accent-hover active:scale-[0.98]',
    secondary:
      'bg-transparent border border-hub-border text-hub-text-secondary hover:border-hub-border-hover hover:text-hub-text',
  }

  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none'

  const classes = `${base} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
