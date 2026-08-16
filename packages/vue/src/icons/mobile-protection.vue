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

// after call-02: the phone gives one tactile ring and settles in the hand
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-10.47deg)', 'rotate(8.38deg)', 'rotate(-5.24deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.71,
      ease: 'easeInOut',
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M18 13.4974V14.9974C18 18.2972 18 19.9471 16.9749 20.9723C15.9497 21.9974 14.2998 21.9974 11 21.9974C7.70017 21.9974 6.05025 21.9974 5.02513 20.9723C4 19.9471 4 18.2972 4 14.9974V8.99738C4 5.69755 4 4.04763 5.02513 3.02251C5.88151 2.16613 7.17392 2.02516 9.5 2.00195" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 2px' }" />
            <motion.path d="M20 5.50195V3.00195C18 3.00195 16.5 2.00195 16.5 2.00195C16.5 2.00195 15 3.00195 13 3.00195V5.50195C13 9.00195 16.5 10.002 16.5 10.002C16.5 10.002 20 9.00195 20 5.50195Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 2px' }" />
            <motion.path d="M10 18.998H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 2px' }" />
          </svg>
        </div>
</template>
