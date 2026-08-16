<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MobileSecurityIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after call-02: the phone gives one tactile ring and settles in the hand
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-9.51deg)', 'rotate(7.61deg)', 'rotate(-4.75deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.66,
      ease: 'easeInOut',
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M10.9994 2C7.69953 2 6.04961 2 5.02449 3.02513C3.99936 4.05025 3.99936 5.70017 3.99936 9V15C3.99936 18.2998 3.99936 19.9497 5.02449 20.9749C6.04961 22 7.69953 22 10.9994 22C14.2992 22 15.9491 22 16.9743 20.9749C17.9994 19.9497 17.9994 18.2998 17.9994 15V14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 2px' }" />
            <motion.path d="M9.99936 19H11.9994" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 2px' }" />
            <motion.path d="M14.8365 5.38C13.7565 5.38 13.2165 6.16 13.0965 6.64C12.9765 7.12001 12.9765 8.86 13.0485 9.58C13.2885 10.48 13.8885 10.852 14.4765 10.972C15.0165 11.02 17.2965 11.002 17.9565 11.002C18.9165 11.02 19.6365 10.66 19.9365 9.58C19.9965 9.22 20.0565 7.24 19.9065 6.64C19.5885 5.68 18.7965 5.38 18.1965 5.38H14.8365Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 2px' }" />
            <motion.path d="M14.7494 4.95854C14.7494 4.89854 14.7576 4.55312 14.759 4.11854C14.7602 3.72145 14.7254 3.33854 14.915 2.98814C15.6254 1.57454 17.6654 1.71854 18.1694 3.15854C18.2567 3.39562 18.2619 3.77146 18.2594 4.11854C18.2561 4.56203 18.2654 4.95854 18.2654 4.95854" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 2px' }" />
          </svg>
        </div>
</template>
