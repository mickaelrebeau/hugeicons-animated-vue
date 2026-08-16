<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlarmSmokeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the alarm smoke lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.76px) rotate(-0.94deg)', 'translateY(0.43px) rotate(0.47deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.51,
      delay: 0.12,
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
            <motion.path d="M4 8H20C20.465 8 20.6975 8 20.8882 7.94889C21.4059 7.81019 21.8102 7.40587 21.9489 6.88823C22 6.69748 22 6.46499 22 6C22 5.53501 22 5.30252 21.9489 5.11177C21.8102 4.59413 21.4059 4.18981 20.8882 4.05111C20.6975 4 20.465 4 20 4H4C3.53501 4 3.30252 4 3.11177 4.05111C2.59413 4.18981 2.18981 4.59413 2.05111 5.11177C2 5.30252 2 5.53501 2 6C2 6.46499 2 6.69748 2.05111 6.88823C2.18981 7.40587 2.59413 7.81019 3.11177 7.94889C3.30252 8 3.53501 8 4 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <motion.path d="M5 8L5.34164 8.68328C6.14852 10.297 6.55195 11.1039 7.27691 11.552C8.00186 12 8.90398 12 10.7082 12H13.2918C15.096 12 15.9981 12 16.7231 11.552C17.448 11.1039 17.8515 10.297 18.6584 8.68328L19 8H5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 10px' }" />
            <motion.path d="M12 16V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M16 16V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 18px' }" />
            <motion.path d="M8 16V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 18px' }" />
          </svg>
        </div>
</template>
