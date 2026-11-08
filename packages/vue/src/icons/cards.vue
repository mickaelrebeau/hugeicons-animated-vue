<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CardsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the back card is shuffled out to the side and tucked back as the diamond turns
// authored from scripts/authored
const frontVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.9px, 0.3px)',
      'translate(-0.9px, 0.3px)',
      'translate(0.1px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.56, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const suitVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-45deg) scale(0.7)',
      'rotate(95deg) scale(1.1)',
      'rotate(90deg) scale(1)',
    ],
    transition: { duration: 0.5, delay: 0.1, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const backVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(2.4px, 0.6px)',
      'translate(2.4px, 0.6px)',
      'translate(-0.2px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.3, 0.56, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M3 11C3 8.17157 3 6.75736 3.87868 5.87868C4.75736 5 6.17157 5 9 5H11C13.8284 5 15.2426 5 16.1213 5.87868C17 6.75736 17 8.17157 17 11V16C17 18.8284 17 20.2426 16.1213 21.1213C15.2426 22 13.8284 22 11 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16V11Z" stroke="currentColor" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 13.5px' }" />
            <motion.path d="M8.04435 11.762L8.42742 11.3048C9.15621 10.4349 9.52061 10 10 10C10.4794 10 10.8438 10.4349 11.5726 11.3048L11.9556 11.762C12.6519 12.593 13 13.0086 13 13.5C13 13.9914 12.6519 14.407 11.9556 15.238L11.5726 15.6952C10.8438 16.5651 10.4794 17 10 17C9.52061 17 9.15621 16.5651 8.42742 15.6952L8.04435 15.238C7.34812 14.407 7 13.9914 7 13.5C7 13.0086 7.34812 12.593 8.04435 11.762Z" stroke="currentColor" stroke-width="1.5" :variants="suitVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 13.5px' }" />
            <motion.path d="M16.9244 19C18.0202 18.3874 18.3929 17.0406 19.1383 14.3469L20.1925 10.5375C20.938 7.84378 21.3107 6.49694 20.678 5.4359C20.0453 4.37485 18.6543 4.01397 15.8724 3.2922L13.9052 2.78183C11.1232 2.06006 9.73225 1.69918 8.63642 2.31177C7.85623 2.74792 7.44258 3.55626 7 4.95786" stroke="currentColor" stroke-width="1.5" :variants="backVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.2px 10.3px' }" />
          </svg>
        </div>
</template>
