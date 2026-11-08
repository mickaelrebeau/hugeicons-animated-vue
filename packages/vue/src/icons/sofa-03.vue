<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Sofa03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the backrest leans back and the seat settles
// authored from scripts/authored
const seatVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.6px)',
      'translate(0px, -0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.1,
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

const backVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.17px, 0.01px) rotate(-5deg)',
      'translate(0.12px, 0.00px) rotate(3.5deg)',
      'translate(-0.05px, 0.00px) rotate(-1.5deg)',
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
            <path d="M7 16V19M17 16V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.9996 9.26828C20.043 8.716 18.8198 9.04375 18.2675 10.0003L17.2581 12.3892C17.0078 12.9815 16.9799 13 16.3369 13H7.66304C7.02008 13 6.99218 12.9815 6.74191 12.3893L5.73238 10.0003C5.1801 9.04375 3.95692 8.716 3.00033 9.26828C2.04375 9.82057 1.716 11.0437 2.26828 12.0003C2.69932 12.7469 3.89493 12.6838 4.08847 13.2646C4.5284 14.5848 4.74836 15.2449 5.27216 15.6224C5.79596 16 6.49175 16 7.88331 16H16.1166C17.5082 16 18.204 16 18.7278 15.6224C19.2516 15.2448 19.4716 14.5847 19.9115 13.2645C20.105 12.6838 21.3007 12.7468 21.7316 12.0003C22.2839 11.0437 21.9562 9.82057 20.9996 9.26828Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.4px' }" />
            <motion.path d="M4.5 9L4.54003 8.89326C5.24623 7.01005 5.59933 6.06845 6.37022 5.53422C7.1411 5 8.14674 5 10.158 5H13.842C15.8533 5 16.8589 5 17.6298 5.53422C18.4007 6.06845 18.7538 7.01005 19.46 8.89326L19.5 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="backVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
          </svg>
        </div>
</template>
