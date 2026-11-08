<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EcoPowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the leaf on the power ring sprouts
// authored from scripts/authored
const ringVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leafVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(-1.88px, 2.20px) scale(0.6)',
      'translate(0.47px, -0.55px) scale(1.1)',
      'translate(-0.09px, 0.11px) scale(0.98)',
      'translate(0.00px, 0.00px) scale(1)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M9 20C5.22895 19.1318 3 15.6772 3 12.5102C3 8.74448 6.37016 5.02317 8.73565 2.875C10.0204 1.70833 11.9797 1.70833 13.2643 2.875C14.7712 4.24338 16.5749 6.25009 17.7511 8.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="ringVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 15.5C15.5 16.5 13 18.5 11 22M13 19C10.3362 13.1407 15.8347 11.2355 19.9249 11.0158C20.4185 10.9893 20.6653 10.976 20.8425 11.147C21.0198 11.3179 21.0095 11.5616 20.9891 12.049C20.8194 16.1017 18.9947 21.6068 13 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leafVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.7px 16.5px' }" />
          </svg>
        </div>
</template>
