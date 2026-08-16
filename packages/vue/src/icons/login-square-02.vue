<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LoginSquare02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-01: the arrow gathers outside and enters through the opening
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-2.99px)', 'translateX(1px)', 'translateX(-0.3px)', 'translateX(0px)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.68px) scaleX(0.96)', 'translateX(-0.19px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.54,
      delay: 0.08,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M19.9999 6.99976C19.923 5.58248 19.7124 4.66416 19.1363 3.96219C18.9701 3.75965 18.7844 3.57394 18.5818 3.40772C17.4755 2.49976 15.8318 2.49976 12.5443 2.49976L11.9999 2.49992C8.2287 2.49992 6.34308 2.49992 5.17151 3.67149C3.99994 4.84307 3.99994 6.72868 3.99994 10.4999V13.4999C3.99994 17.2712 3.99994 19.1568 5.17151 20.3283C6.34308 21.4999 8.2287 21.4999 11.9999 21.4999L12.5443 21.4998C15.8318 21.4998 17.4755 21.4998 18.5818 20.5918C18.7844 20.4256 18.9701 20.2399 19.1363 20.0373C19.7124 19.3354 19.923 18.417 19.9999 16.9998" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M13 7.99992C13 7.99992 9.00001 10.9459 9 12C8.99999 13.054 13 15.9999 13 15.9999M9.5 12H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
          </svg>
        </div>
</template>
