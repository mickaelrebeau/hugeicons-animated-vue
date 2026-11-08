<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'EggFriedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the yolk wobbles in the fried egg
// authored from scripts/authored
const yolkVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.00px) scale(1.15)',
      'translate(0.00px, 0.00px) scale(0.94)',
      'translate(0.00px, 0.00px) scale(1.03)',
      'translate(0.00px, 0.00px) scale(1)',
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

const whiteVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.16, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.circle cx="10" cy="14" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="yolkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 14px' }" />
            <motion.path d="M18.9999 8C18.9999 5.23858 16.7614 3 13.9999 3C12.3283 3 10.8486 3.82039 9.94099 5.08048C9.18334 6.13236 8.18419 7.11569 7.01211 7.66951C4.64065 8.79005 2.99994 11.2029 2.99994 14C2.99994 17.866 6.13395 21 9.99994 21C12.0336 21 13.8633 20.1319 15.1418 18.7468C15.609 18.2406 16.3111 18 16.9999 18C19.2091 18 20.9999 16.2091 20.9999 14C20.9999 13.1489 20.734 12.3603 20.2807 11.7122C19.5567 10.677 18.9999 9.26325 18.9999 8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="whiteVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
