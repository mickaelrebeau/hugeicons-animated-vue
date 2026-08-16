<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Select02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after add-circle: the select makes room for its add mark, which stamps into place
// generated from @hugeicons/core-free-icons
const plusVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-10.82deg) scale(0.82)', 'rotate(3.25deg) scale(1.08)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.44,
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
      duration: 0.51,
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
            <motion.path d="M5 2V8M2 5H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="plusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 5px' }" />
            <motion.path d="M20 18L20 7M7 20H18M18 5H12M5 12V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 12.5px' }" />
            <motion.path d="M18 5C18 4.05719 18 3.58579 18.2929 3.29289C18.5858 3 19.0572 3 20 3C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7C19.0572 7 18.5858 7 18.2929 6.70711C18 6.41421 18 5.94281 18 5Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 5px' }" />
            <motion.path d="M18 20C18 19.0572 18 18.5858 18.2929 18.2929C18.5858 18 19.0572 18 20 18C20.9428 18 21.4142 18 21.7071 18.2929C22 18.5858 22 19.0572 22 20C22 20.9428 22 21.4142 21.7071 21.7071C21.4142 22 20.9428 22 20 22C19.0572 22 18.5858 22 18.2929 21.7071C18 21.4142 18 20.9428 18 20Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 20px' }" />
            <motion.path d="M3 20C3 19.0572 3 18.5858 3.29289 18.2929C3.58579 18 4.05719 18 5 18C5.94281 18 6.41421 18 6.70711 18.2929C7 18.5858 7 19.0572 7 20C7 20.9428 7 21.4142 6.70711 21.7071C6.41421 22 5.94281 22 5 22C4.05719 22 3.58579 22 3.29289 21.7071C3 21.4142 3 20.9428 3 20Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 20px' }" />
          </svg>
        </div>
</template>
