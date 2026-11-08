<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScribdIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two strokes of the mark slide apart and click back
// authored from scripts/authored
const strokeVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.8px, -0.6px)',
      'translate(-0.12px, 0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const stroke2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-0.8px, 0.6px)',
      'translate(0.12px, -0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <motion.path d="M21.8181 16.9135C21.529 21.3939 18.298 21.7828 17.8843 21.9761C21.5207 16.9135 13.4265 11.766 12.3023 11.1653C11.1781 10.5647 9.67557 9.86998 8.90473 9.36339C7.62719 8.5238 7.174 7.74514 6.83123 7.13602C6.28163 6.15937 6.24663 3.85251 8.70487 3.73238C11.1631 3.61225 12.857 4.63324 12.9692 5.26037C12.7709 6.65093 15.4209 9.19726 17.7283 7.33718C20.3908 5.19091 17.9809 2.1304 16.9247 2C21.5928 2.22844 21.8365 6.07983 21.965 8.11072L21.9651 8.11266C21.9651 8.11266 22.1071 12.4331 21.8181 16.9135Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="strokeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.2px 12px' }" />
            <motion.path d="M5.89221 21.5863C6.26017 18.7986 3.54263 17.6062 2.34281 18.0723C2.34281 18.0723 2 16.6741 2 14.2702V10.1C2.29361 10.9332 3.89608 13.1929 7.9571 15.0752C12.0181 16.9576 12.9787 18.6656 12.9787 19.2348C13.0383 19.7208 12.8844 20.9048 11.737 21.9374C10.0055 22.0232 6.33792 22.102 5.89221 21.5863Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stroke2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 16.1px' }" />
          </svg>
        </div>
</template>
