<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ValidationApprovalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the stamp presses down and the tick writes in
// authored from scripts/authored
const stampVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tickVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.2,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <motion.path d="M18.0003 18.5L18.2777 17.1138C18.4244 16.3806 18.8164 15.7048 18.9562 14.9703C18.9852 14.818 19.0003 14.6608 19.0003 14.5C19.0003 13.1193 17.881 12 16.5003 12C15.1196 12 14.0003 13.1193 14.0003 14.5C14.0003 14.6608 14.0155 14.818 14.0445 14.9703C14.1843 15.7048 14.5763 16.3806 14.723 17.1138L15.0003 18.5M18.0003 18.5H15.0003M18.0003 18.5L20.4966 19.1659C21.375 19.3611 22 20.1402 22 21.0401C22 21.5702 21.5702 22 21.0401 22H20.4966H12.5H11.9599C11.4298 22 11 21.5702 11 21.0401C11 20.1402 11.625 19.3611 12.5034 19.1659L15.0003 18.5" stroke="currentColor" stroke-width="1.5" :variants="stampVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 17px' }" />
            <path d="M17 9V8C17 5.17157 17 3.75736 16.1213 2.87868C15.2426 2 13.8284 2 11 2H8C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M7 8.66667C7 8.66667 7.625 8.66667 8.25 10C8.25 10 10.2353 6.66667 12 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M6 14H10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6 17H10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
