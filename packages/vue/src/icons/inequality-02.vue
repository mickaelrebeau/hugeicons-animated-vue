<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Inequality02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the inequality move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.71px) rotate(-2.01deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M21 20H3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 16px' }" />
            <motion.path d="M3 16H17.1622C19.5429 16 20.7332 16 20.9652 15.3728C21.1971 14.7455 20.2628 14.0531 18.3943 12.6682L6.69853 4" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 16px' }" />
          </svg>
        </div>
</template>
