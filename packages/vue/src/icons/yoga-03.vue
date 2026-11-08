<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Yoga03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame of the pose sways above the open arms
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.73px, 0.04px) rotate(6deg)',
      'translate(-0.51px, 0.02px) rotate(-4.199999999999999deg)',
      'translate(0.22px, 0.00px) rotate(1.7999999999999998deg)',
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

const armsVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.6px)',
      'translate(0px, 0.09px)',
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
            <motion.path d="M9 10C9 13.866 12 17 12 17C12 17 15 13.866 15 10C15 6.13401 12 3 12 3C12 3 9 6.13401 9 10Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M6.33095 8C4.11419 7.04619 2 7 2 7C2 7 2.09572 11.3814 4.85714 14.1429C7.61857 16.9043 12 17 12 17C12 17 16.3814 16.9043 19.1429 14.1429C21.9043 11.3814 22 7 22 7C22 7 19.8858 7.04619 17.6691 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="armsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <path d="M12.0207 17C11.8544 18.3333 12.6604 21 15.5135 21C17.5093 21 18.5072 19 22 21C21.6 18.9999 20.7998 17.7199 19.6329 17M11.9793 17C12.1456 18.3333 11.3396 21 8.48654 21C6.49068 21 5.49275 19 2 21C2.40005 18.9999 3.20018 17.7199 4.36707 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
