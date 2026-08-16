<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse14Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the shell presses under the active button and releases
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.87px) scaleX(0.9) scaleY(1.04)', 'translateX(2.18px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M22 6.16705C21.5817 6.96357 20.6554 7.23648 19.931 6.77661L17.7448 5.38882C16.0959 4.34208 15.2714 3.81871 14.4634 4.05676C13.906 4.22097 13.5066 4.70326 13 5.58178" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '0.89px 12.5px' }" />
            <motion.path d="M5.1851 18.9941C9.48005 21.4312 12.2743 19.1116 14.3687 15.5464C16.463 11.9811 17.1098 8.44303 12.8149 6.00594C8.51993 3.56885 5.72575 5.8884 3.63136 9.45367C1.53697 13.0189 0.890156 16.557 5.1851 18.9941Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '0.89px 12.5px' }" />
            <motion.path d="M11.4883 7.99805L10.4883 9.7301" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '0.89px 12.5px' }" />
          </svg>
        </div>
</template>
