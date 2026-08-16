<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ToyBrickIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the toy brick separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.3px, -1.11px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.74px) rotate(-0.93deg)', 'translateY(0.42px) rotate(0.46deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
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
            <motion.path d="M5 8V6.5C5 5.56538 5 5.09808 5.20096 4.75C5.33261 4.52197 5.52197 4.33261 5.75 4.20096C6.09808 4 6.56538 4 7.5 4C8.43462 4 8.90192 4 9.25 4.20096C9.47803 4.33261 9.66739 4.52197 9.79904 4.75C10 5.09808 10 5.56538 10 6.5V8H5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 6px' }" />
            <motion.path d="M16 20H8C5.17157 20 3.75736 20 2.87868 19.1213C2 18.2426 2 16.8284 2 14C2 11.1716 2 9.75736 2.87868 8.87868C3.75736 8 5.17157 8 8 8H16C18.8284 8 20.2426 8 21.1213 8.87868C22 9.75736 22 11.1716 22 14C22 16.8284 22 18.2426 21.1213 19.1213C20.2426 20 18.8284 20 16 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M14 8V6.5C14 5.56538 14 5.09808 14.201 4.75C14.3326 4.52197 14.522 4.33261 14.75 4.20096C15.0981 4 15.5654 4 16.5 4C17.4346 4 17.9019 4 18.25 4.20096C18.478 4.33261 18.6674 4.52197 18.799 4.75C19 5.09808 19 5.56538 19 6.5V8H14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 6px' }" />
          </svg>
        </div>
</template>
