<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowExpandDiagonal02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-right-02: the mark commits right along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.84px) scaleY(0.94)', 'translateX(-0.33px) scaleY(1.02)', 'translateX(0.49px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
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
            <motion.path d="M16 8L7.99999 16M6.99999 3.23663C6.24939 3.22596 3.7637 2.70959 3.2366 3.23663C2.7096 3.76367 3.226 6.24941 3.2366 7M20.7634 17C20.774 17.7506 21.2904 20.2363 20.7634 20.7634C20.2363 21.2904 17.7506 20.774 17 20.7634M9.00256 9.00714L3.61682 3.62135M20.374 20.374L14.9883 14.9882" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
