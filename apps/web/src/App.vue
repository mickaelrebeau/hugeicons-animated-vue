<script setup lang="ts">
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import { createSmoothScroll } from './composables/useSmoothScroll'
import { gsap, ScrollTrigger } from './composables/useGsap'
import HeroSection from './components/HeroSection.vue'
import AnatomySection from './components/AnatomySection.vue'
import IconGallery from './components/IconGallery.vue'
import IconLab from './components/IconLab.vue'
import { GITHUB_URL, REACT_URL } from './lib/site'

const names = [
  'notification-03',
  'search-01',
  'refresh',
  'play',
  'mail-01',
  'settings-01',
  'cloud-upload',
  'favourite',
  'github',
  'arrow-right-02',
]

const root = useTemplateRef<HTMLElement>('root')
let ctx: gsap.Context | undefined
let scroll: ReturnType<typeof createSmoothScroll> | undefined

onMounted(() => {
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
    <div class="grain" aria-hidden="true" />
    <header class="nav">
      <a class="wordmark" href="#top">Hugeicons Animated Vue</a>
      <nav class="nav-links">
        <a href="#icons">Icons</a>
        <a href="#lab">Lab</a>
        <a :href="GITHUB_URL" target="_blank" rel="noreferrer">GitHub</a>
      </nav>
    </header>
    <main id="top">
      <HeroSection />
      <div class="marquee-wrap" aria-hidden="true">
        <div class="marquee">
          <span v-for="n in 2" :key="n">
            <template v-for="name in names" :key="`${n}-${name}`">
              {{ name }}
              <em style="color: var(--tungsten); font-style: normal"> ✴ </em>
            </template>
          </span>
        </div>
      </div>
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
