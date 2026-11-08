<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SunCloud02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cloud drifts across the full sun, which pops
// authored from scripts/authored
const cloudVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0.6px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
  },
};

const sunVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.1)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.26,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M17.4776 12.0001C17.485 12 17.4925 12 17.5 12C19.9853 12 22 14.0147 22 16.5C22 18.9853 19.9853 21 17.5 21H7C4.23858 21 2 18.7614 2 16C2 13.4003 3.98398 11.2641 6.52042 11.0227M17.4776 12.0001C17.4924 11.8354 17.5 11.6686 17.5 11.5C17.5 8.46243 15.0376 6 12 6C9.12324 6 6.76233 8.20862 6.52042 11.0227M17.4776 12.0001C17.3753 13.1345 16.9286 14.1696 16.2428 15M6.52042 11.0227C6.67826 11.0077 6.83823 11 7 11C8.12582 11 9.16474 11.3721 10.0005 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <motion.path d="M2.95939 10.1937C2.21865 7.47179 3.85922 4.67397 6.6237 3.94463M2.95939 10.1937L2 10.4468M2.95939 10.1937C3.14359 10.8706 3.4577 11.479 3.86823 12M6.6237 3.94463L6.36663 3M6.6237 3.94463C8.66673 3.40563 10.7518 4.14719 12 5.66961M3.4765 6.32297L2.4644 5.74628M11.1407 3.45725L10.557 4.45494" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 6.5px' }" />
          </svg>
        </div>
</template>
