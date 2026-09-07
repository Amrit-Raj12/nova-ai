import Navbar from './components/layout/Navbar'

import Hero from './sections/Hero'
import TrustedCompanies from './sections/TrustedCompanies'
import Features from './sections/Features'
import ProductOverview from './sections/ProductOverview'
import HowItWorks from './sections/HowItWorks'
import Statistics from './sections/Statistics'
import Solutions from './sections/Solutions'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

import Footer from './components/layout/Footer'
import Newsletter from './sections/Newsletter'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedCompanies />
        <Features />
        <ProductOverview />
        <HowItWorks />
        <Statistics />
        <Solutions />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default App