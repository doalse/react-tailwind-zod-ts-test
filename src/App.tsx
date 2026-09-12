import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { Services } from './components/sections/Services'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Services />
        {/* <Features />
        <Testimonials />
        <Pricing />
        <Cta /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
