<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GitPullRequestDraftIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the branch signal travels from root to each commit node
// generated from @hugeicons/core-free-icons
const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.46,
      ease: 'easeOut',
    },
  },
}

const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.43, ease: 'easeInOut', delay: i * 0.12 },
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
            <motion.path d="M6 8L6 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12px' }" />
            <motion.circle cx="6" cy="18" r="2" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 18px' }" />
            <motion.circle cx="6" cy="6" r="2" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 6px' }" />
            <motion.circle cx="18" cy="18" r="2" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 18px' }" />
            <motion.path d="M18.125 11H18M18.25 11C18.25 11.1381 18.1381 11.25 18 11.25C17.8619 11.25 17.75 11.1381 17.75 11C17.75 10.8619 17.8619 10.75 18 10.75C18.1381 10.75 18.25 10.8619 18.25 11Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 11px' }" />
            <motion.path d="M18.125 6H18M18.25 6C18.25 6.13807 18.1381 6.25 18 6.25C17.8619 6.25 17.75 6.13807 17.75 6C17.75 5.86193 17.8619 5.75 18 5.75C18.1381 5.75 18.25 5.86193 18.25 6Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 6px' }" />
          </svg>
        </div>
</template>
