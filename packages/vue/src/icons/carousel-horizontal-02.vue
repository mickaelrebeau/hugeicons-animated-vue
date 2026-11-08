<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CarouselHorizontal02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the carousel swipes left: the slide slips aside and the next edge slides in
// authored from scripts/authored
const slideVariants: Variants = {
  normal: { transform: 'translateX(0px) scaleX(1)' },
  animate: {
    transform: [
      'translateX(0px) scaleX(1)',
      'translateX(-2.2px) scaleX(0.9)',
      'translateX(0.4px) scaleX(1.02)',
      'translateX(0px) scaleX(1)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.38, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const peekVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 1 },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.4px)', 'translateX(0px)'],
    opacity: [1, 0, 1],
    transition: {
      duration: 0.66,
      times: [0, 0.38, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const peek2Variants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.6px)', 'translateX(0px)'],
    transition: {
      duration: 0.66,
      times: [0, 0.38, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M13 4H11C8.64298 4 7.46447 4 6.73223 4.73223C6 5.46447 6 6.64298 6 9V15C6 17.357 6 18.5355 6.73223 19.2678C7.46447 20 8.64298 20 11 20H13C15.357 20 16.5355 20 17.2678 19.2678C18 18.5355 18 17.357 18 15V9C18 6.64298 18 5.46447 17.2678 4.73223C16.5355 4 15.357 4 13 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="slideVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 17.5C2.82843 17.5 3.5 16.8284 3.5 16V8C3.5 7.17157 2.82843 6.5 2 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="peekVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.8px 12px' }" />
            <motion.path d="M22 17.5C21.1716 17.5 20.5 16.8284 20.5 16V8C20.5 7.17157 21.1716 6.5 22 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="peek2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '21.3px 12px' }" />
          </svg>
        </div>
</template>
