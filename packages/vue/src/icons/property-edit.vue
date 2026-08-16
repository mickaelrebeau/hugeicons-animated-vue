<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PropertyEditIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after edit-02: the nib writes a short stroke and the baseline answers
// generated from @hugeicons/core-free-icons
const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-8.04deg) translate(-0.4px, 0.6px)', 'rotate(4.02deg) translate(0.3px, -0.3px)', 'rotate(0deg) translate(0px, 0px)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 0.15, 1],
    visibility: ['visible', 'visible', 'visible'],
    transition: {
      duration: 0.57,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.85px) rotate(-1.07deg)', 'translateY(0.48px) rotate(0.53deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M11.5 20.5C7.25736 20.5 5.13604 20.5 3.81802 19.182C2.5 17.864 2.5 15.7426 2.5 11.5C2.5 7.25736 2.5 5.13604 3.81802 3.81802C5.13604 2.5 7.25736 2.5 11.5 2.5C15.7426 2.5 17.864 2.5 19.182 3.81802C20.5 5.13604 20.5 7.25736 20.5 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 11.5px' }" />
            <motion.path d="M3 7.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 7.5px' }" />
            <motion.path d="M11.5 16H12.5M6.5 16H7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 16px' }" />
            <motion.path d="M11.5 12H16.5M6.5 12H7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12px' }" />
            <motion.path d="M15.2844 18.5846L19.0505 14.8295C19.4916 14.3902 20.2068 14.3902 20.6478 14.8295L21.1692 15.3488C21.6103 15.7881 21.6103 16.5004 21.1692 16.9397L17.4378 20.7114C17.223 20.9254 16.9481 21.0696 16.6494 21.1252L14.9566 21.4912C14.6893 21.549 14.4513 21.3126 14.5086 21.0463L14.8689 19.3698C14.9247 19.0723 15.0695 18.7986 15.2844 18.5846Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.03px 17.97px' }" />
          </svg>
        </div>
</template>
