<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiCloud01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cloud floats up and the chip slung beneath it does the work, pins flickering
// authored from scripts/authored
const cloudVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1px)', 'translateY(0px)'],
    transition: { duration: 0.74, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const chipVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.9)', 'scale(1.05)', 'scale(1)'],
    transition: { duration: 0.6, delay: 0.1, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const pinsVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.06)', 'scale(1)'],
    opacity: [1, 0.45, 1],
    transition: { duration: 0.58, delay: 0.16, times: [0, 0.36, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17.4776 8.00005C17.485 8.00002 17.4925 8 17.5 8C19.9853 8 22 10.0147 22 12.5C22 14.0602 21.206 15.435 20 16.2422M17.4776 8.00005C17.4924 7.83536 17.5 7.66856 17.5 7.5C17.5 4.46243 15.0376 2 12 2C9.12324 2 6.76233 4.20862 6.52042 7.0227M17.4776 8.00005C17.4131 8.71494 17.2119 9.39038 16.9003 10M6.52042 7.0227C3.98398 7.26407 2 9.40034 2 12C2 13.7891 2.93963 15.3587 4.35232 16.2422M6.52042 7.0227C6.67826 7.00768 6.83823 7 7 7C8.12582 7 9.16474 7.37209 10.0005 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M13 14H11C10.0572 14 9.58579 14 9.29289 14.2929C9 14.5858 9 15.0572 9 16V18C9 18.9428 9 19.4142 9.29289 19.7071C9.58579 20 10.0572 20 11 20H13C13.9428 20 14.4142 20 14.7071 19.7071C15 19.4142 15 18.9428 15 18V16C15 15.0572 15 14.5858 14.7071 14.2929C14.4142 14 13.9428 14 13 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M10.5 20V22M13.5 20V22M10.5 12V14M13.5 12V14M9 15.5H7M9 18.5H7M17 15.5H15M17 18.5H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pinsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
