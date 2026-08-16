<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Touchpad02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the pad yields beneath a deliberate press
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.82px) scaleX(0.9) scaleY(1.04)', 'translateX(2.06px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M11.1957 14.1439L13 15.7621V7.49993C13 6.6715 13.6716 5.99993 14.5 5.99993C15.3284 5.99993 16 6.6715 16 7.49993V11.982L17.7888 12.2968C19.2636 12.5405 20.001 12.6623 20.5205 13.0049C21.3784 13.571 22 14.421 22 15.6619C22 16.5263 21.806 17.1062 21.3344 18.6642C21.0352 19.6527 20.8855 20.147 20.6416 20.5383C20.2399 21.1825 19.6473 21.6529 18.9653 21.8688C18.551 22 18.0779 22 17.1316 22H16.3295C15.0714 22 14.4424 22 13.8824 21.7458C13.7819 21.7002 13.6838 21.6488 13.5883 21.5917C13.056 21.2734 12.6594 20.7357 11.866 19.6605L9.29778 16.1796C8.90312 15.6447 8.90049 14.8792 9.29146 14.341C9.76138 13.6941 10.6245 13.6048 11.1957 14.1439Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
            <motion.path d="M22 9.99989C22 6.22866 22 4.34304 20.8284 3.17147C19.6569 1.99989 17.7712 1.99989 14 1.99989H10C6.22876 1.99989 4.34315 1.99989 3.17157 3.17147C2 4.34304 2 6.22866 2 9.99989V11.9999C2 13.8637 2 14.7955 2.30448 15.5306C2.71046 16.5107 3.48915 17.2894 4.46927 17.6954C5.05932 17.9398 5.77617 17.988 7 17.9976" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 10px' }" />
          </svg>
        </div>
</template>
