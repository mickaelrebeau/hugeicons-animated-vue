<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SkiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the skier bobs down the slope
// authored from scripts/authored
const skierVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.06,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const skier2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0.8px)',
      'translate(-0.09px, -0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const skiVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0.4px)',
      'translate(-0.09px, -0.06px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M19.9983 4.5C19.9983 5.3284 19.3271 6 18.4992 6C17.6712 6 17 5.3284 17 4.5C17 3.67157 17.6712 3 18.4992 3C19.3271 3 19.9983 3.67157 19.9983 4.5Z" stroke="currentColor" stroke-width="1.5" :variants="skierVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 4.5px' }" />
            <motion.path d="M12.4787 7.81915L13.5537 6.85169C14.0995 6.36044 14.9207 6.33659 15.4942 6.79533L17 8M12.4787 7.81915L15.3 9.7L17 8M12.4787 7.81915L6 3.5M12.5 12.5L11.1068 11.5712C10.4329 11.1219 10.2587 10.2468 10.6307 9.58714M12.5 12.5L14.8608 14.1863C15.4191 14.5851 15.4191 15.4149 14.8608 15.8137L12.5 17.5M12.5 12.5L13.5 11.5M17 8L17.5 11.1667L21 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="skier2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 10.5px' }" />
            <motion.path d="M3 12L17 21L19.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="skiVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.3px 16.5px' }" />
          </svg>
        </div>
</template>
