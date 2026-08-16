<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ImageDone01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-check: the confirmation stroke writes from tail to tip and lands once
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0px) rotate(0deg) scale(1)', 'translateY(-0.36px) rotate(0.82deg) scale(1.08)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.82,
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
      times: [0, 0.78, 0.9, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    pathLength: 1,
    pathOffset: 0,
    visibility: 'visible',
  },
  animate: {
    pathLength: [1, 1, 0.12, 0, 0, 0.12, 1, 1],
    pathOffset: [0, 0, 0.88, 1, 0, 0, 0, 0],
    visibility: ['visible', 'visible', 'hidden', 'hidden', 'hidden', 'hidden', 'visible', 'visible'],
    transition: {
      duration: 0.78,
      ease: [
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        'linear',
      ],
      times: [0, 0.06, 0.25, 0.28, 0.35, 0.39, 0.84, 1],
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
            <motion.path d="M11.5 3.00024C7.02164 3.00024 4.78247 3.00024 3.39123 4.39149C1.99998 5.78273 1.99998 8.0219 1.99998 12.5002C1.99998 16.9786 1.99998 19.2178 3.39123 20.609C4.78247 22.0002 7.02164 22.0002 11.5 22.0002C15.9783 22.0002 18.2175 22.0002 19.6087 20.609C21 19.2178 21 16.9786 21 12.5002C21 11.14 21 9.98632 20.961 9.00024" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.5px' }" />
            <motion.path d="M4.49998 21.5002C8.87244 16.2752 13.774 9.38425 20.9975 14.0426" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.75px 15.44px' }" />
            <motion.path d="M14 6.00024C14 6.00024 15 6.00024 16 8.00024C16 8.00024 19.1765 3.00024 22 2.00024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 5px' }" />
          </svg>
        </div>
</template>
