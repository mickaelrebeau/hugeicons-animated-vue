<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SmartPhoneLandscape02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the phone tips onto its side and back
// authored from scripts/authored
const phoneVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-12deg)',
      'translate(0.00px, 0.00px) rotate(4deg)',
      'translate(0.00px, 0.00px) rotate(-1deg)',
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

const phone2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.10px, 1.99px) rotate(-12deg)',
      'translate(0.06px, -0.66px) rotate(4deg)',
      'translate(-0.01px, 0.17px) rotate(-1deg)',
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
            <motion.path d="M2.00018 10.5L2.00018 13.5C2.00018 15.857 2.00018 17.0355 2.73242 17.7678C3.46465 18.5 4.64316 18.5 7.00018 18.5H17.0002C19.3572 18.5 20.5357 18.5 21.268 17.7678C22.0002 17.0355 22.0002 15.857 22.0002 13.5V10.5C22.0002 8.14298 22.0002 6.96447 21.268 6.23223C20.5357 5.5 19.3572 5.5 17.0002 5.5L7.00018 5.5C4.64316 5.5 3.46465 5.5 2.73242 6.23223C2.00018 6.96447 2.00018 8.14298 2.00018 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="phoneVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M1.99994 9.5L1.99994 13.5L2.99994 13L2.99994 10L1.99994 9.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="phone2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.5px 11.5px' }" />
          </svg>
        </div>
</template>
