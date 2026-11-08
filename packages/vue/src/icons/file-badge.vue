<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileBadgeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the award badge pops and its ribbon swings
// authored from scripts/authored
const badgeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const ribbonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.49px, -0.04px) rotate(10deg)',
      'translate(0.29px, -0.02px) rotate(-6deg)',
      'translate(-0.10px, -0.00px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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
            <path d="M12.9983 2.50022V3.00043C12.9983 5.83009 12.9983 7.24492 13.8772 8.12398C14.7561 9.00304 16.1707 9.00304 18.9998 9.00304H19.4999M4 8.00261C4.01954 5.69979 4.13999 4.41108 4.8825 3.48998C5.06155 3.26787 5.26383 3.06554 5.4859 2.88646C6.58513 2 8.20803 2 11.4538 2C12.1595 2 12.5124 2 12.8355 2.11406C12.9027 2.13778 12.9686 2.16508 13.0329 2.19583C13.342 2.3437 13.5915 2.59325 14.0905 3.09236L18.8282 7.83096C19.4063 8.40927 19.6954 8.69843 19.8477 9.06613C20 9.43383 20 9.84276 20 10.6606V14.0052C20 17.7781 20 19.6645 18.8281 20.8366C17.8848 21.7801 16.4787 21.9641 13.9986 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 14C10 15.6569 8.65685 17 7 17C5.34315 17 4 15.6569 4 14C4 12.3431 5.34315 11 7 11C8.65685 11 10 12.3431 10 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
            <motion.path d="M4.99999 16.5L4.13292 21.2689C4.06371 21.6496 4.35617 22 4.7431 22C4.90759 22 5.06533 21.9347 5.18164 21.8184L6.99999 20L8.81834 21.8184C8.93465 21.9347 9.0924 22 9.25688 22C9.64382 22 9.93628 21.6496 9.86706 21.2689L8.99999 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ribbonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 19.3px' }" />
          </svg>
        </div>
</template>
