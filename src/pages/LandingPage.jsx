import Header from '../components/Header'
import Hero from '../components/Hero'
import Trust from '../components/Trust'
import Panels from '../components/Panels'
import HowItWorks from '../components/HowItWorks'
import Payments from '../components/Payments'
import Economy from '../components/Economy'
import Dashboard from '../components/Dashboard'
import TechStack from '../components/TechStack'
import Pricing from '../components/Pricing'
import Faq from '../components/Faq'
import Signup from '../components/Signup'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-night font-sans text-mist">
      <Header />
      <Hero />
      <Trust />
      <Panels />
      <HowItWorks />
      <Payments />
      <Economy />
      <Dashboard />
      <TechStack />
      <Pricing />
      <Faq />
      <Signup />
      <Footer />
    </div>
  )
}
