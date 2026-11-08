<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SchoolBell02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand bell swings and the sound arcs flash
// authored from scripts/authored
const bellVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.27px, -1.48px) rotate(10deg)',
      'translate(1.03px, 0.89px) rotate(-7deg)',
      'translate(-0.41px, -0.42px) rotate(3deg)',
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

const soundVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.12, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const bell2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.00px, 0.03px) rotate(10deg)',
      'translate(-0.00px, -0.02px) rotate(-7deg)',
      'translate(-0.00px, 0.01px) rotate(3deg)',
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

const bell3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.79px, -2.10px) rotate(10deg)',
      'translate(1.46px, 1.27px) rotate(-7deg)',
      'translate(-0.58px, -0.60px) rotate(3deg)',
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
            <motion.path d="M7.53206 10.7812L7.45047 10.9004C6.66553 12.0476 5.36503 12.7336 3.97498 12.7336H3.88C3.09757 12.7336 2.70573 13.6796 3.25899 14.2328L9.76716 20.741C10.3204 21.2943 11.2664 20.9024 11.2664 20.12V20.025C11.2664 18.635 11.9524 17.3345 13.0996 16.5495L13.2188 16.4679C15.333 15.0214 15.6129 12.0098 13.8015 10.1985C11.9902 8.38708 8.9786 8.66698 7.53206 10.7812Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.2px 14.8px' }" />
            <motion.path d="M19 17C18.8181 17.9846 18.3439 18.9124 17.5729 19.6565C16.8473 20.3569 15.9531 20.8035 15 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="soundVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19px' }" />
            <motion.path d="M7 5C6.03843 5.20541 5.13629 5.67226 4.40427 6.40427C3.67226 7.13629 3.20541 8.03842 3 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="soundVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 7px' }" />
            <motion.path d="M13 8.80238L16.8892 3.87603C17.7435 2.79398 19.3506 2.69977 20.3254 3.67459C21.3002 4.64942 21.206 6.25653 20.124 7.11077L15.1976 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bell2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.2px 6.8px' }" />
            <motion.path d="M8 19.3137C7.08494 20.2288 5.60135 20.2288 4.68629 19.3137C3.77124 18.3987 3.77124 16.9151 4.68629 16" stroke="currentColor" stroke-width="1.5" :variants="bell3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.9px 18.1px' }" />
          </svg>
        </div>
</template>
