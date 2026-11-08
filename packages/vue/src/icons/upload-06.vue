<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Upload06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shaft stretches up and carries the head
// authored from scripts/authored
const shaftVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.20px) scaleY(1.2)',
      'translate(0px, 0.30px) scaleY(0.95)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.4, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-2.4px)', 'translateY(0.6px)', 'translateY(0px)'],
    transition: {
      duration: 0.56,
      times: [0, 0.4, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M16 10C17.4001 10 18.1002 10 18.635 10.2725C19.1054 10.5122 19.4878 10.8946 19.7275 11.365C20 11.8998 20 12.5999 20 14V17C20 19.357 20 20.5355 19.2678 21.2678C18.5355 22 17.357 22 15 22H9C6.64298 22 5.46447 22 4.73223 21.2678C4 20.5355 4 19.357 4 17V14C4 12.5999 4 11.8998 4.27248 11.365C4.51217 10.8946 4.89462 10.5122 5.36502 10.2725C5.8998 10 6.59987 10 8 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 16V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M15 5.99998C15 5.99998 12.7905 3.00001 12 3C11.2094 2.99999 9 6 9 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
          </svg>
        </div>
</template>
