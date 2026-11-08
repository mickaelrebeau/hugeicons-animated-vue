<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TropicalStormTracks02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the storm spins as its track rewrites
// authored from scripts/authored
const stormVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(-72deg)',
      'rotate(-251.99999999999997deg)',
      'rotate(-370.8deg)',
      'rotate(-360deg)',
    ],
    transition: {
      duration: 0.9,
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

const eyeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const trackVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.66,
      delay: 0.1,
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
            <motion.path d="M12.1564 7.23099L11.2883 6.15969L14.2119 4.24954C4.58902 2.72954 3.15548 8.6394 3.09662 8.90429L3.09093 8.9298L3.08206 8.96494C2.87776 9.71974 2.85964 10.5136 3.02917 11.2825C3.1987 12.0514 3.55113 12.774 4.05808 13.3919L4.92616 14.4632L2 16.3749C11.6227 17.904 13.0587 11.9839 13.1177 11.7185L13.1234 11.693L13.1322 11.6579C13.3366 10.9031 13.3547 10.1093 13.1852 9.34036C13.0157 8.57144 12.6633 7.84892 12.1564 7.23099Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="stormVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.1px 10.3px' }" />
            <motion.circle cx="8.10593" cy="10.312" r="2.23093" stroke="currentColor" stroke-width="1.5" :variants="eyeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.1px 10.3px' }" />
            <motion.path d="M19.5 7V12.5C19.5 16.6421 16.1421 20 12 20M19.5 7C20.2002 7 21.5085 8.9943 22 9.5M19.5 7C18.7998 7 17.4915 8.9943 17 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trackVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
