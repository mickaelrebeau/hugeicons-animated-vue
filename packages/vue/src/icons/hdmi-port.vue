<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HdmiPortIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the hdmi port lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.76px) rotate(-0.95deg)', 'translateY(0.43px) rotate(0.48deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.51,
      delay: 0.12,
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
            <motion.path d="M6 7H18C18.93 7 19.395 7 19.7765 7.10222C20.8117 7.37962 21.6204 8.18827 21.8978 9.22354C22 9.60504 22 10.07 22 11V12.5125C22 13.8863 20.8863 15 19.5125 15C19.1984 15 18.9113 15.1774 18.7708 15.4584L18.75 15.5C18.2903 16.4193 17.3508 17 16.3229 17H7.67705C6.64924 17 5.70965 16.4193 5.25 15.5L5.22918 15.4584C5.08872 15.1774 4.80161 15 4.48754 15C3.11371 15 2 13.8863 2 12.5125V11C2 10.07 2 9.60504 2.10222 9.22354C2.37962 8.18827 3.18827 7.37962 4.22354 7.10222C4.60504 7 5.07003 7 6 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 11H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 11px' }" />
          </svg>
        </div>
</template>
