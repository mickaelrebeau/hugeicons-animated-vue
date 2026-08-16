<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkoutKickingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the load dips, drives up, and comes back under control
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.02px) scaleY(0.94)', 'translateY(-2.6px) scaleY(1.04)', 'translateY(-2.23px) scaleY(1)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.87,
      times: [0, 0.18, 0.5, 0.68, 1],
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
            <motion.path d="M7 5.5C7 6.32843 6.32843 7 5.5 7C4.67157 7 4 6.32843 4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.99px 21px' }" />
            <motion.path d="M8.94848 14H8.13896C7.326 14 6.91951 14 6.63846 13.763C6.3574 13.526 6.29058 13.127 6.15693 12.3288L6.08019 11.8705C6.00839 11.4417 5.97249 11.2273 6.02497 11.0231C6.07746 10.8188 6.21238 10.6479 6.48221 10.3061L7.73131 8.72371M9.78571 6L8.69731 7.5L7.73131 8.72371M9.78571 6L11.9625 3M9.78571 6L14.2859 9.5M14.2859 9.5L20 3M14.2859 9.5L12.9672 12.5M7.73131 8.72371L12.9672 12.5M12.9672 12.5V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.99px 21px' }" />
          </svg>
        </div>
</template>
