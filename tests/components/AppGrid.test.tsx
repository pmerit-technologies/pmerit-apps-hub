import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AppGrid } from '../../src/components/apps/AppGrid.tsx'
import { apps } from '../../src/data/apps.ts'

describe('AppGrid', () => {
  it('renders all app cards', () => {
    render(<AppGrid />)
    for (const app of apps) {
      expect(screen.getByTestId(`app-card-${app.id}`)).toBeInTheDocument()
    }
  })

  it('renders correct number of cards', () => {
    render(<AppGrid />)
    const cards = screen.getAllByTestId(/^app-card-/)
    expect(cards).toHaveLength(apps.length)
  })

  it('renders PantryOS as live', () => {
    render(<AppGrid />)
    expect(screen.getByText('PantryOS')).toBeInTheDocument()
  })

  it('renders AIXORD as live', () => {
    render(<AppGrid />)
    expect(screen.getByText('AIXORD')).toBeInTheDocument()
  })
})
