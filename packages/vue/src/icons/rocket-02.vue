<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Rocket02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after rocket-01: the rocket stretches, clears the pad, and a new one rises into the same slot
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.14px) scaleY(0.9)', 'translateY(-7.63px) scaleY(1.12)', 'translateY(-20.98px) scaleY(1.05)', 'translateY(15.25px) scaleY(0.92)', 'translateY(0px) scaleY(1)'],
    visibility: ['visible', 'visible', 'visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 1,
      times: [0, 0.16, 0.4, 0.52, 0.58, 1],
      ease: [
        'easeIn',
        'easeIn',
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="hidden">
            <motion.path d="M9.66667 7.7143V6.41327C9.66667 4.94834 10.2781 3.68557 11.179 2.62107C11.5294 2.20702 11.7046 2 12 2C12.2954 2 12.4706 2.20702 12.821 2.62107C13.7219 3.68557 14.3333 4.94834 14.3333 6.41327V7.7143C14.3333 8.78573 14.3333 9.09036 14.9807 9.559C15.4985 9.8919 16 10.2143 16 10.8598C16 11.6429 15.6667 12 14.9358 12H9.06415C8.33333 12 8 11.6429 8 10.8598C8 10.2143 8.50146 9.8919 9.01933 9.559C9.66667 9.09036 9.66667 8.78573 9.66667 7.7143Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.5 22C20.8807 22 22 20.8061 22 19.3333C22 17.8606 20.8807 16.6667 19.5 16.6667C19.5 15.1939 18.3807 14 17 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 22px' }" />
            <motion.path d="M4.5 22C3.11929 22 2 20.8061 2 19.3333C2 17.8606 3.11929 16.6667 4.5 16.6667C4.5 15.1939 5.61929 14 7 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 22px' }" />
            <motion.path d="M10 15V20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 20px' }" />
            <motion.path d="M14 15V17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 17px' }" />
          </svg>
        </div>
</template>
