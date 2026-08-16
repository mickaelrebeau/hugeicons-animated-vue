<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkflowSquare07Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the workflow propagates from one node to the next
// generated from @hugeicons/core-free-icons
const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.45, ease: 'easeInOut', delay: i * 0.12 },
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
            <motion.path d="M3 5C3 3.58579 3 2.87868 3.43934 2.43934C3.87868 2 4.58579 2 6 2C7.41421 2 8.12132 2 8.56066 2.43934C9 2.87868 9 3.58579 9 5C9 6.41421 9 7.12132 8.56066 7.56066C8.12132 8 7.41421 8 6 8C4.58579 8 3.87868 8 3.43934 7.56066C3 7.12132 3 6.41421 3 5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 5px' }" />
            <motion.path d="M3 19C3 17.5858 3 16.8787 3.43934 16.4393C3.87868 16 4.58579 16 6 16C7.41421 16 8.12132 16 8.56066 16.4393C9 16.8787 9 17.5858 9 19C9 20.4142 9 21.1213 8.56066 21.5607C8.12132 22 7.41421 22 6 22C4.58579 22 3.87868 22 3.43934 21.5607C3 21.1213 3 20.4142 3 19Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 19px' }" />
            <motion.path d="M15 7C15 5.58579 15 4.87868 15.4393 4.43934C15.8787 4 16.5858 4 18 4C19.4142 4 20.1213 4 20.5607 4.43934C21 4.87868 21 5.58579 21 7C21 8.41421 21 9.12132 20.5607 9.56066C20.1213 10 19.4142 10 18 10C16.5858 10 15.8787 10 15.4393 9.56066C15 9.12132 15 8.41421 15 7Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 7px' }" />
            <motion.path d="M6 16V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12px' }" />
            <motion.path d="M18 10C18 11.6569 16.6569 13 15 13H9C7.34315 13 6 14.3431 6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
          </svg>
        </div>
</template>
