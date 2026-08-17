<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AudioBook03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the speaker cone pulses a beat out of the page, bookmark answering
// authored from scripts/authored
const curlVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-6deg)', 'rotate(12deg)', 'rotate(-2deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.52,
      delay: 0.14,
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

const speakerVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.22)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.58,
      times: [0, 0.14, 0.62, 1],
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
            <path d="M20 22H6C4.89543 22 4 21.1046 4 20M4 20C4 18.8954 4.89543 18 6 18H20V6C20 4.11438 20 3.17157 19.4142 2.58579C18.8284 2 17.8856 2 16 2H10C7.17157 2 5.75736 2 4.87868 2.87868C4 3.75736 4 5.17157 4 8V20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="curlVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 22px' }" />
            <motion.path d="M11.5 8.55078H10.5C10.0341 8.55078 9.80109 8.55078 9.61732 8.6269C9.37229 8.7284 9.17761 8.92307 9.07612 9.1681C9 9.35187 9 9.58484 9 10.0508C9 10.5167 9 10.7497 9.07612 10.9335C9.17761 11.1785 9.37229 11.3732 9.61732 11.4747C9.80109 11.5508 10.0341 11.5508 10.5 11.5508H11.5L15 14V6L11.5 8.55078Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="speakerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 10px' }" />
          </svg>
        </div>
</template>
