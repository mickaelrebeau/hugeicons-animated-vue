<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MonasIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame on the monument flickers
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'scaleY(1) skewX(0deg)',
      'scaleY(1.1) skewX(-4deg)',
      'scaleY(0.94) skewX(3deg)',
      'scaleY(1.04) skewX(-1deg)',
      'scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <motion.path d="M13 7C13.5 6.5 14 5.61496 14 5C14 3.61929 12 2 12 2C12 2 10 3.61929 10 5C10 5.61496 10.5 6.5 11 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <path d="M9.5 7H14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M11 7L9 17M13 7L15 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7.42153 20.1014C6.75257 18.7451 5.65909 17.3295 5 17H19C18.3409 17.3295 17.2474 18.7451 16.5785 20.1014C16.0533 21.1661 15.7908 21.6984 15.5483 21.8492C15.3058 22 14.8705 22 14 22H10C9.12949 22 8.69423 22 8.45174 21.8492C8.20925 21.6984 7.94667 21.1661 7.42153 20.1014Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 22V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
