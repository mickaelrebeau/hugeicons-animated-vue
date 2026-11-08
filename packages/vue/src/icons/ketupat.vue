<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'KetupatIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the woven parcel swings from its knot
// authored from scripts/authored
const parcelVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.18px, -0.08px) rotate(8deg)',
      'translate(0.89px, -0.05px) rotate(-6deg)',
      'translate(-0.30px, -0.01px) rotate(2deg)',
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

const knotVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.21px, 0.01px) rotate(-8deg)',
      'translate(0.16px, 0.01px) rotate(6deg)',
      'translate(-0.05px, 0.00px) rotate(-2deg)',
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
            <motion.path d="M17.7749 9.6488L15.8493 7.72321C14.0338 5.90774 13.1261 5 11.9981 5C10.8701 5 9.96237 5.90774 8.1469 7.72321L6.2213 9.6488C4.40583 11.4643 3.49809 12.372 3.49809 13.5C3.49809 14.628 4.40583 15.5357 6.2213 17.3512L8.1469 19.2768C9.96237 21.0923 10.8701 22 11.9981 22C13.1261 22 14.0338 21.0923 15.8493 19.2768L17.7749 17.3512C19.5904 15.5357 20.4981 14.628 20.4981 13.5C20.4981 12.372 19.5904 11.4643 17.7749 9.6488Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="parcelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <motion.path d="M16.7481 8.75L11.9981 13.5M11.9981 13.5L7.24809 18.25M11.9981 13.5L7.24809 8.75M11.9981 13.5L16.7481 18.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="parcelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.5px' }" />
            <motion.path d="M15 2C12.6 2.24 12 4.3 12 5C11.8333 4.4 11 3.2 9 3.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="knotVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
          </svg>
        </div>
</template>
