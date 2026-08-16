<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LockKeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after lock: the body reacts while the keyway turns in its own seat
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-1.07deg) scale(0.985)', 'rotate(1.5deg) scale(1.018)', 'rotate(-0.38deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.75,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const keyVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0.21px) rotate(0deg) scale(0.96)', 'translateY(-0.36px) rotate(-16.68deg) scale(1.035)', 'translateY(-0.13px) rotate(4.17deg) scale(1.012)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.73,
      times: [0, 0.16, 0.42, 0.68, 0.86, 1],
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
            <motion.path d="M18 10.9971C17.6078 10.1968 16.5481 9.02153 14.3703 9.07154C14.3703 9.07154 12.6431 8.99652 10.6906 8.99652C8.73815 8.99652 7.82408 9.04224 6.25999 9.07154C5.25872 9.04653 3.35629 9.2716 2.48017 11.3472C1.90444 13.0976 1.87941 16.7736 2.22986 18.6241C2.30495 19.5744 2.80559 20.8998 4.35757 21.6C5.30878 22.1001 6.83573 21.9 7.98719 22.0001M5.98464 8.1963C5.93458 5.82065 5.83445 3.94514 8.58796 2.39472C9.51414 2.01962 10.8909 1.69453 12.5931 2.49475C14.3703 3.57004 14.5917 4.70802 14.7458 4.99543C15.1713 6.12074 14.9461 7.72117 14.9961 8.37135" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.94px 11.9px' }" />
            <motion.path d="M15.5 19.7351C15.5 20.9792 14.4911 21.9656 13.2552 21.9656C12.0194 21.9656 11 20.9792 11 19.7351C11 18.4911 12.0194 17.4915 13.2552 17.4915C14.4911 17.4915 15.5 18.4911 15.5 19.7351Z" stroke="currentColor" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.25px 19.73px' }" />
            <motion.path d="M22 15.8482L20.3731 14.3089C19.6 13.5692 18.95 14.2149 18.6264 14.4906L17.2156 15.8482L15.225 17.7909M17.2156 15.8482L18.825 17.3936" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.61px 15.68px' }" />
          </svg>
        </div>
</template>
