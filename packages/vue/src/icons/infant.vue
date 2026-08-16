<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InfantIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the infant separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.81px) rotate(-1.01deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.42px, -1.22px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M19.9504 10.8961C19.5049 14.8926 16.1153 18 12 18C7.88465 18 4.49508 14.8926 4.04963 10.8961C3.87943 10.9632 3.69402 11 3.5 11C2.67157 11 2 10.3284 2 9.5C2 8.67157 2.67157 8 3.5 8C3.75626 8 3.99751 8.06426 4.20851 8.17754C5.03332 4.63736 8.20867 2 12 2C15.7913 2 18.9667 4.63736 19.7915 8.17755C20.0025 8.06426 20.2437 8 20.5 8C21.3284 8 22 8.67157 22 9.5C22 10.3284 21.3284 11 20.5 11C20.306 11 20.1206 10.9632 19.9504 10.8961Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M18 22C18 20.208 17.2144 18.5994 15.9687 17.5M6 22C6 20.208 6.78563 18.5994 8.03126 17.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.75px' }" />
            <motion.path d="M12 2C13 2 14 2.89543 14 4C14 5.10457 13 6 12 6C11.5 6 10.9246 5.81669 10.5 5.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.25px 4px' }" />
            <motion.path d="M8.375 10H8.25M15.625 10H15.75M8.5 10C8.5 10.1381 8.38807 10.25 8.25 10.25C8.11193 10.25 8 10.1381 8 10C8 9.86193 8.11193 9.75 8.25 9.75C8.38807 9.75 8.5 9.86193 8.5 10ZM15.5 10C15.5 10.1381 15.6119 10.25 15.75 10.25C15.8881 10.25 16 10.1381 16 10C16 9.86193 15.8881 9.75 15.75 9.75C15.6119 9.75 15.5 9.86193 15.5 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M12 15C12.5523 15 13 14.5523 13 14H11C11 14.5523 11.4477 15 12 15Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
          </svg>
        </div>
</template>
