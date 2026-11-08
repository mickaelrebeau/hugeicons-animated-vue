<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'InputCursorTextIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the text cursor blinks at the field edge
// authored from scripts/authored
const caretVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0, 1, 0, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <motion.path d="M9 6V18M9 6C9 4.89543 9.89543 4 11 4M9 6C9 4.89543 8.10457 4 7 4M9 18C9 19.1046 9.89543 20 11 20M9 18C9 19.1046 8.10457 20 7 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="caretVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12 8H18C19.8856 8 20.8284 8 21.4142 8.58579C22 9.17157 22 10.1144 22 12C22 13.8856 22 14.8284 21.4142 15.4142C20.8284 16 19.8856 16 18 16H12M6 16C4.11438 16 3.17157 16 2.58579 15.4142C2 14.8284 2 13.8856 2 12C2 10.1144 2 9.17157 2.58579 8.58579C3.17157 8 4.11438 8 6 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
