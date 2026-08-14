import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function createSmoothScroll() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) return { destroy() {} }

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const ticker = (time: number) => {
    lenis.raf(time * 1000)
  }
  gsap.ticker.add(ticker)
  gsap.ticker.lagSmoothing(0)

  return {
    lenis,
    destroy() {
      gsap.ticker.remove(ticker)
      lenis.destroy()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    },
  }
}
