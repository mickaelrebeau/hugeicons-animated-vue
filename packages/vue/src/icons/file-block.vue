<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileBlockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the block sign rattles on the file
// authored from scripts/authored
const signVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M4 11.0004L4 14.5446C4 17.7896 4 19.4121 4.88607 20.5111C5.06508 20.7331 5.26731 20.9354 5.48933 21.1144C6.58831 22.0004 8.21082 22.0004 11.4558 22.0004C12.1614 22.0004 12.5141 22.0004 12.8372 21.8864C12.9044 21.8627 12.9702 21.8354 13.0345 21.8047C13.3436 21.6569 13.593 21.4074 14.0919 20.9085L18.8284 16.172C19.4065 15.5939 19.6955 15.3049 19.8478 14.9374C20 14.5698 20 14.1611 20 13.3436V10.0004C20 6.22919 20 4.34358 18.8284 3.172C17.7693 2.11284 16.1265 2.01122 13.0345 2.00146M13 21.5004V21.0004C13 18.172 13 16.7578 13.8787 15.8791C14.7574 15.0004 16.1716 15.0004 19 15.0004H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.97487 7.97438C10.6082 7.34101 11 6.46601 11 5.49951C11 3.56651 9.433 1.99951 7.5 1.99951C6.5335 1.99951 5.6585 2.39126 5.02513 3.02464M9.97487 7.97438C9.3415 8.60776 8.4665 8.99951 7.5 8.99951C5.567 8.99951 4 7.43251 4 5.49951C4 4.53301 4.39175 3.65801 5.02513 3.02464M9.97487 7.97438L5.02513 3.02464" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="signVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 5.5px' }" />
          </svg>
        </div>
</template>
