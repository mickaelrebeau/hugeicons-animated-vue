<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ToyTrainIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the toy train chugs forward, its chimney puffing
// authored from scripts/authored
const vehicleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, 0px)',
      'translate(-0.18px, 0px)',
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

const puffVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, -0.9px) scale(1)',
      'translate(0px, -1.8px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      times: [0, 0.16, 0.42, 1],
      ease: [
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
            <motion.circle cx="7" cy="18" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18px' }" />
            <motion.circle cx="17" cy="18" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 18px' }" />
            <motion.path d="M2 4H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 4px' }" />
            <motion.path d="M6 8H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 8px' }" />
            <motion.path d="M15 12.5H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.3px 12.5px' }" />
            <motion.path d="M3 4V16C3 16.465 3 16.6975 3.05111 16.8882C3.18981 17.4059 3.59413 17.8102 4.11177 17.9489C4.30252 18 4.53501 18 5 18M12 18V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 11px' }" />
            <motion.path d="M9 18H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M12 10H16.8604C18.2244 10 18.5541 10.2703 18.8216 11.6078C18.9188 12.0942 18.8372 12.466 19.3412 12.5064C20.1829 12.574 20.7739 13.1392 21.0909 13.8787C21.5458 14.9402 22 15.8324 22 17C22 17.4714 22 17.7071 21.8536 17.8536C21.7071 18 21.4714 18 21 18H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 14px' }" />
            <motion.path d="M16 10V7M16 7H15M16 7H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 8.5px' }" />
            <motion.circle cx="16" cy="5" r="0.7" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puffVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
