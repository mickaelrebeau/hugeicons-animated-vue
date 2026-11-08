<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StructureFailIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the X twists on the root and the branches rattle
// authored from scripts/authored
const nodeVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-4deg) scale(0.97)',
      'rotate(3.2deg) scale(1.03)',
      'rotate(-1.2deg) scale(0.995)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.56, delay: 0.14, times: [0, 0.2, 0.46, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const xVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M15.0157 5C15.0157 3.58579 15.0157 2.87868 15.5273 2.43934C16.0388 2 16.8622 2 18.509 2C20.1557 2 20.9791 2 21.4906 2.43934C22.0022 2.87868 22.0022 3.58579 22.0022 5C22.0022 6.41421 22.0022 7.12132 21.4906 7.56066C20.9791 8 20.1557 8 18.509 8C16.8622 8 16.0388 8 15.5273 7.56066C15.0157 7.12132 15.0157 6.41421 15.0157 5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 5px' }" />
            <motion.path d="M15.0157 19C15.0157 17.5858 15.0157 16.8787 15.5273 16.4393C16.0388 16 16.8622 16 18.509 16C20.1557 16 20.9791 16 21.4906 16.4393C22.0022 16.8787 22.0022 17.5858 22.0022 19C22.0022 20.4142 22.0022 21.1213 21.4906 21.5607C20.9791 22 20.1557 22 18.509 22C16.8622 22 16.0388 22 15.5273 21.5607C15.0157 21.1213 15.0157 20.4142 15.0157 19Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 19px' }" />
            <motion.path d="M8.54121 10.4825L5.52337 13.4949M8.54121 13.4949L5.52337 10.4825" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <path d="M7.04533 17.0314C9.81011 17.0314 12.0103 14.7709 12.0103 11.9931C12.0103 9.21534 9.76898 6.9635 7.00421 6.9635M7.04533 17.0314C4.28056 17.0314 1.99814 14.7709 1.99814 11.9931C1.99814 9.21534 4.23943 6.9635 7.00421 6.9635M7.04533 17.0314C6.9757 19.1612 8.53182 19.9388 9.63988 19.9795H12.0103M7.00421 6.9635C6.93386 4.80343 8.51708 4.04384 9.63989 3.99609H12.021" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
