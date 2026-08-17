<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AuctionIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the gavel winds up and strikes twice on the same hinge
// authored from scripts/authored
const handleVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.05px, 1.29px) rotate(-16deg)',
      'translate(-0.57px, -1.23px) rotate(13deg)',
      'translate(0.98px, 1.21px) rotate(-15deg)',
      'translate(-0.60px, -1.33px) rotate(14deg)',
      'translate(0.17px, 0.26px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.16, 0.3, 0.48, 0.62, 0.8, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.18px, -0.40px) rotate(-16deg)',
      'translate(0.85px, 0.55px) rotate(13deg)',
      'translate(-1.10px, -0.38px) rotate(-15deg)',
      'translate(0.91px, 0.60px) rotate(14deg)',
      'translate(-0.21px, -0.10px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
      times: [0, 0.16, 0.3, 0.48, 0.62, 0.8, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.77, 0, 0.175, 1],
        [0.18, 0.9, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M12 14.0059L5.84373 21.2328C5.01764 22.2026 3.54001 22.2616 2.63922 21.3608C1.73843 20.46 1.79744 18.9824 2.7672 18.1563L9.99412 12" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.9px 17.1px' }" />
            <motion.path d="M22 11.9048L15.9048 18M12.0952 2L6 8.09524M11.3334 2.76186L6.76195 7.33329C6.76195 7.33329 9.04766 10.3809 11.3334 12.6666C13.6191 14.9523 16.6667 17.2381 16.6667 17.2381L21.2381 12.6666C21.2381 12.6666 18.9524 9.61901 16.6667 7.33329C14.381 5.04758 11.3334 2.76186 11.3334 2.76186Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 10px' }" />
          </svg>
        </div>
</template>
