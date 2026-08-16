<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RefreshCwOffIcon' })

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
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2.19deg)', 'scale(1.08) rotate(0.87deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.04deg) translateY(0.4px)', 'rotate(0deg) translateY(1.21px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.69,
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
            <motion.path d="M3 3.00012L21 21.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.5 6.50012C17.5 4.00012 15 3.00012 12 3.00012C10.8144 3.00012 9.68239 3.22936 8.64581 3.64593M4.5 17.5001C6.5 20.0001 9 21.0001 12 21.0001C14.4853 21.0001 16.7353 19.9928 18.364 18.3641M20.9451 11.0001C20.9814 11.3285 21 11.6621 21 12.0001C21 13.1857 20.7708 14.3177 20.3542 15.3543M3.05493 13.0001C3.01863 12.6718 3 12.3381 3 12.0001C3 9.51484 4.00736 7.26484 5.63604 5.63616" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 6.77886C16 6.77886 19.2808 7.27671 19.7787 6.77883C20.2766 6.28096 19.7787 3.00012 19.7787 3.00012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.14px 5.14px' }" />
            <motion.path d="M8 17.2211C8 17.2211 4.71917 16.7233 4.22128 17.2212C3.72339 17.719 4.22129 20.9999 4.22129 20.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.86px 18.86px' }" />
          </svg>
        </div>
</template>
