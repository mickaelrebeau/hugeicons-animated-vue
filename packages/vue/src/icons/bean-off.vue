<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BeanOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slash draws through, the bean recoiling off the cut
// authored from scripts/authored
const beanVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, -0.6px)',
      'translate(0.3px, 0.2px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.08,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const slashVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M9.2995 9.2995C8.79739 9.8016 8.14777 10.1562 7.42494 10.289C4.49201 10.8277 2.55106 13.6421 3.08979 16.5751C3.62852 19.508 6.44296 21.4489 9.37589 20.9102C12.3036 20.3724 14.9183 18.9527 16.9355 16.9355M10.8427 5.84268C11.9228 3.83297 14.2104 2.65544 16.5751 3.08979C19.508 3.62852 21.4489 6.44296 20.9102 9.37589C20.5964 11.0842 19.9824 12.6859 19.1245 14.1245" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beanVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.1734 5.64062C11.9536 6.14654 12.5464 6.91691 12.8248 7.82477M5.64142 11.1726C6.35428 12.2719 7.5922 12.9992 8.99998 12.9992C10.1043 12.9992 11.1042 12.5516 11.828 11.828" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beanVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.2px 9.3px' }" />
            <motion.path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
