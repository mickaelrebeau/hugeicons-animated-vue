<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MinusPlusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the existing shape makes room and the new mark stamps into place
// generated from @hugeicons/core-free-icons
const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-9.75deg) scale(0.82)', 'rotate(2.93deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.41,
      delay: 0.04,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.47,
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
            <motion.path d="M12 7V21M19 14H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M19 3L5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
          </svg>
        </div>
</template>
