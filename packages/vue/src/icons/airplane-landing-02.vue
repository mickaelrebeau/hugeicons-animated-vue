<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AirplaneLanding02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the airliner falls in from the right, flares once and rolls out along the strip
// authored from scripts/authored
const runwayVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1)', 'scaleX(0.9)', 'scaleX(1.03)', 'scaleX(1)'],
    transition: { duration: 1.1, times: [0, 0.66, 0.78, 0.9, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const airlinerVariants: Variants = {
  normal: { transform: 'translate(0%, 0%) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0%, 0%) rotate(0deg)',
      'translate(8%, -13%) rotate(-4.5deg)',
      'translate(8%, -13%) rotate(-4.5deg)',
      'translate(-0.8%, 1.4%) rotate(0.6deg)',
      'translate(0%, 0%) rotate(0deg)',
    ],
    transition: {
      duration: 1.1,
      times: [0, 0.3, 0.36, 0.78, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        'linear',
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="hidden">
            <motion.path d="M2.49811 20.0009H18.4981" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="runwayVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.5px 20px' }" />
            <motion.path d="M20.0477 11.0413C21.2211 10.6013 21.3977 10.0013 21.4727 9.60128C21.5977 9.10128 21.2977 7.82628 21.0227 6.85128C20.968 6.6395 20.531 4.98369 20.4677 4.80128C20.2227 3.92628 19.6227 3.96628 19.1977 4.02628C19.0227 4.06378 17.7977 4.39628 17.5977 4.49628C16.9227 4.90128 16.9977 5.97628 16.7977 6.67628C16.5727 7.70128 16.0477 7.85128 15.4477 7.95128C13.3477 8.10128 8.69772 8.47628 8.69772 8.47628C4.72272 8.82628 2.79772 12.0013 2.51272 14.3263C2.37272 15.3013 3.27272 15.6513 3.74772 15.5263L8.97272 14.1013C9.37272 13.9513 9.69772 14.0763 9.92272 14.2263L12.2477 15.7513C12.7727 16.0263 13.2477 16.0513 13.6727 15.9513L15.8477 15.3563C16.2977 15.3063 16.3872 15.0921 16.4477 14.9263C16.5366 14.6828 16.3458 14.4595 16.1227 14.2513C15.9977 14.0763 15.5977 13.6483 15.4477 13.4833C15.2477 13.2263 14.7588 12.8013 14.7977 12.6263C14.4977 12.5013 15.5674 12.3127 17.3477 11.8263C18.3595 11.5498 19.5264 11.2368 20.0477 11.0413Z" stroke="currentColor" stroke-width="1.5" :variants="airlinerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
