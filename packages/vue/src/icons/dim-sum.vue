<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DimSumIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the dumpling hops and the chopsticks follow
// authored from scripts/authored
const stickVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.06,
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

const dumplingVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <motion.path d="M13.5 8.5L22 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 5.8px' }" />
            <motion.path d="M8 17L22 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 13px' }" />
            <motion.path d="M15.5525 12.6975C15.2987 12.0688 14.9493 11.4609 14.5214 10.9028C12.5803 8.57474 12.0206 6.80237 12.0171 6C11.9582 7.60728 9.99859 8.47735 9.012 7C8.02541 8.47735 6.06578 7.60728 6.00686 6C6.00336 6.80237 5.44368 8.57474 3.50257 10.9028C2.56153 12.1304 2 13.5985 2 15C2 18.3137 5.13938 21 9.012 21C12.6878 21 15.7031 18.5798 16 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dumplingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 13.5px' }" />
            <motion.path d="M7.5 10.5L7 11.5M10.5 10.5L11 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dumplingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 11px' }" />
          </svg>
        </div>
</template>
