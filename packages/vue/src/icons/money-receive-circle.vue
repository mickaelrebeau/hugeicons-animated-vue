<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneyReceiveCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dollar rewrites as the arrow comes in
// authored from scripts/authored
const dollarVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.82,
      delay: 0.1,
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

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 1px)',
      'translate(0.15px, -0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <path d="M14 2.22179C13.3538 2.09076 12.6849 2.02197 12 2.02197C6.47715 2.02197 2 6.49421 2 12.011C2 17.5277 6.47715 22 12 22C17.5228 22 22 17.5277 22 12.011C22 11.3269 21.9311 10.6587 21.8 10.0132" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M12 9.01428C10.8954 9.01428 10 9.68512 10 10.5126C10 11.3401 10.8954 12.011 12 12.011C13.1046 12.011 14 12.6819 14 13.5093C14 14.3368 13.1046 15.0077 12 15.0077M12 9.01428C12.8708 9.01428 13.6116 9.43123 13.8862 10.0132M12 9.01428V8.01538M12 15.0077C11.1292 15.0077 10.3884 14.5908 10.1138 14.0088M12 15.0077V16.0066" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dollarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M21.9951 2L17.8193 6.17362M16.9951 2.52119L17.1133 5.60928C17.1133 6.33713 17.5484 6.79062 18.3409 6.84782L21.465 6.99451" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 4.5px' }" />
          </svg>
        </div>
</template>
