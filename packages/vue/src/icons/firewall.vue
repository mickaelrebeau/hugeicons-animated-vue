<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FirewallIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame flickers over the brick wall
// authored from scripts/authored
const wallVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
      'translate(0px, -0.36px) scaleY(1.08) skewX(-4deg)',
      'translate(0px, 0.27px) scaleY(0.94) skewX(3deg)',
      'translate(0px, -0.23px) scaleY(1.05) skewX(-2deg)',
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <motion.path d="M19 14H5C3.58579 14 2.87868 14 2.43934 14.4393C2 14.8787 2 15.5858 2 17V19C2 20.4142 2 21.1213 2.43934 21.5607C2.87868 22 3.58579 22 5 22H19C20.4142 22 21.1213 22 21.5607 21.5607C22 21.1213 22 20.4142 22 19V17C22 15.5858 22 14.8787 21.5607 14.4393C21.1213 14 20.4142 14 19 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wallVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <path d="M2 18H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 18L12 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7 22L7 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17 22L17 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18.8412 11C18.5539 9.80598 17.8362 8.63931 16.3747 7.6C12.4372 4.8 11.9997 2 11.9997 2C11.9997 2 7.93797 5.6 10.2497 10C8.14967 10.32 7.17231 8 6.94613 6.8C5.97628 8.08998 5.20609 9.53564 5.03516 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 6.5px' }" />
          </svg>
        </div>
</template>
