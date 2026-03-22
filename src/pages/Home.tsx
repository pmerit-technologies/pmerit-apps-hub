import { Header } from '../components/layout/Header.tsx'
import { Hero } from '../components/hero/Hero.tsx'
import { AppGrid } from '../components/apps/AppGrid.tsx'
import { Footer } from '../components/layout/Footer.tsx'

export function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppGrid />
      </main>
      <Footer />
    </>
  )
}
