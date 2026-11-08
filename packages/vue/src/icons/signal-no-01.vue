<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SignalNo01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the antenna pings and the X redraws
// authored from scripts/authored
const antennaVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.95)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const xVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.14,
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
            <path d="M5 10L5 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M5.80844 9.28111C5.43534 9.76037 5.2488 10 5 10C4.7512 10 4.56466 9.76037 4.19156 9.28112L3.44578 8.32312C2.37255 6.94451 1.83594 6.25521 2.04429 5.68812C2.06552 5.63034 2.0916 5.57458 2.12224 5.52145C2.423 5 3.282 5 5 5C6.718 5 7.577 5 7.87776 5.52145C7.9084 5.57458 7.93448 5.63034 7.95571 5.68812C8.16406 6.25521 7.62745 6.94451 6.55422 8.32312L5.80844 9.28111Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="antennaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 7.5px' }" />
            <motion.path d="M18.4297 9L12.4297 15M18.4297 15L12.4297 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M8 19L9 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M16 19L17 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M20 19L21 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
