<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MouseRightClick02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the right button presses
// authored from scripts/authored
const mouseVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.52px, -0.01px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.17px, -0.01px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
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
            <motion.path d="M13.5 2.09084C12.8345 2.02383 12.1611 2 11.5 2C10.5753 2 9.66267 2.07762 8.7651 2.1882C6.32417 2.48893 4.43061 4.51965 4.24069 6.91118C4.10906 8.56832 4 10.268 4 12C4 13.732 4.10906 15.4317 4.24069 17.0888C4.43061 19.4803 6.32417 21.511 8.7651 21.8118C9.66267 21.9223 10.5753 22 11.5 22C12.4248 22 13.3374 21.9223 14.235 21.8118C16.6758 21.511 18.5695 19.4803 18.7594 17.0888C18.891 15.4317 19 13.732 19 12C19 11.3283 18.9836 10.6614 18.9558 10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12px' }" />
            <path d="M11.5 2L11.5 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18.5 11H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <circle cx="2.5" cy="2.5" r="2.5" transform="matrix(-1 0 0 1 20 2.5)" stroke="currentColor" stroke-width="1.5" />
          </svg>
        </div>
</template>
