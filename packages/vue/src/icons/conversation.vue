<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ConversationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two people nod in turn under their shared bubble
// authored from scripts/authored
const bubbleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const headVariants: Variants = {
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

const head2Variants: Variants = {
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
      delay: 0.16,
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
            <motion.path d="M6.99994 6V5C6.99994 3.58579 6.99994 2.87868 7.43928 2.43934C7.87862 2 8.58573 2 9.99994 2H13.9999C15.4142 2 16.1213 2 16.5606 2.43934C16.9999 2.87868 16.9999 3.58579 16.9999 5V6C16.9999 7.41421 16.9999 8.12132 16.5606 8.56066C16.1213 9 15.4142 9 13.9999 9H12.9999L9.99994 11V9C8.58573 9 7.87862 9 7.43928 8.56066C6.99994 8.12132 6.99994 7.41421 6.99994 6Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="bubbleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6.5px' }" />
            <path d="M3.59 18.7408C2.96122 19.162 1.31258 20.0221 2.31671 21.0983C2.80722 21.624 3.35352 22 4.04036 22H5.99997H7.95958C8.64642 22 9.19272 21.624 9.68323 21.0983C10.6874 20.0221 9.03872 19.162 8.40994 18.7408C6.93544 17.7531 5.0645 17.7531 3.59 18.7408Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M15.59 18.7408C14.9612 19.162 13.3126 20.0221 14.3167 21.0983C14.8072 21.624 15.3535 22 16.0404 22H18H19.9596C20.6464 22 21.1927 21.624 21.6832 21.0983C22.6874 20.0221 21.0387 19.162 20.4099 18.7408C18.9354 17.7531 17.0645 17.7531 15.59 18.7408Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M7.99997 13.5C7.99997 14.6046 7.10454 15.5 5.99997 15.5C4.8954 15.5 3.99997 14.6046 3.99997 13.5C3.99997 12.3954 4.8954 11.5 5.99997 11.5C7.10454 11.5 7.99997 12.3954 7.99997 13.5Z" stroke="currentColor" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 13.5px' }" />
            <motion.path d="M20 13.5C20 14.6046 19.1045 15.5 18 15.5C16.8954 15.5 16 14.6046 16 13.5C16 12.3954 16.8954 11.5 18 11.5C19.1045 11.5 20 12.3954 20 13.5Z" stroke="currentColor" stroke-width="1.5" :variants="head2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 13.5px' }" />
          </svg>
        </div>
</template>
