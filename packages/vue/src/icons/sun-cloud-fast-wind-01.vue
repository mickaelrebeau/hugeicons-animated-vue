<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SunCloudFastWind01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sun rocks, then the wind streaks blink
// authored from scripts/authored
const sunVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(18deg)',
      'translate(0.00px, 0.00px) rotate(-12.6deg)',
      'translate(0.00px, 0.00px) rotate(5.3999999999999995deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const weatherVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 0.15, 1, 1],
    transition: { duration: 0.8, delay: 0.26, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const weather2Variants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 0.15, 1, 1],
    transition: { duration: 0.8, delay: 0.34, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M9.00488 4.15468C8.3104 3.15451 7.15576 2.5 5.84876 2.5C3.72584 2.5 2.00488 4.22674 2.00488 6.35679C2.00488 7.65354 2.64271 8.80081 3.62076 9.5" stroke="currentColor" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 6px' }" />
            <motion.path d="M14.1588 21.4146C14.3031 21.4699 14.4585 21.5 14.6203 21.5C15.385 21.5 16.0049 20.8284 16.0049 20C16.0049 19.1716 15.385 18.5 14.6203 18.5C14.3488 18.5 14.0956 18.5846 13.8819 18.7309C12.8207 19.5225 10.8549 20.5378 8.62023 20.801M5.85102 20.6936C5.2328 20.5635 4.61355 20.3541 4.00488 20.0478" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="weatherVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.0049 20.5C19.263 20.5 19.9606 20.5 21.0049 20.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="weather2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M17.4782 8.40196C17.4856 8.40192 17.4931 8.40191 17.5006 8.40191C19.9849 8.40191 21.8964 10.36 21.9983 12.6502C22.0763 15.7 19.4254 17.308 17.5062 17.248M17.4782 8.40196C17.493 8.24557 17.5006 8.08719 17.5006 7.92713C17.5006 4.96 15.0368 2.5 12.0005 2.5C9.06174 2.5 6.74504 4.77718 6.50324 7.44927M17.4782 8.40196C17.376 9.47916 17.0384 10.42 16.2347 11.356M6.50324 7.44927C3.96786 7.67846 2.12265 9.76 2.0027 12.1754C1.92473 14.5 3.54406 16.12 5.52323 16.9C9.18169 18.28 12.6602 17.104 13.8237 15.124C14.3155 14.104 13.7398 12.64 12.3604 12.37C11.5207 12.16 10.0813 12.7 9.99735 14.302M6.50324 7.44927C6.66101 7.43501 6.82091 7.42771 6.98262 7.42771C8.10796 7.42771 9.12172 7.72 10.0093 8.404" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
