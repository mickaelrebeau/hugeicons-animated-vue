<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Trolley02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the case is hoisted, held, and set back down
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.14px) scaleY(0.94)', 'translateY(-2.9px) scaleY(1.04)', 'translateY(-2.49px) scaleY(1)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.83,
      times: [0, 0.18, 0.5, 0.68, 1],
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
            <motion.path d="M3 2H4.30116C5.48672 2 6.0795 2 6.4814 2.37142C6.88331 2.74285 6.96165 3.36307 7.11834 4.60351L8.24573 13.5287C8.45464 15.1826 8.5591 16.0095 9.09497 16.5048C9.63085 17 10.4212 17 12.002 17H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
            <motion.circle cx="11.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
            <motion.circle cx="18.5" cy="19.5" r="1.5" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
            <motion.path d="M18 14H16C14.1144 14 13.1716 14 12.5858 13.4142C12 12.8284 12 11.8856 12 10V8C12 6.11438 12 5.17157 12.5858 4.58579C13.1716 4 14.1144 4 16 4H18C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8V10C22 11.8856 22 12.8284 21.4142 13.4142C20.8284 14 19.8856 14 18 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
            <motion.path d="M16.5 7L17.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
          </svg>
        </div>
</template>
