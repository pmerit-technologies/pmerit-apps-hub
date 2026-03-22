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

  it('renders "GET" button for live apps', () => {
    render(<AppCard app={liveApp} />)
    expect(screen.getByText('GET')).toBeInTheDocument()
  })

  it('wraps live app in a link to the app URL', () => {
    render(<AppCard app={liveApp} />)
    const link = screen.getByTestId('app-card-test-live').closest('a')
    expect(link).toHaveAttribute('href', 'https://test.pmerit.com')
  })

  it('renders Coming Soon badge for coming-soon apps', () => {
    render(<AppCard app={comingSoonApp} />)
    expect(screen.getByTestId('badge-coming-soon')).toBeInTheDocument()
  })

  it('does not wrap coming-soon apps in a link', () => {
    render(<AppCard app={comingSoonApp} />)
    const card = screen.getByTestId('app-card-test-coming')
    expect(card.closest('a')).toBeNull()
  })
})
