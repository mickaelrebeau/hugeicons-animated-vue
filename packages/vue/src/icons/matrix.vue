<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MatrixIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after more-horizontal: the repeated points of the matrix answer in spatial order
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.85px) rotate(-2.18deg)', 'translateY(0.44px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.64px) scale(1.2)', 'translateY(0.38px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.44, ease: 'easeOut', delay: i * 0.08 },
  }),
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
            <motion.path d="M17.725 2.5C19.1145 2.65381 20.0498 3.00143 20.7479 3.78705C22 5.19617 22 7.46411 22 12C22 16.5359 22 18.8038 20.7479 20.213C20.0498 20.9986 19.1145 21.3462 17.725 21.5M6.27501 21.5C4.88551 21.3462 3.95021 20.9986 3.25212 20.213C2 18.8038 2 16.5359 2 12C2 7.46411 2 5.19617 3.25212 3.78705C3.95021 3.00143 4.88551 2.65381 6.27501 2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.125 8H12M12.25 8C12.25 8.13807 12.1381 8.25 12 8.25C11.8619 8.25 11.75 8.13807 11.75 8C11.75 7.86193 11.8619 7.75 12 7.75C12.1381 7.75 12.25 7.86193 12.25 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M12.125 12H12M12.25 12C12.25 12.1381 12.1381 12.25 12 12.25C11.8619 12.25 11.75 12.1381 11.75 12C11.75 11.8619 11.8619 11.75 12 11.75C12.1381 11.75 12.25 11.8619 12.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.125 16H12M12.25 16C12.25 16.1381 12.1381 16.25 12 16.25C11.8619 16.25 11.75 16.1381 11.75 16C11.75 15.8619 11.8619 15.75 12 15.75C12.1381 15.75 12.25 15.8619 12.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M7.125 8H7M7.25 8C7.25 8.13807 7.13807 8.25 7 8.25C6.86193 8.25 6.75 8.13807 6.75 8C6.75 7.86193 6.86193 7.75 7 7.75C7.13807 7.75 7.25 7.86193 7.25 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 8px' }" />
            <motion.path d="M7.125 12H7M7.25 12C7.25 12.1381 7.13807 12.25 7 12.25C6.86193 12.25 6.75 12.1381 6.75 12C6.75 11.8619 6.86193 11.75 7 11.75C7.13807 11.75 7.25 11.8619 7.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M7.125 16H7M7.25 16C7.25 16.1381 7.13807 16.25 7 16.25C6.86193 16.25 6.75 16.1381 6.75 16C6.75 15.8619 6.86193 15.75 7 15.75C7.13807 15.75 7.25 15.8619 7.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 16px' }" />
            <motion.path d="M17.125 8H17M17.25 8C17.25 8.13807 17.1381 8.25 17 8.25C16.8619 8.25 16.75 8.13807 16.75 8C16.75 7.86193 16.8619 7.75 17 7.75C17.1381 7.75 17.25 7.86193 17.25 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="6" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 8px' }" />
            <motion.path d="M17.125 12H17M17.25 12C17.25 12.1381 17.1381 12.25 17 12.25C16.8619 12.25 16.75 12.1381 16.75 12C16.75 11.8619 16.8619 11.75 17 11.75C17.1381 11.75 17.25 11.8619 17.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="7" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
            <motion.path d="M17.125 16H17M17.25 16C17.25 16.1381 17.1381 16.25 17 16.25C16.8619 16.25 16.75 16.1381 16.75 16C16.75 15.8619 16.8619 15.75 17 15.75C17.1381 15.75 17.25 15.8619 17.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="8" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 16px' }" />
          </svg>
        </div>
</template>
