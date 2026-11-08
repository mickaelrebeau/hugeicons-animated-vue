<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NotepadTextDashedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dashed outline marches around the pad
// authored from scripts/authored
const outlineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.3, 1],
    pathOffset: [0, 1, 2],
    transition: { duration: 1.1, times: [0, 0.5, 1], ease: 'easeInOut' },
  },
};

const linesVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M13 22.0005H11M16.5 3.58926C17.6376 3.70116 18.4033 3.95405 18.9749 4.52558C19.6998 5.25055 19.9121 6.28798 19.9743 8.00046M7.5 3.58926C6.3624 3.70116 5.59666 3.95405 5.02513 4.52558C4.30016 5.25055 4.08789 6.28798 4.02573 8.00046M20 12.0005V14.0005M4 12.0005V14.0005M19.9504 18.0005C19.8638 19.4199 19.6264 20.3238 18.9749 20.9753C18.4914 21.4588 17.869 21.7143 17 21.8492M4.04962 18.0005C4.13616 19.4199 4.3736 20.3238 5.02513 20.9753C5.5086 21.4588 6.13105 21.7143 7 21.8492" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="outlineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M16.5 2.00046V5.00046M7.5 2.00046V5.00046M12 2.00046V5.00046" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 15.0005H12M8 11.0005H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="linesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
