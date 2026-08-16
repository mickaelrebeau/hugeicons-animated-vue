<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StructureFolderCircleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the structure resolves from its root toward each branch
// generated from @hugeicons/core-free-icons
const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.46, ease: 'easeInOut', delay: i * 0.12 },
  }),
}

const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
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
            <motion.path d="M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 19px' }" />
            <motion.path d="M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 19px' }" />
            <motion.path d="M19 16C18.8433 13.547 17.9687 13 15.0119 13H8.9881C6.03127 13 5.15669 13.547 5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M12 10H12.5625C14.1425 10 14.9325 10 15.5 9.62549C15.7457 9.46336 15.9566 9.25502 16.1208 9.01238C16.5 8.45188 16.5 7.67163 16.5 6.11111C16.5 5.1748 16.5 4.70665 16.2725 4.37035C16.174 4.22476 16.0474 4.09976 15.9 4.00249C15.5595 3.77778 15.0855 3.77778 14.1375 3.77778H12.6425C12.5126 3.77778 12.4476 3.77778 12.3879 3.76912C12.1645 3.73672 11.9647 3.61544 11.8358 3.43402C11.8014 3.38555 11.7726 3.32861 11.715 3.21472C11.4788 2.74826 11.263 2.27872 10.7397 2.08489C10.5105 2 10.2486 2 9.72492 2C8.90751 2 8.4988 2 8.19213 2.16903C7.97352 2.28952 7.79314 2.46767 7.67114 2.68358C7.5 2.98647 7.5 3.39013 7.5 4.19745V5.55556C7.5 7.65069 7.5 8.69825 8.15901 9.34913C8.81802 10 9.87868 10 12 10Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
          </svg>
        </div>
</template>
