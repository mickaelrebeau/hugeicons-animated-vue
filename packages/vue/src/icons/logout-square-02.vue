<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LogoutSquare02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after logout-01: the arrow loads inside and clears the opening
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(3.12px)', 'translateX(-0.31px)', 'translateX(0px)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.69px) scaleX(0.96)', 'translateX(-0.2px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
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
            <motion.path d="M19.9999 6.99974C19.923 5.58247 19.7124 4.66414 19.1363 3.96217C18.9701 3.75963 18.7844 3.57392 18.5818 3.4077C17.4755 2.49974 15.8318 2.49974 12.5443 2.49974L11.9999 2.4999C8.2287 2.4999 6.34308 2.4999 5.17151 3.67147C3.99994 4.84305 3.99994 6.72866 3.99994 10.4999V13.4999C3.99994 17.2711 3.99994 19.1568 5.17151 20.3283C6.34308 21.4999 8.2287 21.4999 11.9999 21.4999L12.5443 21.4997C15.8318 21.4997 17.4755 21.4997 18.5818 20.5918C18.7844 20.4256 18.9701 20.2399 19.1363 20.0373C19.7124 19.3353 19.923 18.417 19.9999 16.9997" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 7.99991C16 7.99991 20 10.9459 20 11.9999C20 13.054 16 15.9999 16 15.9999M19.5 11.9999H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 12px' }" />
          </svg>
        </div>
</template>
