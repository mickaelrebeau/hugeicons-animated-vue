<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GlobeOffIcon' })

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
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.17deg) translateY(0.41px)', 'rotate(0deg) translateY(1.23px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.7,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-1.86deg)', 'scale(1.08) rotate(0.74deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M7.88376 2.88376C9.13912 2.31604 10.5327 2 12 2C17.5228 2 22 6.47715 22 12C22 13.4673 21.684 14.8609 21.1162 16.1162M4.92893 4.92893C3.11929 6.73858 2 9.23858 2 12C2 17.5228 6.47715 22 12 22C14.7614 22 17.2614 20.8807 19.0711 19.0711" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.40013 4.40013C10.0993 2.90379 11.0074 2 12 2C14.0713 2 15.7749 5.93597 15.9794 10.9794M8.28511 8.28511C8.10118 9.4336 8 10.6873 8 12C8 17.5228 9.79086 22 12 22C13.684 22 15.125 19.3983 15.7149 15.7149" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 12px' }" />
            <motion.path d="M22 12H19M2 12H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 2L22 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
