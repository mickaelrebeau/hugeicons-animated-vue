<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RegexIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the asterisk turns a sixth and the dot pops
// authored from scripts/authored
const starVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(12deg)',
      'rotate(42deg)',
      'rotate(61.800000000000004deg)',
      'rotate(60deg)',
    ],
    transition: {
      duration: 0.66,
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

const dotVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.16,
      times: [0, 0.34, 0.66, 1],
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
            <motion.path d="M16.6626 3V13M20.9952 5.49567L12.335 10.4957M21.0002 10.4961L12.34 5.49609" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="starVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.7px 8px' }" />
            <motion.path d="M9.80959 15.3837C10 15.8221 10 16.3814 10 17.5C10 18.6186 10 19.1779 9.80959 19.6163C9.57739 20.1509 9.1509 20.5774 8.61632 20.8096C8.17795 21 7.61863 21 6.5 21C5.38137 21 4.82205 21 4.38368 20.8096C3.8491 20.5774 3.42261 20.1509 3.19041 19.6163C3 19.1779 3 18.6186 3 17.5C3 16.3814 3 15.8221 3.19041 15.3837C3.42261 14.8491 3.8491 14.4226 4.38368 14.1904C4.82205 14 5.38137 14 6.5 14C7.61863 14 8.17795 14 8.61632 14.1904C9.1509 14.4226 9.57739 14.8491 9.80959 15.3837Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17.5px' }" />
          </svg>
        </div>
</template>
