<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ImageFlipHorizontalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two halves swap across the vertical axis
// authored from scripts/authored
const halfVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.24px, 0px)',
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

const half2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.6px, 0px)',
      'translate(0.24px, 0px)',
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
            <motion.path d="M5.40887 10.5448L3.33488 14.4677C2.27012 16.4816 1.73775 17.4886 2.13166 18.2453C2.52557 19.002 3.58215 19.002 5.6953 19.002H7.76929C9.05748 19.002 9.70157 19.002 10.1018 18.5604C10.502 18.1189 10.502 17.4082 10.502 15.9869V12.064C10.502 7.57709 10.502 5.33363 9.49221 5.03243C8.48246 4.73124 7.45793 6.66909 5.40887 10.5448Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="halfVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.1px 11.9px' }" />
            <motion.path d="M18.5931 10.5448L20.6671 14.4677C21.7318 16.4816 22.2642 17.4886 21.8703 18.2453C21.4764 19.002 20.4198 19.002 18.3067 19.002L16.2327 19.002C14.9445 19.002 14.3004 19.002 13.9002 18.5604C13.5 18.1189 13.5 17.4082 13.5 15.9869L13.5 12.064C13.5 7.57709 13.5 5.33363 14.5097 5.03243C15.5195 4.73124 16.544 6.66909 18.5931 10.5448Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="half2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.9px 11.9px' }" />
          </svg>
        </div>
</template>
