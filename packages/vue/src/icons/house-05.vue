<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'House05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the roof lifts and the chimney puffs
// authored from scripts/authored
const roofVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const puffVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0.2px, -1px) scale(1)',
      'translate(0.4px, -2px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <path d="M4 11H20V22H4V11Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14.5 22V19C14.5 18.0572 14.5 17.5858 14.2071 17.2929C13.9142 17 13.4428 17 12.5 17H11.5C10.5572 17 10.0858 17 9.79289 17.2929C9.5 17.5858 9.5 18.0572 9.5 19V22" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2 9.72254C2 9.14501 2.26952 8.68201 2.81725 8.49897L10.9302 5.78773C11.7893 5.50062 12 5.0255 12 4.18608C12 3.42891 11.8761 1.9173 13.0641 2.00228C13.3438 2.02229 13.6832 2.28692 14.3619 2.81619L21.439 8.33464C21.8381 8.64581 22 9.01714 22 9.53489C22 10.4781 21.6036 11 20.6848 11H3.14677C2.40983 11 2 10.4554 2 9.72254Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="roofVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <path d="M3 22H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7 15H8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M17 15L16 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M5 7.5L5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="roofVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 5.3px' }" />
            <motion.circle cx="5" cy="2" r="0.7" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puffVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
