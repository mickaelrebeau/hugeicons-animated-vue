<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MushroomIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the mushroom sprouts: the cap pushes up from the stem
// authored from scripts/authored
const stemVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 1.44px) scaleY(0.7)',
      'translate(0px, -0.48px) scaleY(1.1)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
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

const capVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.18px)',
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
            <motion.path d="M10.2762 13C12 16 8.67845 17.3826 9.02566 19.2747C9.43204 21.4891 11.7394 22.6415 13.4795 21.6298C15.9467 20.1953 14.8948 14.8029 13.9117 13.0196" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 17.8px' }" />
            <motion.path d="M12.0153 2C7.3429 2 3.53836 4.64819 3.01988 9.03138C2.29466 15.1623 21.6547 13.4713 20.9829 8.81893C20.3684 4.56276 16.6118 2 12.0153 2Z" stroke="currentColor" stroke-width="1.5" :variants="capVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.6px' }" />
            <motion.path d="M16 6C17 6 18 7 18 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="capVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 7px' }" />
          </svg>
        </div>
</template>
