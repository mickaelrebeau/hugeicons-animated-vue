<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MessageLockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after message-01: the speech tail anchors the bubble as it answers
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.92)', 'scale(1.08)', 'scale(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M22 13.4908C21.7253 17.7331 18.3866 21.1124 14.1951 21.3904C12.7652 21.4853 11.2722 21.4851 9.84518 21.3904C9.35376 21.3578 8.81812 21.2408 8.3568 21.0512C7.84352 20.8402 7.58684 20.7347 7.45641 20.7507C7.32598 20.7667 7.13674 20.906 6.75825 21.1845C6.09091 21.6756 5.25021 22.0284 4.00346 21.9981C3.37302 21.9828 3.0578 21.9751 2.91669 21.735C2.77557 21.4949 2.95132 21.1625 3.30283 20.4977C3.79035 19.5757 4.09923 18.5202 3.63119 17.6745C2.82509 16.4665 2.14038 15.0359 2.04032 13.4908C1.98656 12.6606 1.98656 11.8008 2.04032 10.9706C2.31504 6.72826 5.65374 3.34901 9.84518 3.07095C10.7223 3.01277 11.6242 2.99027 12.5212 3.0036" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 12.51px' }" />
            <motion.path d="M8.5 14.9999H15.5M8.5 9.99988H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 12.51px' }" />
            <motion.path d="M16.7374 5.17553L16.7374 3.78517C16.7374 3.5798 16.746 3.37188 16.8196 3.1801C17.0155 2.66962 17.5346 2.00085 18.4795 2.00085C19.4245 2.00085 19.9639 2.66962 20.1598 3.1801C20.2335 3.37188 20.242 3.5798 20.242 3.78517L20.242 5.17553M16.8069 10.9984H20.1929C21.1898 10.9984 21.9979 10.1918 21.9979 9.19686V7.19551C21.9979 6.20053 21.1898 5.39394 20.1929 5.39394H16.8069C15.8101 5.39394 15.002 6.20053 15.002 7.19551V9.19686C15.002 10.1918 15.8101 10.9984 16.8069 10.9984Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 12.51px' }" />
          </svg>
        </div>
</template>
