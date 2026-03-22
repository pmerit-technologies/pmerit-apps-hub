import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AppCard } from '../../src/components/apps/AppCard.tsx'
import type { AppInfo } from '../../src/types/app.ts'

const liveApp: AppInfo = {
  id: 'test-live',
  name: 'Test App',
  description: 'A test application.',
  status: 'live',
  category: 'Household',
  url: 'https://test.pmerit.com',
  icon: 'UtensilsCrossed',
}

const comingSoonApp: AppInfo = {
  id: 'test-coming',
  name: 'Future App',
  description: 'Coming soon.',
  status: 'coming-soon',
  category: 'Finance',
  icon: 'Calculator',
}

describe('AppCard', () => {
  it('renders app name and description', () => {
    render(<AppCard app={liveApp} />)
    expect(screen.getByText('Test App')).toBeInTheDocument()
    expect(screen.getByText('A test application.')).toBeInTheDocument()
  })

  it('renders category', () => {
    render(<AppCard app={liveApp} />)
    expect(screen.getByText('Household')).toBeInTheDocument()
  })

  it('renders "Open App" link for live apps', () => {
    render(<AppCard app={liveApp} />)
    const link = screen.getByText('Open App')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', 'https://test.pmerit.com')
  })

  it('renders disabled "Coming Soon" button for coming-soon apps', () => {
    render(<AppCard app={comingSoonApp} />)
    const button = screen.getByRole('button', { name: 'Coming Soon' })
    expect(button).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('renders Live badge for live apps', () => {
    render(<AppCard app={liveApp} />)
    expect(screen.getByTestId('badge-live')).toBeInTheDocument()
  })

  it('renders Coming Soon badge for coming-soon apps', () => {
    render(<AppCard app={comingSoonApp} />)
    expect(screen.getByTestId('badge-coming-soon')).toBeInTheDocument()
  })
})
