<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BulletproofVestIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the bulletproof vest separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.75px) rotate(-0.94deg)', 'translateY(0.42px) rotate(0.47deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.31px, -1.12px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M13.4975 2H10.5025C8.88452 2 8.07552 2 7.52387 2.48909C6.38066 3.50265 6.52582 6.17233 6.3215 7.63432C6.21198 8.41794 5.55547 9 4.78113 9C4.42436 9 4.11241 9.24911 4.02908 9.60373C3.32919 12.5822 1.93142 18.3709 4.41467 20.8575C5.55563 22 7.06507 22 10.0839 22H13.9161C16.9349 22 18.4444 22 19.5853 20.8575C22.0686 18.3709 20.6708 12.5822 19.9709 9.60372C19.8876 9.24911 19.5756 9 19.2189 9C18.4445 9 17.788 8.41793 17.6785 7.63431C17.4742 6.17232 17.6194 3.50267 16.4762 2.4891C15.9246 2 15.1156 2 13.4975 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5 14H3.5M5 18H3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.25px 16px' }" />
            <motion.path d="M20.5 14H19M20.5 18H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.75px 16px' }" />
            <motion.path d="M9.58056 13.5806C10.3546 12.8065 13.6454 12.8065 14.4194 13.5806C15.1935 14.3546 15.1935 17.6454 14.4194 18.4194C13.6454 19.1935 10.3546 19.1935 9.58056 18.4194C8.80648 17.6454 8.80648 14.3546 9.58056 13.5806Z" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M15 2C15 3.65685 13.6569 5 12 5C10.3431 5 9 3.65685 9 2" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
          </svg>
        </div>
</template>
