import { Header } from '../components/layout/Header.tsx'
import { Footer } from '../components/layout/Footer.tsx'
import { Button } from '../components/ui/Button.tsx'

export function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl font-extrabold font-heading text-hub-accent mb-4">
            404
          </h1>
          <p className="text-lg text-hub-text-secondary mb-8">
            This page doesn&apos;t exist.
          </p>
          <Button href="/">Back to Apps</Button>
        </div>
      </main>
      <Footer />
    </>
  )
}
