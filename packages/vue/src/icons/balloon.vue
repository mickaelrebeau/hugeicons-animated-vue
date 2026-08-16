<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BalloonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cloud: it tugs at the tether and drifts a little higher
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.76px)', 'translateY(-3.05px)', 'translateY(-2.28px)', 'translateY(0px)'],
    transition: {
      duration: 0.85,
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
            <motion.path d="M12.5 17C14.5 17 18.5 12.5 18.5 8C18.5 4.68629 15.8137 2 12.5 2C9.18629 2 6.5 4.68629 6.5 8C6.5 12.5 10.5 17 12.5 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
            <motion.path d="M14.5 8C14.5 6.89543 13.6046 6 12.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
            <motion.path d="M5.5 22C5.5 20.8954 6.39543 20 7.5 20H9.5C10.4319 20 10.8978 20 11.2654 19.8478C11.7554 19.6448 12.1448 19.2554 12.3478 18.7654C12.5 18.3978 12.5 17.9319 12.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 17px' }" />
          </svg>
        </div>
</template>
