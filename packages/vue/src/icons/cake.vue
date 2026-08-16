<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CakeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the cake lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.84px) rotate(-1.05deg)', 'translateY(0.47px) rotate(0.53deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.48,
      delay: 0.12,
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
            <motion.path d="M4 14.3477C5.5 14.3477 6.5 15.3477 8 15.3477C9.5 15.3477 10.5 14.3477 12 14.3477C13.5 14.3477 14.5 15.3477 16 15.3477C17.5 15.3477 18.5 14.3477 20 14.3477" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.85px' }" />
            <motion.path d="M4 16.3477V21.3477H20V16.3477C20 13.5192 20 12.105 19.1213 11.2263C18.2426 10.3477 16.8284 10.3477 14 10.3477H10C7.17157 10.3477 5.75736 10.3477 4.87868 11.2263C4 12.105 4 13.5192 4 16.3477Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.85px' }" />
            <motion.path d="M2 21.3477H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 21.35px' }" />
            <motion.path d="M12 10.3477V7.34766" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.85px' }" />
            <motion.path d="M12 7.34746C13.1046 7.34746 14 6.45203 14 5.34746C14 4.63933 13.5543 3.93121 13.0837 3.3809C12.6683 2.8952 12.4606 2.65234 12 2.65234C11.5394 2.65234 11.3317 2.8952 10.9163 3.3809C10.4457 3.93121 10 4.63933 10 5.34746C10 6.45203 10.8954 7.34746 12 7.34746Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
          </svg>
        </div>
</template>
