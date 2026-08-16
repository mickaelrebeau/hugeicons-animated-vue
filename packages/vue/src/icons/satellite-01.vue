<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Satellite01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the dish sweeps and the signal arcs push outward from it
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.67px) rotate(-1.97deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.86px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.99, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M20.3068 15.3312C16.7859 18.8521 11.1336 18.908 7.61276 15.3872C4.09192 11.8663 4.14799 6.21408 7.66883 2.69323M20.3068 15.3312C21.9837 13.6543 20.5139 9.46584 17.0241 5.97596C13.5342 2.48608 9.34571 1.01635 7.66883 2.69323M20.3068 15.3312C18.6299 17.0081 14.4414 15.5384 10.9516 12.0485M7.66883 2.69323C5.99196 4.37011 7.46169 8.55859 10.9516 12.0485M10.9516 12.0485L14 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.48804 15L4.75106 17.4884C3.3523 19.4923 2.65291 20.4942 3.17039 21.2471C3.68787 22 5.07589 22 7.85193 22H12.1481C14.9241 22 16.3121 22 16.8296 21.2471C17.301 20.5612 16.7625 19.6686 15.6053 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
