<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LocationUser03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after location-01: the pin lifts, drops onto its point, and carries the landing ring
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-2.04px) scale(0.96)', 'translateY(0.37px) scale(1.04)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M5.77778 16C4.66596 16.6327 4 17.4385 4 18.3158C4 20.3505 7.58172 22 12 22C16.4183 22 20 20.3505 20 18.3158C20 17.4385 19.334 16.6327 18.2222 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M12.9981 7H11.0019C8.13196 7 6.19701 10.0691 7.32753 12.828C7.48501 13.2124 7.84633 13.4615 8.24612 13.4615H8.9491C9.18605 13.4615 9.39259 13.6302 9.45006 13.8706L10.3551 17.6567C10.5438 18.4462 11.222 19 12 19C12.778 19 13.4562 18.4462 13.6449 17.6567L14.5499 13.8706C14.6074 13.6302 14.814 13.4615 15.0509 13.4615H15.7539C16.1537 13.4615 16.515 13.2124 16.6725 12.828C17.803 10.0691 15.868 7 12.9981 7Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M14.5 4.5C14.5 5.88071 13.3807 7 12 7C10.6193 7 9.5 5.88071 9.5 4.5C9.5 3.11929 10.6193 2 12 2C13.3807 2 14.5 3.11929 14.5 4.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
