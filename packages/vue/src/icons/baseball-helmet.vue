<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BaseballHelmetIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the helmet nods on its brim, then seats
// authored from scripts/authored
const shellVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.94px, 0.05px) rotate(6deg)',
      'translate(-0.78px, 0.03px) rotate(-5deg)',
      'translate(0.31px, 0.01px) rotate(2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M19.5 8.5C18 5 14.9924 3 11.4046 3C6.21058 3 2 7.24151 2 12.4737C2 15.8912 3.79635 18.886 6.48977 20.5523C7.06928 20.9108 7.54664 21 8.22657 21H14.763C16.1727 21 17.3155 19.8807 17.3155 18.5C17.3155 17.1193 16.1727 16 14.763 16C14.3687 16 13.6311 16.1485 13.3534 15.8267C13.2038 15.6533 13.2359 15.4366 13.3 15.0031C13.7388 12.0363 16.2376 11.5 19.4564 11.5C20.2168 11.5 20.9772 10.655 21.5235 9.86188C21.9052 9.30765 22.096 9.03053 21.952 8.76527C21.808 8.5 21.4444 8.5 20.7171 8.5H19.5ZM19.5 8.5H15.0693" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shellVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M15.0078 18.5L14.9988 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
