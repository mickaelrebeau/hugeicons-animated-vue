<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HierarchySquare06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the hierarchy resolves from parent to children
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.61px) rotate(-1.89deg)', 'translateY(0.38px) rotate(0.66deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.53px) scale(0.74)', 'translateY(-0.44px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.51, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
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
            <motion.path d="M10 2H14C15.8152 2 16 2.92494 16 4.5C16 6.07506 15.8152 7 14 7H10C8.1848 7 8 6.07506 8 4.5C8 2.92494 8.1848 2 10 2Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 19.5C2 18.3215 2 17.7322 2.36612 17.3661C2.73223 17 3.32149 17 4.5 17C5.67851 17 6.26777 17 6.63388 17.3661C7 17.7322 7 18.3215 7 19.5C7 20.6785 7 21.2678 6.63388 21.6339C6.26777 22 5.67851 22 4.5 22C3.32149 22 2.73223 22 2.36612 21.6339C2 21.2678 2 20.6785 2 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 19.5px' }" />
            <motion.path d="M17 19.5C17 18.3215 17 17.7322 17.3661 17.3661C17.7322 17 18.3215 17 19.5 17C20.6785 17 21.2678 17 21.6339 17.3661C22 17.7322 22 18.3215 22 19.5C22 20.6785 22 21.2678 21.6339 21.6339C21.2678 22 20.6785 22 19.5 22C18.3215 22 17.7322 22 17.3661 21.6339C17 21.2678 17 20.6785 17 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 19.5px' }" />
            <motion.path d="M14.5 12.5C14.5 13.8807 13.3807 15 12 15C10.6193 15 9.5 13.8807 9.5 12.5C9.5 11.1193 10.6193 10 12 10C13.3807 10 14.5 11.1193 14.5 12.5Z" stroke="currentColor" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M12 7V10M9.5 13L4.5 17M14.5 13L19.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
