<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MaskLoveIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after eye: the eye openings narrow while the mask itself stays still
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scaleY(1)',
  },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.12)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: {
      duration: 0.42,
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
            <motion.path d="M14.1419 13.442C15.3487 12.7109 16.4019 13.0055 17.0346 13.4748C17.2941 13.6672 17.4238 13.7634 17.5001 13.7634C17.5764 13.7634 17.7061 13.6672 17.9656 13.4748C18.5983 13.0055 19.6515 12.7109 20.8583 13.442C22.442 14.4014 22.8003 17.5667 19.1473 20.2372C18.4515 20.7458 18.1036 21.0001 17.5001 21.0001C16.8966 21.0001 16.5487 20.7458 15.8529 20.2372C12.1999 17.5667 12.5582 14.4014 14.1419 13.442Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 16.86px' }" />
            <motion.path d="M6.00006 8.00012C7.46595 7.38689 9.61067 7.00012 12.0001 7.00012C14.3895 7.00012 16.5342 7.38689 18.0001 8.00012" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 16.86px' }" />
            <motion.path d="M6.00006 9.00012C6.00006 12.2572 4.16886 13.942 3.05737 13.9986C3.02159 14.0004 2.98897 13.9809 2.97145 13.9497C2.15662 12.4967 2.00006 10.788 2.00006 9.00012C2.00006 5.68641 2.89549 3.00012 4.00006 3.00012C5.10463 3.00012 6.00006 5.68641 6.00006 9.00012Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 16.86px' }" />
            <motion.path d="M18.0601 10.0201C18.0094 9.66725 18.0001 9.40065 18.0001 9.00012C18.0001 5.68641 18.8955 3.00012 20.0001 3.00012C21.1047 3.00012 22.0001 5.68641 22.0001 9.00012C22.0001 9.381 22.0001 10.1401 21.9481 10.5201" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 16.86px' }" />
            <motion.path d="M11.0001 19.0001C8.04006 18.7801 4.74006 17.0401 3.00006 14.0001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 16.86px' }" />
          </svg>
        </div>
</template>
