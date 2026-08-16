<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HomeWifiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the house gives a welcoming hop and lands on its foundation
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.99px)', 'translateY(0px)'],
    transition: {
      duration: 0.49,
      ease: 'easeInOut',
      times: [0, 0.35, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: ['hidden', 'visible'],
    transition: {
      duration: 0.41,
      ease: 'easeOut',
      delay: 0.2,
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
            <motion.path d="M3 12.4896V15C3 18.2998 3 19.9497 4.02513 20.9749C5.05025 22 6.70017 22 10 22H14C17.2998 22 18.9497 22 19.9749 20.9749C21 19.9497 21 18.2998 21 15V12.4896C21 10.8083 21 9.96773 20.6441 9.24005C20.2882 8.51237 19.6247 7.99628 18.2976 6.96411L16.2976 5.40855C14.2331 3.80285 13.2009 3 12 3C10.7991 3 9.76689 3.80285 7.70242 5.40855L5.70241 6.96411C4.37533 7.99628 3.71179 8.51237 3.3559 9.24005C3 9.96773 3 10.8083 3 12.4896Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M9.5 14.8647C10.2106 14.2981 11.0929 13.9904 12.0018 13.9922C12.9106 13.994 13.7917 14.3053 14.5 14.8747M12 18H12.01M7 11.755C8.4189 10.619 10.1824 10 12 10C13.8176 10 15.5811 10.619 17 11.755" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
          </svg>
        </div>
</template>
