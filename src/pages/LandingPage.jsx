import Header from '../components/Header'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
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
      {/* O hero fica fora da animação: está acima da dobra e piscaria no carregamento. */}
      <Hero />
      <Reveal>
        <Trust />
      </Reveal>
      <Reveal>
        <Panels />
      </Reveal>
      <Reveal>
        <HowItWorks />
      </Reveal>
      <Reveal>
        <Payments />
      </Reveal>
      <Reveal>
        <Economy />
      </Reveal>
      <Reveal>
        <Dashboard />
      </Reveal>
      <Reveal>
        <TechStack />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <Faq />
      </Reveal>
      <Reveal>
        <Signup />
      </Reveal>
      <Footer />
    </div>
  )
}
