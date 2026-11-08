<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PointingRight05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hand points right and holds while the arrow pops
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.8px, 0px)', 'translate(1.8px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.7,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.16,
      times: [0, 0.34, 0.66, 1],
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
            <motion.path d="M16 13.0004L16 14.0004C16 15.105 15.1046 16.0004 14 16.0004M14 16.0004L13 16.0004M14 16.0004C14.5523 16.0004 15 16.4481 15 17.0004C15 18.105 14.1046 19.0004 13 19.0004M13 19.0004L12 19.0004M13 19.0004C13.5235 19.0004 13.9217 19.4705 13.8356 19.9868L13.7785 20.3292C13.6178 21.2936 12.7834 22.0004 11.8057 22.0004L10.3332 22C8.15984 22 7.07314 22 6.208 21.6689C5.70614 21.4769 5.06612 20.9703 4.60362 20.5652C4.20359 20.2148 3.69618 20 3.1644 20L1.99983 20M14 13.0002L20.5 13.0002C21.3284 13.0002 22 12.3286 22 11.5002C22 10.6718 21.3284 10.0002 20.5 10.0002L10.5376 10L12.163 8.3797C12.8761 7.66877 12.8111 6.49772 12.0235 5.86965C11.4209 5.38907 10.5685 5.3758 9.95109 5.83738L5.35288 9.43707C4.47312 10.1258 3.11711 10.5 1.99983 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.7px' }" />
            <motion.path d="M22 4.5L16 4.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 4.5px' }" />
          </svg>
        </div>
</template>
