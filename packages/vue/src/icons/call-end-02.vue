<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CallEnd02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the handset falls onto the hook, which dips
// authored from scripts/authored
const handsetVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.24px, 1.94px) rotate(14deg)',
      'translate(-0.39px, 2.47px) rotate(18deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.62, 1],
      ease: [
        'easeIn',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const hookVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.8px)',
      'translate(0px, -0.216px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.46,
      delay: 0.28,
      times: [0, 0.44, 0.72, 1],
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
            <motion.path d="M17.0539 6.02918V8.79278C17.0539 9.35653 17.4143 9.87054 17.9747 10.1385C18.413 10.3481 18.9322 10.6067 19.3546 10.847C19.7452 11.0692 20.293 11.0557 20.6214 10.765L21.5133 9.97573C22.17 9.3945 22.1749 8.44418 21.4501 7.93021C15.9402 4.02326 8.05983 4.02326 2.54993 7.93021C1.82509 8.44418 1.82997 9.3945 2.48673 9.97573L3.3786 10.765C3.70697 11.0557 4.24369 11.0574 4.62554 10.8235C5.0468 10.5655 5.53006 10.3258 5.94613 10.1356C6.54384 9.86234 6.94607 9.3266 6.94607 8.73122V6.02918" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsetVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <motion.path d="M8.5 15.5C9.18814 16.208 11.0197 19 12 19C12.9803 19 14.8119 16.208 15.5 15.5M12 18.5V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hookVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
          </svg>
        </div>
</template>
