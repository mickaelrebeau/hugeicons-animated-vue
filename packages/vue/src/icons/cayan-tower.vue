<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CayanTowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tower twists on its axis, its two silhouettes turning against each other
// authored from scripts/authored
const twistVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1.06)', 'scaleX(1)'],
    transition: {
      duration: 0.74,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const windowsVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 1 },
  animate: {
    transform: ['translateX(0px)', 'translateX(0.8px)', 'translateX(0px)', 'translateX(0px)'],
    opacity: [1, 0.2, 1, 1],
    transition: {
      duration: 0.74,
      times: [0, 0.4, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const twist2Variants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.14)', 'scaleX(0.96)', 'scaleX(1)'],
    transition: {
      duration: 0.74,
      times: [0, 0.4, 0.72, 1],
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
            <motion.path d="M18 22C18 19.8333 16.4136 15.3 14.9492 12.5C13.4848 9.7 12.3765 4.33333 11.9697 2L6.47299 4C4.64237 9.5 8.48152 15.6 11.8984 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="twistVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.3px 12px' }" />
            <motion.path d="M10 18H11.5M8 15.0185L10.5 15M7.5 12H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="windowsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 15px' }" />
            <motion.path d="M12 2L17.5719 4C18.5782 7 17.7186 10.362 15.9505 14.4155M6 22C6 20.2797 6.85094 17.152 8 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="twist2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 12px' }" />
            <path d="M4 22L20 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
