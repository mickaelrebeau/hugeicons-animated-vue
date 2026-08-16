<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlagOffIcon' })

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
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-7.53deg) translateY(0.38px)', 'rotate(0deg) translateY(1.13px)', 'rotate(0deg) translateY(0px)'],
    opacity: [1, 1, 0.55, 1],
    transition: {
      duration: 0.66,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2.06deg)', 'scale(1.08) rotate(0.82deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M4 12L4 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 16.5px' }" />
            <motion.path d="M8.00876 3.00876C9.16422 2.95225 10.4492 3.16236 11.7576 3.83892C13.4549 4.7166 15.2471 5.04124 17.021 4.84327C18.5627 4.67121 19.3335 4.58518 19.6667 4.88332C20 5.18146 20 5.82588 20 7.11473V13.2898C20 13.409 20 13.4685 19.9895 13.5405C19.9503 13.8088 19.743 14.118 19.5096 14.2562C19.4471 14.2933 19.4107 14.3082 19.3381 14.3381M4.24191 4.24191C4.15535 4.30176 4.0746 4.3614 4 4.42024V12.1531C4 13.2018 4 13.7261 4.2098 13.8757C4.4196 14.0252 5.02221 13.8172 6.22741 13.4012C7.63078 12.9168 9.53498 12.8405 11.7576 13.9897C12.8503 14.5547 13.9344 14.8438 14.9505 14.9505" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.95px' }" />
            <motion.path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
