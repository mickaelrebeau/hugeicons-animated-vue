<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PieChart01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the slice pops further out of the pie, then slides back
// authored from scripts/authored
const sliceVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.1px, -1.1px)',
      'translate(-0.165px, 0.165px)',
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
            <path d="M21 12.502C21 17.7487 16.7467 22.002 11.5 22.002C6.25329 22.002 2 17.7487 2 12.502C2 7.25525 6.25329 3.00195 11.5 3.00195" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M13.7046 7.38562L14.5805 4.77321C15.1261 3.14611 15.3989 2.33256 16.2494 2.07407C17.0999 1.81558 17.6633 2.25023 18.79 3.11953C19.5732 3.72378 20.2762 4.42682 20.8805 5.21C21.7498 6.33675 22.1844 6.90012 21.9259 7.75059C21.6674 8.60106 20.8539 8.87386 19.2268 9.41946L16.6144 10.2954C14.7053 10.9356 13.7508 11.2557 13.2475 10.7525C12.7443 10.2492 13.0644 9.2947 13.7046 7.38562Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sliceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 6.5px' }" />
          </svg>
        </div>
</template>
