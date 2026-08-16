<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiCloud02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cloud holds while its three feeds drop down to their endpoints, centre first
// authored from scripts/authored
const cloudVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.7px)', 'translateY(0px)'],
    transition: { duration: 0.7, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const feedVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.54, delay: 0.22, times: [0, 0.32, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const feed2Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.54, delay: 0.14, times: [0, 0.32, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const feed3Variants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.3)', 'scaleY(1.06)', 'scaleY(1)'],
    transition: { duration: 0.54, delay: 0.06, times: [0, 0.32, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17.4776 8.00005C17.485 8.00002 17.4925 8 17.5 8C19.9853 8 22 10.0147 22 12.5C22 14.4593 20.7478 16.1262 19 16.7439M17.4776 8.00005C17.4924 7.83536 17.5 7.66856 17.5 7.5C17.5 4.46243 15.0376 2 12 2C9.12324 2 6.76233 4.20862 6.52042 7.0227M17.4776 8.00005C17.3753 9.1345 16.9286 10.1696 16.2428 11M6.52042 7.0227C3.98398 7.26407 2 9.40034 2 12C2 14.0503 3.2341 15.8124 5 16.584M6.52042 7.0227C6.67826 7.00768 6.83823 7 7 7C8.12582 7 9.16474 7.37209 10.0005 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M18.25 21.25L16 19L16 17M18.25 20.5C17.8358 20.5 17.5 20.8358 17.5 21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25C19 20.8358 18.6642 20.5 18.25 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="feedVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17px' }" />
            <motion.path d="M5.75 21.25L8 19L8 17M5.75 20.5C6.16421 20.5 6.5 20.8358 6.5 21.25C6.5 21.6642 6.16421 22 5.75 22C5.33579 22 5 21.6642 5 21.25C5 20.8358 5.33579 20.5 5.75 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="feed2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17px' }" />
            <motion.path d="M12 21.25L12 17M12 20.5C11.5858 20.5 11.25 20.8358 11.25 21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25C12.75 20.8358 12.4142 20.5 12 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="feed3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
