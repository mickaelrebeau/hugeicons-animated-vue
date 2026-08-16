<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BeefOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-off-01: the slash cuts through and the rest of the glyph recoils
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-1.91deg)', 'scale(1.08) rotate(0.76deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.49,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.37deg) translateY(0.42px)', 'rotate(0deg) translateY(1.26px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.71,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M10.0001 10C10.0001 11.1046 9.1047 12 8.00013 12C6.89556 12 6.00013 11.1046 6.00013 10C6.00013 8.89543 6.89556 8 8.00013 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 10px' }" />
            <motion.path d="M4.87633 4.87627C3.15139 5.93015 2.00007 7.83062 2.00007 10C2.00007 13.3137 4.68636 16 8.00007 16C9.05868 16 10.0533 15.7258 10.9167 15.2447C11.9804 14.6518 12.7239 14.1222 13.624 13.624M9.00007 4H18.0001C20.2092 4 22.0001 5.79086 22.0001 8C22.0001 10.2091 20.2318 11.442 18.0001 12C17.7214 12.0697 17.4582 12.1392 17.2089 12.2088" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M2.00019 10L2.00007 14C2.00007 17.3137 4.68636 20 8.00007 20C9.05868 20 10.0533 19.7258 10.9167 19.2447C12.8576 18.163 13.7323 17.2917 16.4376 16.4376M22.0001 8V12C22.0001 13.4265 21.2628 14.4459 20.1395 15.1394" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M2.00007 2L22.0001 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
