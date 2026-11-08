<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CarrotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the carrot is tugged up out of the soil, its leafy top shaking
// authored from scripts/authored
const rootVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.9px, -0.9px)',
      'translate(-0.2px, 0.2px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.66,
      times: [0, 0.34, 0.66, 0.88, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const leavesVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.63px, -0.47px) rotate(-16deg)',
      'translate(0.37px, 0.46px) rotate(12deg)',
      'translate(-0.18px, -0.17px) rotate(-5deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.76,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M8.20026 9.07541C6.09891 11.1768 0.635392 20.0024 2.31647 21.6835C3.99756 23.3646 12.8232 17.9011 14.9246 15.7997C17.0259 13.6984 18.2868 12.4376 14.9246 9.07541C11.5624 5.71325 10.3016 6.97406 8.20026 9.07541Z" stroke="currentColor" stroke-width="1.5" :variants="rootVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 14.5px' }" />
            <motion.path d="M14.5 15.5L13 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rootVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.8px 14.8px' }" />
            <motion.path d="M7 11L8.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rootVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 11.8px' }" />
            <motion.path d="M9 19L8 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rootVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 18.5px' }" />
            <motion.path d="M15 2C15.5185 2.51852 15.8555 3.63331 15.0001 5.11102M22 9C21.4815 8.48148 20.3668 8.14445 18.8892 9M19.2782 4.72192L17.3339 6.66636" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leavesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5.5px' }" />
          </svg>
        </div>
</template>
