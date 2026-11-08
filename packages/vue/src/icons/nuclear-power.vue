<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NuclearPowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the trefoil spins around its core
// authored from scripts/authored
const coreVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
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

const trefoilVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(24deg)',
      'rotate(84deg)',
      'rotate(123.60000000000001deg)',
      'rotate(120deg)',
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
            <motion.path d="M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z" stroke="currentColor" stroke-width="1.5" :variants="coreVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M14.9111 8.43439L15.8552 6.65198C16.5358 5.36682 16.8762 4.72424 16.5862 4.02175C16.2963 3.31926 15.7303 3.16307 14.5984 2.8507C13.7693 2.62192 12.8984 2.5 12 2.5C11.1016 2.5 10.2307 2.62192 9.40163 2.8507C8.26967 3.16307 7.70368 3.31926 7.41376 4.02175C7.12384 4.72424 7.46418 5.36682 8.14485 6.65198L9.08888 8.43439M16.9973 12.6649H19.0632C20.5386 12.6649 21.2763 12.6649 21.73 13.3019C22.1838 13.9388 22.0038 14.5449 21.6438 15.7571C21.1143 17.5399 20.1389 19.1197 18.853 20.3559C17.9893 21.1862 17.5575 21.6013 16.8282 21.4789C16.0989 21.3565 15.7574 20.7117 15.0743 19.4221L13.8658 17.1403M10.1342 17.1403L8.92566 19.4221C8.24263 20.7117 7.90112 21.3565 7.17181 21.4789C6.44249 21.6013 6.01067 21.1862 5.14702 20.3559C3.86105 19.1197 2.88572 17.5399 2.35623 15.7571C1.99622 14.5449 1.81621 13.9388 2.26995 13.3019C2.72369 12.6649 3.46138 12.6649 4.93677 12.6649H7.00267" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="trefoilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
