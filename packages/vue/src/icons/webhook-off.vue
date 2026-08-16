<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WebhookOffIcon' })

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
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.74deg) translateY(0.44px)', 'rotate(0deg) translateY(1.31px)', 'rotate(0deg) translateY(0px)'],
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
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2deg)', 'scale(1.08) rotate(0.8deg)', 'scale(1) rotate(0deg)'],
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
            <motion.path d="M5.062 12.5C3.83229 13.1824 3 14.494 3 16C3 18.2091 4.79086 20 7 20C9.20914 20 11 18.2091 11 16H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 16.25px' }" />
            <motion.path d="M14.5 19.1227C15.1848 19.6716 16.0541 20 17 20C17.8492 20 18.6365 19.7354 19.2841 19.2841M16.1013 12.1013C16.3902 12.035 16.691 12 17 12C19.2091 12 21 13.7909 21 16C21 16.309 20.965 16.6098 20.8987 16.8987" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.75px 16px' }" />
            <motion.path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6M12 8C11.4477 8 11 7.55228 11 7C11 6.44772 11.4477 6 12 6M12 8V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M7 17C7.55228 17 8 16.5523 8 16C8 15.4477 7.55228 15 7 15M7 17C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15M7 17V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 16px' }" />
            <motion.path d="M16 7C16 4.79086 14.2091 3 12 3C10.64 3 9.43857 3.6787 8.71586 4.71586M7 16L10.0571 10.4973" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 9.5px' }" />
          </svg>
        </div>
</template>
