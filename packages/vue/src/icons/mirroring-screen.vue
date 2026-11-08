<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MirroringScreenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cast arcs broadcast to the screen
// authored from scripts/authored
const waveVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const screenVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.2,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M4 21C4 19.8954 3.10457 19 2 19M8 21C8 17.6863 5.31371 15 2 15M12 21C12 15.4772 7.52285 11 2 11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="waveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 20px' }" />
            <motion.path d="M3 8.00027C3.0779 6.12787 3.32904 4.97985 4.1387 4.17164C5.31244 3 7.20153 3 10.9797 3H13.9853C17.7634 3 19.6525 3 20.8263 4.17164C22 5.34327 22 7.229 22 11.0004V12.0005C22 15.7719 22 17.6577 20.8263 18.8293C19.7612 19.8924 18.1071 19.9909 14.9871 20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="screenVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
