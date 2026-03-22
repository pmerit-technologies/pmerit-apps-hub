import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { StatusBadge } from '../../src/components/apps/StatusBadge.tsx'

describe('StatusBadge', () => {
  it('renders "Live" for live status', () => {
    render(<StatusBadge status="live" />)
    expect(screen.getByText('Live')).toBeInTheDocument()
    expect(screen.getByTestId('badge-live')).toBeInTheDocument()
  })

  it('renders "Beta" for beta status', () => {
    render(<StatusBadge status="beta" />)
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByTestId('badge-beta')).toBeInTheDocument()
  })

  it('renders "Coming Soon" for coming-soon status', () => {
    render(<StatusBadge status="coming-soon" />)
    expect(screen.getByText('Coming Soon')).toBeInTheDocument()
    expect(screen.getByTestId('badge-coming-soon')).toBeInTheDocument()
  })
})
