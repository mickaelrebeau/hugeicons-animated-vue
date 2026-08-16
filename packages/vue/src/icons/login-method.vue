<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LoginMethodIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-01: the arrow gathers outside and enters through the opening
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.74px) scaleX(0.96)', 'translateX(-0.21px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.58,
      delay: 0.08,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-3.28px)', 'translateX(1.09px)', 'translateX(-0.33px)', 'translateX(0px)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M13.5 7H10.5C8.61438 7 7.67157 7 7.08579 7.58579C6.5 8.17157 6.5 9.11438 6.5 11V11.5C6.5 13.3856 6.5 14.3284 7.08579 14.9142C7.67157 15.5 8.61438 15.5 10.5 15.5H13.5C15.3856 15.5 16.3284 15.5 16.9142 14.9142C17.5 14.3284 17.5 13.3856 17.5 11.5V11C17.5 9.11438 17.5 8.17157 16.9142 7.58579C16.3284 7 15.3856 7 13.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 11.25px' }" />
            <motion.path d="M9 7V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <motion.path d="M13.5 19L10.5 22M10.5 19L13.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 20.5px' }" />
            <motion.path d="M21 19L18 22M18 19L21 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 20.5px' }" />
            <motion.path d="M6 19L3 22M3 19L6 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 20.5px' }" />
          </svg>
        </div>
</template>
