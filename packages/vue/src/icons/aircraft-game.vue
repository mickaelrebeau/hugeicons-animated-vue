<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AircraftGameIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after command: the control gives one playful input response and recenters
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8.41deg)', 'rotate(7.36deg)', 'rotate(-4.21deg)', 'rotate(2.1deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M5.43876 16.2353C5.43876 15.9728 5.43048 15.7223 5.41491 15.4832M5.41491 15.4832C5.27345 13.3108 4.53006 12.0839 3.9244 11.4706C2.87884 12.5294 0.464067 16.7647 3.41663 19.9412L8.18741 17.8235C8.28323 18.2095 8.39847 18.5927 8.53467 18.9717C8.84621 19.8385 9.00197 20.272 9.51962 20.636C10.0373 21 10.6089 21 11.7522 21H12.2478C13.3911 21 13.9627 21 14.4804 20.636C14.998 20.272 15.1538 19.8385 15.4653 18.9717C15.6015 18.5927 15.7168 18.2095 15.8126 17.8235L20.5834 19.9412C23.5359 16.7647 21.1212 12.5294 20.0756 11.4706C19.4699 12.0839 18.7265 13.3108 18.5851 15.4832M5.41491 15.4832L6.51316 15.0678C7.12169 14.8376 7.42596 14.7225 7.59991 14.4928C7.77386 14.2631 7.80478 13.9083 7.86661 13.1989C8.25599 8.73199 10.4257 4.62034 12 3C13.5743 4.62034 15.744 8.73199 16.1334 13.1989C16.1952 13.9083 16.2261 14.2631 16.4001 14.4928C16.574 14.7225 16.8783 14.8376 17.4868 15.0678L18.5851 15.4832M18.5612 16.2353C18.5612 15.9728 18.5695 15.7223 18.5851 15.4832" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 10L12 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20 8V7M20 4V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M4 8V7M4 4V3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
