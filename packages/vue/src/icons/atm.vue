<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AtmIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dollar prints on the still machine: the S rewrites, then both stems grow from the middle of the sign
// authored from scripts/authored
const cashSVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const stemsVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.22)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: {
      duration: 0.52,
      delay: 0.16,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M18 11C19.4001 11 20.1002 11 20.635 10.7275C21.1054 10.4878 21.4878 10.1054 21.7275 9.63498C22 9.1002 22 8.40013 22 7C22 5.59987 22 4.8998 21.7275 4.36502C21.4878 3.89462 21.1054 3.51217 20.635 3.27248C20.1002 3 19.4001 3 18 3H6C4.59987 3 3.8998 3 3.36502 3.27248C2.89462 3.51217 2.51217 3.89462 2.27248 4.36502C2 4.8998 2 5.59987 2 7C2 8.40013 2 9.1002 2.27248 9.63498C2.51217 10.1054 2.89462 10.4878 3.36502 10.7275C3.8998 11 4.59987 11 6 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M5 7H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 7H6V15C6 17.8284 6 19.2426 6.87868 20.1213C7.75736 21 9.17157 21 12 21C14.8284 21 16.2426 21 17.1213 20.1213C18 19.2426 18 17.8284 18 15V7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14 11.5H11C10.4477 11.5 10 11.9477 10 12.5V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 14.4477 14 15V15.5C14 16.0523 13.5523 16.5 13 16.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cashSVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M12 11.5V10M12 16.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
          </svg>
        </div>
</template>
