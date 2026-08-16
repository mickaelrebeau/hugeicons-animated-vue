<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BeltIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the belt separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.53px, -1.32px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.88px) rotate(-1.1deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
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
            <motion.path d="M16 8H22M16 16L22 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12px' }" />
            <motion.path d="M6 16C6 16.9319 6 17.3978 6.15224 17.7654C6.35523 18.2554 6.74458 18.6448 7.23463 18.8478C7.60218 19 8.06812 19 9 19H9.33333C11.8256 19 13.0718 19 14 18.4641C14.6081 18.113 15.113 17.6081 15.4641 17C16 16.0718 16 14.8256 16 12.3333V11.6667C16 9.17436 16 7.9282 15.4641 7C15.113 6.39192 14.6081 5.88697 14 5.5359C13.0718 5 11.8256 5 9.33333 5H9C8.06812 5 7.60218 5 7.23463 5.15224C6.74458 5.35523 6.35523 5.74458 6.15224 6.23463C6 6.60218 6 7.06812 6 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M2 16H9C10.4142 16 11.1213 16 11.5607 15.5607C12 15.1213 12 14.4142 12 13V11C12 9.58579 12 8.87868 11.5607 8.43934C11.1213 8 10.4142 8 9 8H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M9 12H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.25px 12px' }" />
            <motion.path d="M20.127 12H20.002M20.252 12C20.252 12.1381 20.14 12.25 20.002 12.25C19.8639 12.25 19.752 12.1381 19.752 12C19.752 11.8619 19.8639 11.75 20.002 11.75C20.14 11.75 20.252 11.8619 20.252 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12px' }" />
            <motion.path d="M4.12695 12H4.00195M4.25195 12C4.25195 12.1381 4.14002 12.25 4.00195 12.25C3.86388 12.25 3.75195 12.1381 3.75195 12C3.75195 11.8619 3.86388 11.75 4.00195 11.75C4.14002 11.75 4.25195 11.8619 4.25195 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
          </svg>
        </div>
</template>
