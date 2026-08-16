<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AdzanIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the call carries outward from the minaret, both sides pushing away from the tower again and again
// authored from scripts/authored
const domeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.035)', 'scale(1)'],
    transition: {
      duration: 1.1,
      times: [0, 0.4, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.14,
    },
  },
};

const towerVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 1.1,
      times: [0, 0.4, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.14,
    },
  },
};

const callRightVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 1 },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.4px)', 'translateX(0px)'],
    opacity: [1, 0.35, 1],
    transition: {
      duration: 1.1,
      times: [0, 0.46, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.14,
    },
  },
};

const callLeftVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 1 },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.4px)', 'translateX(0px)'],
    opacity: [1, 0.35, 1],
    transition: {
      duration: 1.1,
      times: [0, 0.46, 1],
      ease: [0.23, 1, 0.32, 1],
      repeat: Infinity,
      repeatDelay: 0.14,
    },
  },
};

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
            <motion.path d="M6.59279 12C2.73603 6.28571 10.1661 4.5 11.9987 2C13.8316 4.5 21.2614 6.28571 17.4021 12H6.59279Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="domeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 16L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="towerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <path d="M6.5 12V16.2857C6.5 18.9795 6.5 20.3263 7.30546 21.1632C8.11091 22 9.40728 22 12 22C14.5927 22 15.8891 22 16.6945 21.1632C17.5 20.3263 17.5 18.9795 17.5 16.2857V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20 14L21 13.5M20 18L21 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="callRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 16px' }" />
            <motion.path d="M4 14L3 13.5M4 18L3 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="callLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 16px' }" />
          </svg>
        </div>
</template>
