<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WasteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lid lifts and the badge turns once
// authored from scripts/authored
const lidVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.18px)',
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

const badgeVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 0.86,
      delay: 0.06,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M3 5H8.42963C9.09834 5 9.7228 4.6658 10.0937 4.1094L10.9063 2.8906C11.2772 2.3342 11.9017 2 12.5704 2H17.0585C17.9193 2 18.6836 2.55086 18.9558 3.36754L19.5 5M21 5H8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
            <path d="M19.5 5L18.8803 14.906C18.8588 15.2333 18.8387 15.5385 18.8185 15.8235M4.5 5L5.10461 14.8966C5.25945 17.3107 5.33688 18.5177 5.97868 19.3857C6.296 19.8149 6.7048 20.1771 7.17905 20.4493C8.1383 21 9.42312 21 11.9927 21H14.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M20 19C20 17.3431 18.6569 16 17 16C15.3431 16 14 17.3431 14 19C14 20.6569 15.3431 22 17 22C18.6569 22 20 20.6569 20 19Z" stroke="currentColor" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19px' }" />
          </svg>
        </div>
</template>
