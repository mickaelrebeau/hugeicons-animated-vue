<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Bread02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the loaf drops onto the counter and settles with soft weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.54px) scaleY(0.82)', 'translateY(-3.74px) scaleY(1.08)', 'translateY(0.55px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.72,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

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
            <motion.path d="M12 14C12 17 9.76142 17 7 17C4.23858 17 2 17 2 14C2 11 4.23858 7 7 7C9.76142 7 12 11 12 14Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 17px' }" />
            <motion.path d="M7 7H17C19.7614 7 22 11 22 14C22 17 19.7614 17 17 17H7" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 17px' }" />
            <motion.path d="M5.86019 17C7.4363 17 9 16.1 9 14C9 11.9 8.14239 10 6.6451 10C5.14782 10 4.31835 13.97 5.7172 14.5C7.03693 15 7.04538 13 7.04538 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 17px' }" />
          </svg>
        </div>
</template>
