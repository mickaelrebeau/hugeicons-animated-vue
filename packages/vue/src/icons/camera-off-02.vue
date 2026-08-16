<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CameraOff02Icon' })

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
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.37deg) translateY(0.42px)', 'rotate(0deg) translateY(1.25px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.71,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

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
            <motion.path d="M5 9H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 9px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.4889 16.4889C15.9102 16.8144 15.2423 17 14.531 17C12.3219 17 10.531 15.2091 10.531 13C10.531 12.2887 10.7167 11.6208 11.0421 11.0421M13.2199 9.21983C13.6306 9.07739 14.0718 9 14.531 9C16.7401 9 18.531 10.7909 18.531 13C18.531 13.4592 18.4536 13.9004 18.3112 14.3111" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.53px 13px' }" />
            <motion.path d="M20.5 20.4983H8C5.17157 20.4983 3.75736 20.4983 2.87868 19.6196C2 18.7409 2 17.3267 2 14.4983V11.9983C2 9.16987 2 7.75566 2.87868 6.87698C3.51998 6.23568 4.44655 6.06243 6 6.01562" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.25px 13.26px' }" />
            <motion.path d="M22 18V8.02617C22 6.90715 21.0929 6 19.9738 6C19.3583 6 18.7762 5.72021 18.3917 5.23957L17.8 4.5C17.6049 4.25611 17.5073 4.13416 17.3979 4.03281C17.1031 3.75969 16.7328 3.58172 16.3354 3.52212C16.1879 3.5 16.0317 3.5 15.7194 3.5H13.9225C12.9779 3.5 12.5056 3.5 12.0949 3.69739C11.6842 3.89479 11.3891 4.2636 10.799 5.00122L10 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 10.75px' }" />
          </svg>
        </div>
</template>
