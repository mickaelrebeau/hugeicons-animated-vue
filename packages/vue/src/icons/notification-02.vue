<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Notification02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bell rings over its rim
// authored from scripts/authored
const bellVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.89px, -0.23px) rotate(14deg)',
      'translate(1.35px, -0.12px) rotate(-10deg)',
      'translate(-0.68px, -0.03px) rotate(5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut' },
  },
};

const clapperVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0.8px, 0px)',
      'translate(-0.4px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.8, delay: 0.04, times: [0, 0.2, 0.45, 0.7, 1], ease: 'easeInOut' },
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
            <motion.path d="M19 18V9.5C19 5.63401 15.866 2.5 12 2.5C8.13401 2.5 5 5.63401 5 9.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.3px' }" />
            <path d="M20.5 18H3.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13.5 20C13.5 20.8284 12.8284 21.5 12 21.5M10.5 20C10.5 20.8284 11.1716 21.5 12 21.5M12 21.5V20" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="clapperVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.8px' }" />
          </svg>
        </div>
</template>
