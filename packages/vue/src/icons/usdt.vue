<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UsdtIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the T hops and the ring around it flashes
// authored from scripts/authored
const waveVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.14, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <motion.path d="M13.5 9.02234C18.3113 9.16708 22 9.99738 22 11C22 12.1046 17.5228 13 12 13C6.47715 13 2 12.1046 2 11C2 9.99738 5.68874 9.16708 10.5 9.02234" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M13.5 10.4776V8C13.5 7.05719 13.5 6.58579 13.7929 6.29289C14.0858 6 14.5572 6 15.5 6H18C18.4659 6 18.6989 6 18.8827 5.92388C19.1277 5.82239 19.3224 5.62771 19.4239 5.38268C19.5 5.19891 19.5 4.96594 19.5 4.5C19.5 4.03406 19.5 3.80109 19.4239 3.61732C19.3224 3.37229 19.1277 3.17761 18.8827 3.07612C18.6989 3 18.4659 3 18 3H6C5.53406 3 5.30109 3 5.11732 3.07612C4.87229 3.17761 4.67761 3.37229 4.57612 3.61732C4.5 3.80109 4.5 4.03406 4.5 4.5C4.5 4.96594 4.5 5.19891 4.57612 5.38268C4.67761 5.62771 4.87229 5.82239 5.11732 5.92388C5.30109 6 5.53406 6 6 6H8.5C9.44281 6 9.91421 6 10.2071 6.29289C10.5 6.58579 10.5 7.05719 10.5 8V10.4776M13.5 12.9776V19.5C13.5 19.9659 13.5 20.1989 13.4239 20.3827C13.3224 20.6277 13.1277 20.8224 12.8827 20.9239C12.6989 21 12.4659 21 12 21C11.5341 21 11.3011 21 11.1173 20.9239C10.8723 20.8224 10.6776 20.6277 10.5761 20.3827C10.5 20.1989 10.5 19.9659 10.5 19.5V12.9776" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
