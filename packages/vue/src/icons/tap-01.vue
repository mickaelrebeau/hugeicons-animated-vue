<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tap01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the finger pokes twice and the ripple blinks
// authored from scripts/authored
const rippleVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.15, 1, 0.15, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
  },
};

const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.6px)',
      'translate(0px, 0px)',
      'translate(0px, -1.1px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.66, times: [0, 0.22, 0.44, 0.66, 1], ease: 'easeInOut' },
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
            <motion.path d="M6.98752 6.02772C6.92162 5.10717 7.48861 3.28606 9.04448 2.5246C9.68606 2.13485 11.4471 1.5314 13.1314 2.60667C14.7913 3.66635 14.9033 5.22874 15.0078 6.01736" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rippleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.165 22.0019C17.1197 20.3659 17.2229 20.2038 17.3425 19.8398C17.4621 19.4759 18.2988 18.1634 18.5948 17.2257C19.5525 14.1918 18.6599 13.5465 17.4698 12.6861C16.1501 11.732 13.7755 11.2582 12.5409 11.3628V6.52393C12.5409 5.7005 11.7516 5.02722 10.9089 5.02722C10.0661 5.02722 9.29135 5.7005 9.29135 6.52393V14.8358L7.57205 13.3449C7.01247 12.7519 6.1132 12.6918 5.49945 13.2312C4.91784 13.7424 4.83296 14.6033 5.30401 15.2135L6.43462 16.6783M9.24414 22.0019V21.1487C9.28171 20.0958 8.49784 19.4088 7.47551 18.0353C7.40185 17.9363 7.33017 17.8407 7.26038 17.7481M7.26038 17.7481C6.95063 17.3373 6.67809 16.9872 6.43462 16.6783M7.26038 17.7481L8.28346 19.0736M7.26038 17.7481L6.43462 16.6783M6.43462 16.6783C5.93475 16.044 5.55741 15.5831 5.23211 15.1251" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.2px 13.5px' }" />
          </svg>
        </div>
</template>
