<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MetroIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: it rolls forward on its wheels, then eases back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.05px) rotate(3.81deg)', 'translateX(-0.38px) rotate(-0.95deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M6 19L4 21M18 19L20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M5 9C9 13 15.5 13 19 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M5.27322 7.89427C6.09442 3.71577 7.23046 3 11.4545 3H12.5455C16.7695 3 17.9056 3.71577 18.7268 7.89427L19.2802 10.71C20.0349 14.5503 20.4123 16.4705 19.312 17.7352C18.2118 19 16.1412 19 12 19C7.85879 19 5.78819 19 4.68796 17.7352C3.58773 16.4705 3.9651 14.5503 4.71984 10.71L5.27322 7.89427Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M15.125 15H15M15.25 15C15.25 15.1381 15.1381 15.25 15 15.25C14.8619 15.25 14.75 15.1381 14.75 15C14.75 14.8619 14.8619 14.75 15 14.75C15.1381 14.75 15.25 14.8619 15.25 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M9.125 15H9M9.25 15C9.25 15.1381 9.13807 15.25 9 15.25C8.86193 15.25 8.75 15.1381 8.75 15C8.75 14.8619 8.86193 14.75 9 14.75C9.13807 14.75 9.25 14.8619 9.25 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
