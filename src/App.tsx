import { ArrowRight, Zap } from 'lucide-react'
import { useEffect } from 'react'

import heroBackground from './assets/movies-and-series.jpg'
import AccessCard from './components/cards/AccessCard'
import DevicesCard from './components/cards/DevicesCard'
import PlanCard from './components/cards/PlanCard'
import StartCard from './components/cards/StartCard'
import { Button } from './components/ui/button'
import buildWhatsappLink from './lib/whatsapp'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 70, 420)}ms`
    })

    const forceVisible = window.setTimeout(() => {
      elements.forEach((element) => element.classList.add('is-visible'))
    }, 1400)

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return () => window.clearTimeout(forceVisible)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.28, rootMargin: '0px 0px -12% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      window.clearTimeout(forceVisible)
    }
  }, [])

    const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER as string) || ''
    const priceEnv = (import.meta.env.VITE_PRICE as string) || 'R$ 29,90'
    const heroWhatsappLink = buildWhatsappLink(whatsappNumber, priceEnv, 'trial')

  const resources = [
    'Filmes atualizados',
    'Séries completas',
    'Canais ao vivo',
    'Esportes e futebol',
    'Shows',
    'Conteúdo infantil',
    'Documentários',
    'Suporte dedicado', 
  ]

  const devices = ['Smart TV', 'TV Box', 'Celular', 'Notebook', 'Tablet', 'Chormecast']

  return (
    <main className="relative min-h-screen overflow-x-clip bg-zinc-950 text-white">
      <img src={heroBackground} alt="Filmes e séries" className="background-media is-visible" />
      <div className="background-overlay" />
      <div className="animated-aurora" />

      <section
        className="flex w-full flex-col gap-3 px-2 pb-10 pt-4 sm:gap-4 sm:px-3 sm:pb-16 sm:pt-8 lg:px-4"
        style={{ paddingBottom: 'calc(2.5rem + env(safe-area-inset-bottom))' }}
      >
        <div data-reveal className="glass-panel reveal-up mx-0 sm:mx-0 rounded-3xl p-4 sm:p-8 lg:p-10">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-sky-200 sm:text-sm">
            <Zap className="size-4" />
            Entretenimento premium em um só lugar
          </p>

          <h1 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Assista Canais, Filmes e Séries em um só lugar
          </h1>

          <div className="mt-5 grid gap-2 text-md text-zinc-200 sm:mt-6 sm:grid-cols-3 sm:text-base">
            <p data-reveal className="chip reveal-up">📺 Qualidade HD</p>
            <p data-reveal className="chip reveal-up">🚀 Acesso rápido</p>
            <p data-reveal className="chip reveal-up">📱 Funciona em qualquer dispositivo</p>
          </div>

          <p className="mt-5 max-w-2xl text-lg text-zinc-300 sm:mt-6 sm:text-base">
            🔓 <strong>Sem necessidade de cadastro.</strong> É só chamar no WhatsApp e começar.
          </p>
          <br />

            <Button href={heroWhatsappLink} target="_blank" rel="noreferrer" variant="hero" size="lg" className="w-full">
            Solicite seu teste no WhatsApp
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <PlanCard price={priceEnv} />
          <AccessCard resources={resources} />
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <DevicesCard devices={devices} />
          <StartCard />
        </div>
      </section>
    </main>
  )
}

export default App
