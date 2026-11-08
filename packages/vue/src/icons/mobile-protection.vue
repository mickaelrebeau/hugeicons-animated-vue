<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MobileProtectionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shield stamps on the phone corner
// authored from scripts/authored
const shieldVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M18 13.4974V14.9974C18 18.2972 18 19.9471 16.9749 20.9723C15.9497 21.9974 14.2998 21.9974 11 21.9974C7.70017 21.9974 6.05025 21.9974 5.02513 20.9723C4 19.9471 4 18.2972 4 14.9974V8.99738C4 5.69755 4 4.04763 5.02513 3.02251C5.88151 2.16613 7.17392 2.02516 9.5 2.00195" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M20 5.50195V3.00195C18 3.00195 16.5 2.00195 16.5 2.00195C16.5 2.00195 15 3.00195 13 3.00195V5.50195C13 9.00195 16.5 10.002 16.5 10.002C16.5 10.002 20 9.00195 20 5.50195Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shieldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 6px' }" />
            <path d="M10 18.998H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
