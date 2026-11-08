<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Scooter02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the scooter bounces over a bump
// authored from scripts/authored
const tiltVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-5deg)', 'rotate(3deg)', 'rotate(-1.25deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.7,
      times: [0, 0.22, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
        [0.77, 0, 0.175, 1],
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
            <motion.g :variants="tiltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 17px', transformBox: 'view-box' }">
              <path d="M2 16C2 12.8182 4.23858 11 7 11C9.76142 11 12 12.8182 12 16H2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M5 8H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M10 16C10 17.6569 8.65685 19 7 19C5.34315 19 4 17.6569 4 16" stroke="currentColor" stroke-width="1.5" />
              <circle cx="20" cy="17" r="2" stroke="currentColor" stroke-width="1.5" />
              <path d="M16 8C17.3333 8.63768 20 11.1739 20 15M15.9899 5H16.5366C17.5214 5 18.4246 5.57927 18.8809 6.5034C19.1964 7.14264 18.8809 8 17.9849 8H15.9899M15.9899 5V8M15.9899 5H12.9444M15.9899 8C15.9899 9.91304 15.7776 16 12 16H17.6665" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
