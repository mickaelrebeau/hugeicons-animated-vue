<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cards02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// a card is drawn up from behind and slipped back while the heart beats
// authored from scripts/authored
const drawnVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, -2.4px)',
      'translate(0.8px, -2.4px)',
      'translate(-0.1px, 0.2px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.32, 0.56, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const heartVariants: Variants = {
  normal: { transform: 'scale(1, 1)' },
  animate: {
    transform: ['scale(1, 1)', 'scale(1.24, 0.82)', 'scale(0.9, 1.16)', 'scale(1.05, 0.96)', 'scale(1, 1)'],
    transition: { duration: 0.64, delay: 0.2, times: [0, 0.18, 0.4, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M3 11C3 8.17157 3 6.75736 3.87868 5.87868C4.75736 5 6.17157 5 9 5H11C13.8284 5 15.2426 5 16.1213 5.87868C17 6.75736 17 8.17157 17 11V16C17 18.8284 17 20.2426 16.1213 21.1213C15.2426 22 13.8284 22 11 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V11Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M16.9244 19C18.0202 18.3874 18.3929 17.0406 19.1383 14.3469L20.1925 10.5375C20.938 7.84378 21.3107 6.49694 20.678 5.4359C20.0453 4.37485 18.6543 4.01397 15.8724 3.2922L13.9052 2.78183C11.1232 2.06006 9.73225 1.69918 8.63642 2.31177C7.85623 2.74792 7.44258 3.55626 7 4.95786" stroke="currentColor" stroke-width="1.5" :variants="drawnVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.2px 10.3px' }" />
            <motion.path d="M7.76123 11.2762C8.56573 10.8192 9.26789 11.0034 9.68969 11.2967C9.86265 11.4169 9.94912 11.4771 10 11.4771C10.0509 11.4771 10.1374 11.4169 10.3103 11.2967C10.7321 11.0034 11.4343 10.8192 12.2388 11.2762C13.2946 11.8758 13.5335 13.8541 11.0981 15.5232C10.6343 15.8411 10.4024 16 10 16C9.59764 16 9.36572 15.8411 8.90186 15.5232C6.46652 13.8541 6.70542 11.8758 7.76123 11.2762Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 13.4px' }" />
          </svg>
        </div>
</template>
