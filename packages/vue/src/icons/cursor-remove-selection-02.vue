<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorRemoveSelection02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after minus-sign-circle: the remove mark pinches short while the host shape recoils
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.49,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const minusVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.35)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.45,
      ease: 'easeOut',
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
            <motion.path d="M9.0469 5.44865L14.4101 7.54728L14.4101 7.54728C17.5034 8.75771 19.05 9.36293 18.9988 10.323C18.9475 11.283 17.3334 11.7232 14.1051 12.6036C13.1439 12.8658 12.6633 12.9969 12.3301 13.3301C11.9969 13.6633 11.8658 14.1439 11.6036 15.1051C10.7232 18.3334 10.283 19.9475 9.32296 19.9988C8.36293 20.05 7.75771 18.5034 6.54728 15.4101L6.54728 15.4101L4.44865 10.0469C3.18138 6.80831 2.54774 5.18901 3.36837 4.36837C4.18901 3.54774 5.80831 4.18138 9.0469 5.44865Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.8px 11.8px' }" />
            <motion.path d="M21 18.5L14 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18.5px' }" />
          </svg>
        </div>
</template>
