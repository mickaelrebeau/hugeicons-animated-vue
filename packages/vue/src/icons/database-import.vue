<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseImportIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow pushes down into the stack
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0px, -0.192px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
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
            <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
            <path d="M7 10.8418C7.60158 11.0226 8.27434 11.1716 9 11.2817" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 15C7.58172 15 4 13.6569 4 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M7 17.8418C7.60158 18.0226 8.27434 18.1716 9 18.2817" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 22C7.58172 22 4 20.6569 4 19V5M20 5V12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20 19.3265L18.8258 20.8131C18.2008 21.6044 17.8883 22 17.5 22C17.1117 22 16.7992 21.6044 16.1742 20.8131L15 19.3265M17.5 21.9128V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18px' }" />
          </svg>
        </div>
</template>
