import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Services } from './components/sections/Services'
import { FastQuote } from './components/sections/FastQuote'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Services />
        <FastQuote />
        {/* <Testimonials />
        <Pricing />
        <Cta /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
