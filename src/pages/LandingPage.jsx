import { useEffect } from 'react'
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

/**
 * Ao abrir um link com âncora (ex: /#planos), o navegador tenta rolar antes de
 * o React montar — a seção ainda não existe e a página fica no topo. Aqui
 * repetimos o scroll depois da montagem e de novo quando as imagens terminam
 * de carregar, já que elas não têm dimensão declarada e deslocam o layout.
 */
function useScrollToHash() {
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return

    const scrollToTarget = () => document.getElementById(id)?.scrollIntoView()

    scrollToTarget()

    if (document.readyState === 'complete') return
    window.addEventListener('load', scrollToTarget)
    return () => window.removeEventListener('load', scrollToTarget)
  }, [])
}

export default function LandingPage() {
  useScrollToHash()

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
