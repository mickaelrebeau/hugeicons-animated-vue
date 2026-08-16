<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GameIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after command: the control gives one playful input response and recenters
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8.74deg)', 'rotate(7.64deg)', 'rotate(-4.37deg)', 'rotate(2.18deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M2 14.5C2 11.2125 2 9.56878 2.90796 8.46243C3.07418 8.25989 3.25989 8.07418 3.46243 7.90796C4.56878 7 6.21252 7 9.5 7H14.5C17.7875 7 19.4312 7 20.5376 7.90796C20.7401 8.07418 20.9258 8.25989 21.092 8.46243C22 9.56878 22 11.2125 22 14.5C22 17.7875 22 19.4312 21.092 20.5376C20.9258 20.7401 20.7401 20.9258 20.5376 21.092C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.092C3.25989 20.9258 3.07418 20.7401 2.90796 20.5376C2 19.4312 2 17.7875 2 14.5Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M12 7V5C12 4.44772 12.4477 4 13 4C13.5523 4 14 3.55228 14 3V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M10 16L8.5 14.5M8.5 14.5L7 13M8.5 14.5L7 16M8.5 14.5L10 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M17 15.5L17 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
          </svg>
        </div>
</template>
