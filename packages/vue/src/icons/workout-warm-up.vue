<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkoutWarmUpIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the leg kicks forward as the body sways
// authored from scripts/authored
const hopVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.5px)',
      'translate(0px, 0.07px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.1,
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

const bodyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.34px, 0.01px) rotate(3deg)',
      'translate(-0.24px, 0.00px) rotate(-2.0999999999999996deg)',
      'translate(0.10px, 0.00px) rotate(0.8999999999999999deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const legVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.50px, -0.87px) rotate(18deg)',
      'translate(0.50px, 0.50px) rotate(-12.6deg)',
      'translate(-0.18px, -0.24px) rotate(5.3999999999999995deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M14.5002 4.5C14.5002 5.32843 13.8286 6 13.0002 6C12.1717 6 11.5002 5.32843 11.5002 4.5C11.5002 3.67157 12.1717 3 13.0002 3C13.8286 3 14.5002 3.67157 14.5002 4.5Z" stroke="currentColor" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 4.5px' }" />
            <motion.path d="M19 8.89062L13.9777 8.29142M19 21L18.5438 17.5301C18.2903 15.6021 18.1636 14.6381 17.4915 14.1298C16.8194 13.6215 15.8722 13.7731 13.9777 14.0765L12.1402 14.3707M13.9777 8.29142L12.2231 8.08208C11.4204 7.98631 11.0191 7.93843 10.7146 8.14419C10.41 8.34995 10.299 8.74397 10.077 9.53203L9.4087 11.904C9.02319 13.2724 8.83044 13.9565 9.19196 14.3707C9.55348 14.7849 10.2465 14.674 11.6326 14.452L12.1402 14.3707M13.9777 8.29142L12.1402 14.3707" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.9px 14.5px' }" />
            <motion.path d="M10 17L9.44721 18.1056C9.15692 18.6862 8.68616 19.1569 8.10557 19.4472L5 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 19px' }" />
          </svg>
        </div>
</template>
