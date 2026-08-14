<script setup lang="ts">
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import Notification03Icon from 'hugeicons-animated-vue/icons/notification-03.vue'
import type { AnimatedIconHandle } from 'hugeicons-animated-vue/types'
import { gsap, ScrollTrigger } from '../composables/useGsap'

const root = useTemplateRef<HTMLElement>('root')
const icon = useTemplateRef<AnimatedIconHandle>('icon')
const active = ref(0)
let ctx: gsap.Context | undefined

const steps = [
  {
    kicker: '01 · Geometry',
    title: 'Keep the native marks.',
    body: 'Animation never replaces the Hugeicon. Paths stay mounted; only the part that carries the verb moves.',
  },
  {
    kicker: '02 · Timing',
    title: 'A short, readable beat.',
    body: 'Productive motion lands between 120 and 300 ms. Loops are reserved for states that are actually ongoing.',
  },
  {
    kicker: '03 · Rest',
    title: 'Every gesture returns home.',
    body: 'Hover, interrupt, or reduced motion — the icon settles on the original pose. Stillness is the default.',
  },
]

onMounted(() => {
  if (!root.value) return
  ctx = gsap.context(() => {
    gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', () => {
      ScrollTrigger.create({
        trigger: root.value,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          const next = Math.min(2, Math.floor(self.progress * 3))
          if (next !== active.value) {
            active.value = next
            icon.value?.startAnimation()
          }
        },
      })
    })
  }, root.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<template>
  <section id="anatomy" ref="root" class="anatomy">
    <div class="anatomy-sticky">
      <div class="anatomy-stage">
        <Notification03Icon ref="icon" :size="168" />
      </div>
      <div>
        <p class="kicker">How a mark becomes a verb</p>
        <div class="step-list">
          <article
            v-for="(step, i) in steps"
            :key="step.title"
            class="step"
            :class="{ 'is-on': active === i }"
          >
            <small>{{ step.kicker }}</small>
            <h3>{{ step.title }}</h3>
            <p>{{ step.body }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
