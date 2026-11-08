<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WomanIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the head bobs and the dress sways
// authored from scripts/authored
const hopVariants: Variants = {
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

const dressVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.35px, -0.01px) rotate(3deg)',
      'translate(0.25px, -0.00px) rotate(-2.0999999999999996deg)',
      'translate(-0.11px, -0.00px) rotate(0.8999999999999999deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.06,
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
            <motion.path d="M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M10.0002 16V20C10.0002 20.9428 10.0002 21.4142 10.2931 21.7071C10.586 22 11.0574 22 12.0002 22C12.943 22 13.4144 22 13.7073 21.7071C14.0002 21.4142 14.0002 20.9428 14.0002 20V16L14.2603 16.0007C15.8127 16.0005 16.5889 16.0004 16.8927 15.5149C17.1965 15.0295 16.8312 14.3728 16.1007 13.0595L14.3008 9.82358C13.8476 9.00874 12.9628 8.49982 11.9996 8.5C11.0368 8.50018 10.1525 9.00901 9.69941 9.82351L7.89935 13.0595C7.1688 14.3728 6.80353 15.0294 7.10731 15.5149C7.41109 16.0004 8.1873 16.0005 9.73972 16.0007L10.0002 16Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="dressVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.2px' }" />
          </svg>
        </div>
</template>
