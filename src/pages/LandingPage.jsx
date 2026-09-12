import Header from '../components/Header'
import Hero from '../components/Hero'
import Panels from '../components/Panels'
import HowItWorks from '../components/HowItWorks'
import Economy from '../components/Economy'
import Dashboard from '../components/Dashboard'
import TechStack from '../components/TechStack'
import Pricing from '../components/Pricing'
import Signup from '../components/Signup'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-cream font-sans text-ink">
      <Header />
      <Hero />
      <Panels />
      <HowItWorks />
      <Economy />
      <Dashboard />
      <TechStack />
      <Pricing />
      <Signup />
      <Footer />
    </div>
  )
}
