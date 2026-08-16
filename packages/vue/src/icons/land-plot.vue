<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LandPlotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after circle-x: the land plot strikes its two crossing strokes and recoils
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.46,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const markVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(0.86) rotate(-2.15deg)', 'scale(1.08) rotate(0.86deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.54,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M15.4835 11.5L18.9129 13.4117C20.971 14.5591 22.0001 15.1327 22.0001 16.0001C22.0001 16.8675 20.971 17.4412 18.9129 18.5886L14.9668 20.7884C13.5176 21.5962 12.7931 22.0001 12.0001 22.0001C11.2071 22.0001 10.4825 21.5962 9.03335 20.7884L5.08727 18.5886C3.02913 17.4412 2.00006 16.8675 2.00006 16.0001C2.00006 15.1327 3.02913 14.5591 5.08727 13.4117L8.51657 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.75px' }" />
            <motion.path d="M17.25 12.75L6.75 19.25M6.75 12.75L17.25 19.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M12.0001 12V8.46038M12.0001 8.46038L12.0001 4.55707C12.0001 3.12848 12.0001 2.41418 12.4527 2.11609C12.9053 1.818 13.5312 2.12007 14.7831 2.7242L15.5367 3.08788C17.1789 3.88042 18.0001 4.27669 18.0001 4.92076C18.0001 5.56483 17.1789 5.9611 15.5367 6.75364L12.0001 8.46038Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 6.91px' }" />
          </svg>
        </div>
</template>
