<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WaitersIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the waiters separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.86px) rotate(-1.07deg)', 'translateY(0.48px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.5px, -1.29px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.54,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M16.5 21V15.5C16.5 15.0353 16.5 14.803 16.4616 14.6098C16.3038 13.8164 15.6836 13.1962 14.8902 13.0384C14.697 13 14 13 14 13C13.5 17.9993 9.5 19 9.5 19C9.5 19 5.5 18 5 13C5 13 4.30302 13 4.10982 13.0384C3.31644 13.1962 2.69624 13.8164 2.53843 14.6098C2.5 14.803 2.5 15.0353 2.5 15.5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 17px' }" />
            <motion.path d="M9.5 13.4998L11.5 12.4998V14.4998L9.5 13.4998ZM9.5 13.4998L7.5 12.5V14.5L9.5 13.4998Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 13.5px' }" />
            <motion.path d="M12.5 6.9375V6.0625C12.5 4.37113 11.1569 3 9.5 3C7.84315 3 6.5 4.37113 6.5 6.0625V6.9375C6.5 8.62887 7.84315 10 9.5 10C11.1569 10 12.5 8.62887 12.5 6.9375Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 6.5px' }" />
            <motion.path d="M21.5 21V15.5C21.5 15.0353 21.5 14.803 21.4616 14.6098C21.3038 13.8164 20.6836 13.1962 19.8902 13.0384C19.697 13 19.4647 13 19 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.25px 17px' }" />
            <motion.path d="M14.5 3.17426C14.8128 3.06141 15.1494 3 15.5 3C17.1569 3 18.5 4.37113 18.5 6.0625V6.9375C18.5 8.62887 17.1569 10 15.5 10C15.1494 10 14.8128 9.93859 14.5 9.82574" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 6.5px' }" />
          </svg>
        </div>
</template>
