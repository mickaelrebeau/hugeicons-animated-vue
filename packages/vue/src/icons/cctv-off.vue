<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CctvOffIcon' })

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
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-1.99deg)', 'scale(1.08) rotate(0.8deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.51,
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
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.71deg) translateY(0.44px)', 'rotate(0deg) translateY(1.31px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.73,
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
            <motion.path d="M8.08665 13.5V15C8.08665 16.8856 8.08665 17.8284 7.49072 18.4142C6.89478 19 5.93563 19 4.01733 19H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.54px 16.25px' }" />
            <motion.path d="M3 17V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 19px' }" />
            <motion.path d="M8 3C8.27336 3.09886 8.57042 3.21 8.89516 3.33149L17.6375 6.60223C19.1243 7.15852 19.8678 7.43666 19.9852 8.04464C20.1026 8.65262 19.5187 9.20029 18.3507 10.2956L16.5335 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.05px 7.5px' }" />
            <motion.path d="M4.61554 5C4.48179 5.35097 4.33952 5.75274 4.17734 6.21075L3.77687 7.34171C3.1182 9.20182 2.78887 10.1319 3.14701 10.9202C3.50515 11.7085 4.41112 12.0476 6.22308 12.726L10.8152 14.4451C11.9522 14.8708 12.5208 15.0836 13.0826 14.9695C13.3921 14.9066 13.6666 14.7512 14 14.4842" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.39px 10.04px' }" />
            <motion.path d="M20.5859 12.25C20.972 12.7236 21.1138 13.4084 20.9016 14.0466L20.6321 14.8572C20.5817 15.0085 20.5387 15.1378 20.5002 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.81px 13.75px' }" />
            <motion.path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
