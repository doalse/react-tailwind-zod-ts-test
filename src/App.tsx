import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Services } from './components/sections/Services'
import { FastQuote } from './components/sections/FastQuote'
import { RestorationServices } from './components/sections/RestorationServices'
import { Reviews } from './components/sections/Reviews'
import { Professionals } from './components/sections/Professionals'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Services />
        <FastQuote />
        <RestorationServices />
        <Reviews />
        <Professionals />
      </main>
      <Footer />
    </div>
  )
}

export default App
