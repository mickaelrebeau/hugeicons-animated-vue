<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AppleNewsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the folded corner peels, then the two sheets settle back into the N
// authored from scripts/authored
const foldBLVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(2deg)', 'rotate(0deg)'],
    transition: { duration: 0.58, delay: 0.08, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const foldTRVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(8deg)', 'rotate(-2deg)', 'rotate(0deg)'],
    transition: { duration: 0.58, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2.5 19.6581V15.0065C2.5 14.2973 2.5 13.9426 2.6313 13.9033C2.76259 13.8639 2.9637 14.1693 3.36592 14.7799C4.75816 16.8937 7.10621 19.2417 9.21998 20.634C9.83065 21.0362 10.136 21.2373 10.0966 21.3686C10.0573 21.4999 9.70263 21.4999 8.99336 21.4999H4.34177C3.47355 21.4999 3.03944 21.4999 2.76972 21.2302C2.5 20.9605 2.5 20.5264 2.5 19.6581Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="foldBLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.3px 17.7px' }" />
            <motion.path d="M21.5004 4.34177V8.99336C21.5004 9.70263 21.5004 10.0573 21.3691 10.0966C21.2378 10.136 21.0367 9.83065 20.6345 9.21998C19.2422 7.10621 16.8942 4.75816 14.7804 3.36592C14.1697 2.9637 13.8644 2.76259 13.9038 2.6313C13.9431 2.5 14.2978 2.5 15.007 2.5H19.6586C20.5268 2.5 20.9609 2.5 21.2307 2.76972C21.5004 3.03944 21.5004 3.47355 21.5004 4.34177Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="foldTRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.7px 6.3px' }" />
            <motion.path d="M2.5 4.4V6.62599C2.5 7.40261 2.5 7.79093 2.64463 8.14009C2.78926 8.48926 3.06384 8.76384 3.61299 9.31299L14.687 20.387C15.2362 20.9362 15.5107 21.2107 15.8599 21.3554C16.2091 21.5 16.5974 21.5 17.374 21.5H19.6C20.4957 21.5 20.9435 21.5 21.2218 21.2218C21.5 20.9435 21.5 20.4957 21.5 19.6V17.374C21.5 16.5974 21.5 16.2091 21.3554 15.8599C21.2107 15.5107 20.9362 15.2362 20.387 14.687L9.31299 3.61299C8.76384 3.06384 8.48926 2.78926 8.14009 2.64463C7.79093 2.5 7.40261 2.5 6.62599 2.5H4.4C3.50433 2.5 3.0565 2.5 2.77825 2.77825C2.5 3.0565 2.5 3.50433 2.5 4.4Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
