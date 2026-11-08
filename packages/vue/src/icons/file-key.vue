<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileKeyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the key turns on the corner of the file
// authored from scripts/authored
const keyVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.00px, 0.00px) rotate(-24deg)',
      'translate(0.00px, 0.00px) rotate(8deg)',
      'translate(0.00px, 0.00px) rotate(-3deg)',
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
            <path d="M4.5 14V9.45584C4.5 6.21082 4.5 4.58831 5.38607 3.48933C5.56508 3.26731 5.76731 3.06508 5.98933 2.88607C7.08831 2 8.71082 2 11.9558 2C12.6614 2 13.0141 2 13.3372 2.11401C13.4044 2.13772 13.4702 2.165 13.5345 2.19575C13.8436 2.34355 14.093 2.593 14.5919 3.09188L19.3284 7.82843C19.9065 8.40649 20.1955 8.69552 20.3478 9.06306C20.5 9.4306 20.5 9.83935 20.5 10.6569V14C20.5 17.7712 20.5 19.6569 19.3284 20.8284C18.1569 22 16.2712 22 12.5 22M13.5 2.5V3C13.5 5.82843 13.5 7.24264 14.3787 8.12132C15.2574 9 16.6716 9 19.5 9H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 18.5L11.5 14M10.5 15.5L11.5 16.5M7.5 20C7.5 21.1046 6.60457 22 5.5 22C4.39543 22 3.5 21.1046 3.5 20C3.5 18.8954 4.39543 18 5.5 18C6.60457 18 7.5 18.8954 7.5 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 18px' }" />
          </svg>
        </div>
</template>
