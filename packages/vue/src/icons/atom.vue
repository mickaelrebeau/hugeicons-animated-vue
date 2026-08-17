<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AtomIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the orbit arcs rewrite themselves around a still nucleus, then the three electrons catch the light
// authored from scripts/authored
const orbitsVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.84,
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
    },
  },
};

const electronsVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.5, delay: 0.28, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.77778 20.5C4.84996 19.0788 2.85799 16.2638 2.5 13.0416M16.2222 20.5C19.15 19.0788 21.142 16.2638 21.5 13.0416M5.87777 4.63781C9.37758 1.7874 14.4113 1.7874 17.9111 4.63781" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="orbitsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.1px' }" />
            <motion.path d="M12.125 21.25H12M3.125 8.5H3M21.125 8.5H21M12.25 21.25C12.25 21.3881 12.1381 21.5 12 21.5C11.8619 21.5 11.75 21.3881 11.75 21.25C11.75 21.1119 11.8619 21 12 21C12.1381 21 12.25 21.1119 12.25 21.25ZM3.25 8.5C3.25 8.63807 3.13807 8.75 3 8.75C2.86193 8.75 2.75 8.63807 2.75 8.5C2.75 8.36193 2.86193 8.25 3 8.25C3.13807 8.25 3.25 8.36193 3.25 8.5ZM21.25 8.5C21.25 8.63807 21.1381 8.75 21 8.75C20.8619 8.75 20.75 8.63807 20.75 8.5C20.75 8.36193 20.8619 8.25 21 8.25C21.1381 8.25 21.25 8.36193 21.25 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="electronsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.9px' }" />
          </svg>
        </div>
</template>
