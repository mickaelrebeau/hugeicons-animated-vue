<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorProgress04Icon' })

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
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.85px) scaleX(0.9) scaleY(1.04)', 'translateX(2.12px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M8.0469 3.44865L13.4101 5.54728L13.4101 5.54728C16.5034 6.75771 18.05 7.36293 17.9988 8.32296C17.9475 9.28299 16.3334 9.7232 13.1051 10.6036C12.1439 10.8658 11.6633 10.9969 11.3301 11.3301C10.9969 11.6633 10.8658 12.1439 10.6036 13.1051C9.7232 16.3334 9.28299 17.9475 8.32296 17.9988C7.36293 18.05 6.75771 16.5034 5.54728 13.4101L5.54728 13.4101L3.44865 8.0469C2.18138 4.80831 1.54774 3.18901 2.36837 2.36837C3.18901 1.54774 4.80831 2.18138 8.0469 3.44865Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '1.55px 9.8px' }" />
            <motion.path d="M17.5 13C17.5 13 16.5 13.8182 16.5 15.4545C16.5 17.0909 18.5 17.9091 18.5 19.5455C18.5 21.1818 17.5 22 17.5 22M17.5 13C15.0147 13 13 15.0147 13 17.5M17.5 13C19.9853 13 22 15.0147 22 17.5M17.5 22C19.9853 22 22 19.9853 22 17.5M17.5 22C15.0147 22 13 19.9853 13 17.5M22 17.5C22 17.5 21.1818 16.5 19.5455 16.5C17.9091 16.5 17.0909 18.5 15.4545 18.5C13.8182 18.5 13 17.5 13 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '1.55px 9.8px' }" />
          </svg>
        </div>
</template>
