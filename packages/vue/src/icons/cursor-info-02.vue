<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorInfo02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the pointer leans into its tip and clicks
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.77px) scaleX(0.9) scaleY(1.04)', 'translateX(1.92px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M10.0469 3.44865L15.4101 5.54728L15.4101 5.54728C18.5034 6.75771 20.05 7.36293 19.9988 8.32296C19.9475 9.28299 18.3334 9.7232 15.1051 10.6036C14.1439 10.8658 13.6633 10.9969 13.3301 11.3301C12.9969 11.6633 12.8658 12.1439 12.6036 13.1051C11.7232 16.3334 11.283 17.9475 10.323 17.9988C9.36293 18.05 8.75771 16.5034 7.54728 13.4101L7.54728 13.4101L5.44865 8.0469C4.18138 4.80831 3.54774 3.18901 4.36837 2.36837C5.18901 1.54774 6.80831 2.18138 10.0469 3.44865Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.55px 9.8px' }" />
            <motion.path d="M18 21.99V22M16 15.9976C16 14.8944 16.8954 14 18 14C19.1046 14 20 14.8944 20 15.9976C20 16.5747 19.755 17.0946 19.3632 17.4593C18.7572 18.0234 18 18.666 18 19.4935" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.55px 9.8px' }" />
          </svg>
        </div>
</template>
