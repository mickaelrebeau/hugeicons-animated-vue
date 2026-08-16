<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NotificationBlock03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-03: the bell rings from its hanging point and decays naturally
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-13.71deg)', 'rotate(10.77deg)', 'rotate(-7.84deg)', 'rotate(4.9deg)', 'rotate(-1.96deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.87,
      ease: 'easeInOut',
      times: [0, 0.18, 0.38, 0.56, 0.72, 0.87, 1],
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
            <motion.path d="M19.5 19.0011L18.328 11.5M3.5 19.0011L5.15098 8.43407C5.63971 5.30601 8.33398 3 11.5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 3px' }" />
            <motion.path d="M19.5 19C19.5 17.3431 15.9183 16 11.5 16C7.08172 16 3.5 17.3431 3.5 19C3.5 20.6569 7.08172 22 11.5 22C15.9183 22 19.5 20.6569 19.5 19Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 3px' }" />
            <motion.path d="M12.5 19H10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 3px' }" />
            <motion.path d="M15 3.5L19 7.5M20.5 5.5C20.5 3.567 18.933 2 17 2C15.067 2 13.5 3.567 13.5 5.5C13.5 7.433 15.067 9 17 9C18.933 9 20.5 7.433 20.5 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 3px' }" />
          </svg>
        </div>
</template>
