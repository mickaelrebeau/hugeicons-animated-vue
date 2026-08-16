<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HousePlusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the existing shape makes room and the new mark stamps into place
// generated from @hugeicons/core-free-icons
const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-9.68deg) scale(0.82)', 'rotate(2.9deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.4,
      delay: 0.04,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.47,
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
            <motion.path d="M17.995 15.5V21.5M21 18.495L15 18.495" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18.5px' }" />
            <motion.path d="M13 21.5H10C6.70017 21.5 5.05025 21.5 4.02513 20.4749C3 19.4497 3 17.7998 3 14.5L3 11.9896C3 10.3083 3 9.46773 3.3559 8.74005C3.71179 8.01237 4.37533 7.49628 5.70241 6.46411L7.70242 4.90855C9.76689 3.30285 10.7991 2.5 12 2.5C13.2009 2.5 14.2331 3.30285 16.2976 4.90855L18.2976 6.46411C19.6247 7.49628 20.2882 8.01237 20.6441 8.74005C21 9.46773 21 10.3083 21 11.9896V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9 21.5V16.5C9 15.0858 9 14.3787 9.43934 13.9393C9.87868 13.5 10.5858 13.5 12 13.5C12.3821 13.5 12.7125 13.5 13 13.5087" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 17.5px' }" />
          </svg>
        </div>
</template>
