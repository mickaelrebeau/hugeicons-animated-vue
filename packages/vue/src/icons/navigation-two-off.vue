<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NavigationTwoOffIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after notification-off-01: the slash cuts through and the rest of the glyph recoils
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateY(0px)',
    opacity: 1,
  },
  animate: {
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.78deg) translateY(0.44px)', 'rotate(0deg) translateY(1.32px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.74,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2.01deg)', 'scale(1.08) rotate(0.8deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M10.0879 5.08785C10.7594 3.69594 11.2753 2.99999 12 3C13.0217 3.00001 13.6283 4.38332 14.8414 7.14995L16.9433 11.9433M8.54625 8.54625L5.88422 14.6171C4.33132 18.1585 3.55488 19.9292 4.26507 20.64C4.35562 20.7306 4.45766 20.8098 4.56877 20.8756C5.4402 21.3918 7.058 20.2738 10.2936 18.0379C11.0738 17.4987 11.464 17.2291 11.9067 17.2031C11.9689 17.1995 12.0312 17.1995 12.0934 17.2031C12.5362 17.2291 12.9263 17.4987 13.7066 18.0379C16.942 20.2738 18.5598 21.3917 19.4312 20.8755C19.5423 20.8097 19.6444 20.7305 19.735 20.6399C19.8937 20.481 19.9782 20.2691 19.9963 19.9963" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.78px 12.2px' }" />
            <motion.path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
