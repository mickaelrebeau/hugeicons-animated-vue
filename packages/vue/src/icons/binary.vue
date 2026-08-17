<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BinaryIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// each 1 and its baseline drop in together, the 0s holding
// authored from scripts/authored
const oneTLVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0.00px, -0.19px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.28, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const oneBRVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0.00px, -0.19px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.08,
      times: [0, 0.28, 0.68, 1],
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
            <path d="M19 7.5V5.5C19 4.11929 17.8807 3 16.5 3C15.1193 3 14 4.11929 14 5.5V7.5C14 8.88071 15.1193 10 16.5 10C17.8807 10 19 8.88071 19 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 18.5V16.5C10 15.1193 8.88071 14 7.5 14C6.11929 14 5 15.1193 5 16.5V18.5C5 19.8807 6.11929 21 7.5 21C8.88071 21 10 19.8807 10 18.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.59961 10V4.48779C7.59961 3.61275 7.59961 3.17523 7.32322 3.03665C7.04682 2.89808 6.69775 3.1606 5.99961 3.68562L5.59961 3.98644" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneTLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.6px 6.4px' }" />
            <motion.path d="M16.5 21V15.4878C16.5 14.6127 16.5 14.1752 16.2236 14.0367C15.9472 13.8981 15.5981 14.1606 14.9 14.6856L14.5 14.9864" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneBRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 17.4px' }" />
            <motion.path d="M5.59961 10H9.59961" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneTLVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.6px 10px' }" />
            <motion.path d="M14.5 21H18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="oneBRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 21px' }" />
          </svg>
        </div>
</template>
