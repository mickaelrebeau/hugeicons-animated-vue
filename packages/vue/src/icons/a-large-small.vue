<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ALargeSmallIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two letters pull apart in scale — the big A swells while the small one shrinks further
// authored from scripts/authored
const bigLetterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.14)', 'scale(0.99)', 'scale(1)'],
    transition: { duration: 0.66, times: [0, 0.42, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const smallLetterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.82)', 'scale(1.02)', 'scale(1)'],
    transition: { duration: 0.66, times: [0, 0.42, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2 17L4.62734 9.99376C5.41378 7.89659 5.807 7 6.5 7C7.193 7 7.58622 7.89659 8.37266 9.99376L11 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bigLetterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17px' }" />
            <motion.path d="M15 17.0003L16.6123 12.3937C17.3978 10.1495 17.7905 9.02734 18.5 9.02734C19.2095 9.02734 19.6022 10.1495 20.3877 12.3937L22 17.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="smallLetterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17px' }" />
            <motion.path d="M16.5 14H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="smallLetterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17px' }" />
            <motion.path d="M4 13H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bigLetterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 17px' }" />
          </svg>
        </div>
</template>
