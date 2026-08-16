<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BookHeadphonesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-open: the cover opens from its spine and the pages settle
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateX(0deg) scaleY(1)',
  },
  animate: {
    transform: ['rotateX(0deg) scaleY(1)', 'rotateX(-55deg) scaleY(0.72)', 'rotateX(7.91deg) scaleY(1.04)', 'rotateX(0deg) scaleY(1)'],
    transition: {
      duration: 0.62,
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
            <motion.path d="M11 8V6.5C11 4.01472 13.0147 2 15.5 2C17.9853 2 20 4.01472 20 6.5V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.02px' }" />
            <motion.path d="M11 7.5V9.5C11 9.77614 11.2239 10 11.5 10H12C12.2761 10 12.5 9.77614 12.5 9.5V8C12.5 7.72386 12.2761 7.5 12 7.5H11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.02px' }" />
            <motion.path d="M20 7.5V9.5C20 9.77614 19.7761 10 19.5 10H19C18.7239 10 18.5 9.77614 18.5 9.5V8C18.5 7.72386 18.7239 7.5 19 7.5H20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.02px' }" />
            <motion.path d="M8 2.01758C6.44655 2.06438 5.51998 2.23763 4.87868 2.87893C4 3.75761 4 5.17183 4 8.00025V20.0003M20 22.0003H6C4.89543 22.0003 4 21.1048 4 20.0003M4 20.0003C4 18.8957 4.89543 18.0003 6 18.0003H20V14.0005" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.02px' }" />
            <motion.path d="M19.5 18C19.5 18 18.5 18.7628 18.5 20C18.5 21.2372 19.5 22 19.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.02px' }" />
          </svg>
        </div>
</template>
