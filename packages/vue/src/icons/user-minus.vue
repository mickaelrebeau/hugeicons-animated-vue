<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserMinusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user-remove-01: the profile recoils from the remove mark and both settle
// generated from @hugeicons/core-free-icons
const personVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px) scale(1)', 'translateX(-1.47px) scale(0.97)', 'translateX(0.34px) scale(1.01)', 'translateX(0px) scale(1)'],
    transition: {
      duration: 0.52,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const removeVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(-9.56deg) scale(0.58)', 'rotate(11.47deg) scale(1.2)', 'rotate(-2.87deg) scale(0.98)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.48,
      delay: 0.06,
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
            <motion.path d="M15 8.5C15 5.73858 12.7614 3.5 10 3.5C7.23858 3.5 5 5.73858 5 8.5C5 11.2614 7.23858 13.5 10 13.5C12.7614 13.5 15 11.2614 15 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 8.5px' }" />
            <motion.path d="M14 19H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="removeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 19px' }" />
            <motion.path d="M3 20.5C3 16.634 6.13401 13.5 10 13.5C11.4872 13.5 12.8662 13.9638 14 14.7547" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 17px' }" />
          </svg>
        </div>
</template>
