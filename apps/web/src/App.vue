<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import { createSmoothScroll } from './composables/useSmoothScroll'
import { gsap, ScrollTrigger } from './composables/useGsap'
import HeroSection from './components/HeroSection.vue'
import AnatomySection from './components/AnatomySection.vue'
import IconGallery from './components/IconGallery.vue'
import IconLab from './components/IconLab.vue'
import { GITHUB_URL, REACT_URL } from './lib/site'
import { loadIconCatalog } from './lib/icons-manifest'

const root = useTemplateRef<HTMLElement>('root')
let ctx: gsap.Context | undefined
let scroll: ReturnType<typeof createSmoothScroll> | undefined

onMounted(() => {
  void loadIconCatalog()
  scroll = createSmoothScroll()
  ctx = gsap.context(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to('[data-aperture]', {
        rotate: 18,
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      })
      gsap.utils.toArray<HTMLElement>('.specimen').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -70 : 90,
          x: i % 3 === 0 ? 30 : -24,
          rotate: i % 2 === 0 ? 8 : -10,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.25,
          },
        })
      })
      gsap.from('.hero-copy > *', {
        autoAlpha: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.08,
        ease: 'power3.out',
      })
    })
  }, root.value)
})

onUnmounted(() => {
  ctx?.revert()
  scroll?.destroy()
  ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>

<template>
  <div ref="root" class="site">
    <header class="nav">
      <a class="wordmark" href="#top">
        <span class="wordmark-mark" aria-hidden="true">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="4.25" stroke="currentColor" stroke-width="1.4" />
            <circle cx="6" cy="6" r="1.4" fill="currentColor" />
          </svg>
        </span>
        hugeicons animated vue
      </a>
      <nav class="nav-links">
        <a href="#icons">Icons</a>
        <a href="#lab">Playground</a>
        <a class="nav-cta" :href="GITHUB_URL" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
    <main id="top">
      <HeroSection />
      <AnatomySection />
      <IconGallery />
      <IconLab />
    </main>
    <footer class="footer">
      <span>MIT · geometry from Hugeicons · motion ported for Vue</span>
      <a :href="REACT_URL" target="_blank" rel="noreferrer">React original →</a>
    </footer>
  </div>
</template>
