<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LiveStreaming01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the signal arcs broadcast over the LIVE sign
// authored from scripts/authored
const waveVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.1, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const wave2Variants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: false,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <path d="M17 21C18.8692 21 19.8038 21 20.5 20.5981C20.9561 20.3348 21.3348 19.9561 21.5981 19.5C22 18.8038 22 17.8692 22 16C22 14.1308 22 13.1962 21.5981 12.5C21.3348 12.0439 20.9561 11.6652 20.5 11.4019C19.8038 11 18.8692 11 17 11H7C5.13077 11 4.19615 11 3.5 11.4019C3.04394 11.6652 2.66523 12.0439 2.40192 12.5C2 13.1962 2 14.1308 2 16C2 17.8692 2 18.8038 2.40192 19.5C2.66523 19.9561 3.04394 20.3348 3.5 20.5981C4.19615 21 5.13077 21 7 21H17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16 6C15.0227 4.77354 13.5929 4 12 4C10.4071 4 8.97726 4.77354 8 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M14 8C13.5114 7.38677 12.7965 7 12 7C11.2035 7 10.4886 7.38677 10 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wave2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <path d="M5 14V18H6.5M19 18H17V16M17 16V14H19M17 16H18.5M9 14V18M11.5 14L13 18L14.5 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
