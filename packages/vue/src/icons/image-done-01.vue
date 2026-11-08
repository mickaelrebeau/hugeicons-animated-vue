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

// the check ticks and the hill rises
// authored from scripts/authored
const hillVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 1.10px) scaleY(0.8)',
      'translate(0px, -0.33px) scaleY(1.06)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.16,
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

const checkVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <path d="M11.5 3.00024C7.02164 3.00024 4.78247 3.00024 3.39123 4.39149C1.99998 5.78273 1.99998 8.0219 1.99998 12.5002C1.99998 16.9786 1.99998 19.2178 3.39123 20.609C4.78247 22.0002 7.02164 22.0002 11.5 22.0002C15.9783 22.0002 18.2175 22.0002 19.6087 20.609C21 19.2178 21 16.9786 21 12.5002C21 11.14 21 9.98632 20.961 9.00024" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M4.49998 21.5002C8.87244 16.2752 13.774 9.38425 20.9975 14.0426" stroke="currentColor" stroke-width="1.5" :variants="hillVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 15.5px' }" />
            <motion.path d="M14 6.00024C14 6.00024 15 6.00024 16 8.00024C16 8.00024 19.1765 3.00024 22 2.00024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="checkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
