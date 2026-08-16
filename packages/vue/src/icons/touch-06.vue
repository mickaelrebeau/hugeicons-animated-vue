<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Touch06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the touch point compresses and sends the response outward
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.84px) scaleX(0.9) scaleY(1.04)', 'translateX(2.09px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M7.60007 13.5448V8.97127M7.60007 8.97127V3.42684C7.60007 2.6052 8.31572 2.00208 9.15459 2.00208C9.99346 2.00208 10.6655 2.6052 10.6655 3.42684L10.7336 8.49948M7.60007 8.97127C6.25503 10.1651 4.78345 11.5469 4.58854 11.9333C3.68163 13.2854 3.75296 14.4972 5.29666 16.5676C6.2809 17.8877 7.4477 19.2329 7.52014 19.3028C8.32096 20.0758 8.10396 21.1214 8.10396 21.9981M10.7336 8.49948V11.0293M10.7336 8.49948C11.4501 7.65751 13.3752 7.95667 13.7789 9.67687M13.8154 11.0253V10.0224C13.8154 9.94337 13.8114 9.86406 13.8 9.78584M13.7789 9.67687C13.7806 9.68411 13.7823 9.69137 13.7839 9.69866C13.7904 9.72752 13.7957 9.75661 13.8 9.78584M13.7789 9.67687C13.7831 9.71192 13.7901 9.74825 13.8 9.78584M13.7789 9.67687C14.007 8.49948 16.7374 8.77017 16.8637 10.8788V12.0248M17.8439 21.9935V20.9544C17.883 19.7278 18.9213 19.3568 19.5381 18.0169C20.1618 16.7846 19.973 13.6551 19.973 12.1565C20 11.8011 19.7572 10.7667 18.6313 10.3754C18.2775 10.2076 17.482 9.96654 16.7971 10.449" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.68px 12px' }" />
          </svg>
        </div>
</template>
