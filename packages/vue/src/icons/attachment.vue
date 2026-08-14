<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AttachmentIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the paperclip winds open, catches, then springs into its nested shape
const clipVariants: Variants = {
  normal: { pathLength: 1, rotate: 0, scale: 1, transition: { type: 'spring', duration: 0.45, bounce: 0 } },
  animate: {
    pathLength: [1, 0.72, 1],
    rotate: [0, -5, 2, 0],
    scale: [1, 0.94, 1.03, 1],
    transition: { duration: 0.8, times: [0, 0.28, 0.68, 1], ease: 'easeInOut' },
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
            <motion.path d="M19.5 12.0001V13.5001C19.5 17.6422 16.1421 21.0001 12 21.0001C7.85786 21.0001 4.5 17.6422 4.5 13.5001V8C4.5 5.23858 6.73858 3 9.5 3C12.2614 3 14.5 5.23858 14.5 8V13.5C14.5 14.8807 13.3807 16 12 16C10.6193 16 9.5 14.8807 9.5 13.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="clipVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
