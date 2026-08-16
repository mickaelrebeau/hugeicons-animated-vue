<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Blockchain04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the transaction travels block by block through the chain
// generated from @hugeicons/core-free-icons
const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.48, ease: 'easeInOut', delay: i * 0.12 },
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
      duration: 0.48,
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
            <motion.path d="M3.43934 8.56066C3.87868 9 4.58579 9 6 9C7.41421 9 8.12132 9 8.56066 8.56066C9 8.12132 9 7.41421 9 6C9 4.58579 9 3.87868 8.56066 3.43934C8.12132 3 7.41421 3 6 3C4.58579 3 3.87868 3 3.43934 3.43934C3 3.87868 3 4.58579 3 6C3 7.41421 3 8.12132 3.43934 8.56066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 6px' }" />
            <motion.path d="M15.4393 8.56066C15.8787 9 16.5858 9 18 9C19.4142 9 20.1213 9 20.5607 8.56066C21 8.12132 21 7.41421 21 6C21 4.58579 21 3.87868 20.5607 3.43934C20.1213 3 19.4142 3 18 3C16.5858 3 15.8787 3 15.4393 3.43934C15 3.87868 15 4.58579 15 6C15 7.41421 15 8.12132 15.4393 8.56066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 6px' }" />
            <motion.path d="M15.4393 20.5607C15.8787 21 16.5858 21 18 21C19.4142 21 20.1213 21 20.5607 20.5607C21 20.1213 21 19.4142 21 18C21 16.5858 21 15.8787 20.5607 15.4393C20.1213 15 19.4142 15 18 15C16.5858 15 15.8787 15 15.4393 15.4393C15 15.8787 15 16.5858 15 18C15 19.4142 15 20.1213 15.4393 20.5607Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18px' }" />
            <motion.path d="M3.43934 20.5607C3.87868 21 4.58579 21 6 21C7.41421 21 8.12132 21 8.56066 20.5607C9 20.1213 9 19.4142 9 18C9 16.5858 9 15.8787 8.56066 15.4393C8.12132 15 7.41421 15 6 15C4.58579 15 3.87868 15 3.43934 15.4393C3 15.8787 3 16.5858 3 18C3 19.4142 3 20.1213 3.43934 20.5607Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 18px' }" />
            <motion.path d="M12 6H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 6px' }" />
            <motion.path d="M15 18H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 18px' }" />
            <motion.path d="M18 12L18 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 10.5px' }" />
            <motion.path d="M6 15L6 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 13.5px' }" />
          </svg>
        </div>
</template>
