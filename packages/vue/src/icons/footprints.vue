<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FootprintsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the footprints separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.77px) rotate(-0.97deg)', 'translateY(0.44px) rotate(0.48deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.35px, -1.16px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M15.5 17H20M17.0192 6C19.5072 6 21 8 21 11C21 12.5022 20.7401 13.9522 20.4642 15.0312C20.2122 16.017 20.0362 17.0241 19.965 18.0394C19.8371 19.8655 19.2971 22 17.0192 22C14.6308 22 14.5312 19 15.5264 16.5C16.1931 14 14.0336 12.4 14.0336 10C13.8678 8.66667 14.2327 6 17.0192 6Z" stroke="currentColor" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.43px 14px' }" />
            <motion.path d="M8.5 13H4M6.98077 2C4.49279 2 3 4 3 7C3 8.50224 3.25994 9.95224 3.53576 11.0312C3.78776 12.017 3.9638 13.0241 4.03495 14.0394C4.16293 15.8655 4.70287 18 6.98077 18C9.36923 18 9.46875 15 8.47355 12.5C7.8069 10 9.96637 8.4 9.96637 6C10.1322 4.66667 9.76728 2 6.98077 2Z" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.57px 10px' }" />
          </svg>
        </div>
</template>
