<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Home10Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the front gable hops and the roof line redraws
// authored from scripts/authored
const gableVariants: Variants = {
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

const ridgeVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
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
            <motion.path d="M8.9412 6.34883L10.7549 8.90093C11.1244 9.42085 11.3092 9.68081 11.4046 9.98004C11.5 10.2793 11.5 10.5987 11.5 11.2377V20H5.5C3.61438 20 2.67157 20 2.08579 19.4112C1.5 18.8225 1.5 17.8749 1.5 15.9797V11.2377C1.5 10.5987 1.5 10.2793 1.59541 9.98004C1.69082 9.68081 1.87557 9.42085 2.24507 8.90093L4.0588 6.34883C5.17165 4.78294 5.72807 4 6.5 4C7.27193 4 7.82835 4.78294 8.9412 6.34883Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="gableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 12px' }" />
            <motion.path d="M8.5 20V16C8.5 15.2523 8.5 14.8785 8.33923 14.6C8.23391 14.4176 8.08242 14.2661 7.9 14.1608C7.62154 14 7.24769 14 6.5 14C5.75231 14 5.37846 14 5.1 14.1608C4.91758 14.2661 4.76609 14.4176 4.66077 14.6C4.5 14.8785 4.5 15.2523 4.5 16V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="gableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17px' }" />
            <path d="M8.5 20H18.5C20.3856 20 21.3284 20 21.9142 19.4142C22.5 18.8284 22.5 17.8856 22.5 16V11.4482C22.5 10.7315 22.5 10.3732 22.3805 10.0432C22.2611 9.7133 22.0317 9.43802 21.5729 8.88746L18.6994 5.43926C18.1096 4.73152 17.8147 4.37764 17.4116 4.18882C17.0084 4 16.5478 4 15.6265 4H6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22 10H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ridgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
