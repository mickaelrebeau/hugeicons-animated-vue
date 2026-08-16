<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlipTopIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after credit-card: the object turns edge-on and reveals its opposite face
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateY(0deg)',
  },
  animate: {
    transform: ['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(270deg)', 'rotateY(360deg)'],
    transition: {
      duration: 0.68,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

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
            <motion.path d="M9.66676 22L14.3334 22M3.01509 16.5C2.99793 16.0004 2.99705 15.5001 2.99855 15M20.9849 16.5C21.0021 16.0004 21.003 15.5001 21.0015 15M3.53709 19.2547C4.02122 20.213 4.80249 20.9914 5.76305 21.4718M18.1797 21.5C19.1665 21.0221 19.9692 20.232 20.4629 19.2547" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.50502 12C3.64422 12 3.00695 11.4596 3.00695 9.5C3.00695 6.96832 2.75702 4.04633 5.25521 2.60289C6.29863 2 7.69947 2 10.5012 2L13.4988 2C16.3005 2 17.7014 2 18.7448 2.60289C21.243 4.04633 20.9931 6.96832 20.9931 9.5C20.9931 11.3622 20.453 12 18.495 12L5.50502 12Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
