<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EstimateIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the display redraws and the coin flips
// authored from scripts/authored
const displayVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const coinVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.06)', 'scaleX(1)'],
    transition: { duration: 0.56, delay: 0.1, times: [0, 0.5, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M18 8.75556V6.8C18 4.53726 18 3.40589 17.2247 2.70294C16.4494 2 15.2016 2 12.7059 2H8.29412C5.79845 2 4.55061 2 3.77531 2.70294C3 3.40589 3 4.53726 3 6.8V13.2C3 15.4627 3 16.5941 3.77531 17.2971C4.55061 18 5.79845 18 8.29412 18H12.7059" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M6 6H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="displayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M6 10H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 10H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M14 10H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M6 14H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 14H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.7057 15.0043C20.4315 14.3089 19.7265 13.4939 18.1202 13.4939C16.2537 13.4939 15.4684 14.349 15.309 14.8061C15.0604 15.4174 15.0369 16.7356 17.2978 16.8114C19.9979 16.9019 21.1279 17.2682 20.9886 18.7482C20.8492 20.2282 19.293 20.4336 18.1201 20.5136C16.9153 20.4794 15.4252 20.2274 15 18.9491M17.9938 12V13.4364M18.0025 20.5089V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.1px 17px' }" />
          </svg>
        </div>
</template>
