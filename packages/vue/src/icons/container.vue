<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ContainerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the container take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.74px) rotate(-2.05deg)', 'translateY(0.41px) rotate(0.72deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.27deg)', 'scale(1.1) rotate(2.11deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
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
            <motion.path d="M15 5H9C6.09433 5 4.64149 5 3.62036 5.73563C3.27976 5.981 2.981 6.27976 2.73563 6.62036C2 7.64149 2 9.09433 2 12C2 14.9057 2 16.3585 2.73563 17.3796C2.981 17.7202 3.27976 18.019 3.62036 18.2644C4.64149 19 6.09433 19 9 19H15C17.9057 19 19.3585 19 20.3796 18.2644C20.7202 18.019 21.019 17.7202 21.2644 17.3796C22 16.3585 22 14.9057 22 12C22 9.09433 22 7.64149 21.2644 6.62036C21.019 6.27976 20.7202 5.981 20.3796 5.73563C19.3585 5 17.9057 5 15 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 12px' }" />
            <motion.path d="M14 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 12px' }" />
            <motion.path d="M10 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12px' }" />
            <motion.path d="M6 9V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12px' }" />
          </svg>
        </div>
</template>
