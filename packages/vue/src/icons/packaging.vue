<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PackagingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the packaging lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.08deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.49,
      delay: 0.12,
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
            <motion.path d="M17.5 22C17.5 22 17 20 17 17C17 11.4 18.3333 4.66667 19 2C19.6667 5 21 12 21 16C21 17.2201 20.8139 18.6264 20.6688 19.5375C20.5717 20.147 20.1771 20.6614 19.6251 20.9375L17.5 22ZM17.5 22H5.06155C4.14382 22 3.35065 21.3726 3.22748 20.4631C3.11042 19.5988 3 18.4098 3 17C3 11 5 5 5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.7808 2H19C18.9041 2.38357 18.7944 2.85129 18.6769 3.38767C18.4722 4.32192 17.6532 5 16.6968 5H4.3432C4.51032 4.14637 4.67316 3.38764 4.81813 2.75918C4.92127 2.31206 5.32193 2 5.7808 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4.34px 3.5px' }" />
            <motion.path d="M6.02139 18.0739C6.00778 17.7328 6 17.3742 6 17C6 15.3484 6.11597 13.5983 6.29662 11.8829C6.34969 11.379 6.77722 11 7.28398 11H13.27C13.8689 11 14.3328 11.5229 14.2722 12.1187C14.1056 13.7583 14 15.424 14 17C14 17.3197 14.0057 17.628 14.0158 17.9238C14.0358 18.5052 13.5784 19 12.9966 19H7.00227C6.47904 19 6.04226 18.5967 6.02139 18.0739Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.17px 15px' }" />
          </svg>
        </div>
</template>
