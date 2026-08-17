<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BluetoothSearchingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the search waves redraw beside the still rune
// authored from scripts/authored
const wavesVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M9.9975 11.9989L13.4163 8.58014C14.1536 7.84283 14.5223 7.47417 14.4976 7.02788C14.4729 6.58159 14.0653 6.25542 13.2501 5.60308C11.8375 4.47274 11.1312 3.90757 10.5644 4.17997C9.9975 4.45238 9.9975 5.35568 9.9975 7.16228V11.9989ZM9.9975 11.9989L9.99611 12.0003M9.9975 11.9989V12.0017M9.99611 12.0003L4.99609 17.0003M9.99611 12.0003L9.9975 12.0017M9.99611 12.0003L4.99609 7.0003M9.9975 12.0017V16.8384C9.9975 18.645 9.9975 19.5483 10.5644 19.8207C11.1312 20.0931 11.8375 19.5279 13.2501 18.3976C14.0653 17.7452 14.4729 17.419 14.4976 16.9728C14.5223 16.5265 14.1536 16.1578 13.4163 15.4205L9.9975 12.0017Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18.1314 9.49C18.698 10.2006 19.0057 11.0829 19.0039 11.9918C19.0021 12.9006 18.6908 13.7817 18.1214 14.49M14.9961 11.99L14.9961 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wavesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
          </svg>
        </div>
</template>
