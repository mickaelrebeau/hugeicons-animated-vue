<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Route02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the route draws from origin to destination
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
      duration: 0.45,
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
    transition: { duration: 0.45, ease: 'easeInOut', delay: i * 0.12 },
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
            <motion.path d="M18.7185 10.7151C18.5258 10.8979 18.2682 11 18.0001 11C17.732 11 17.4744 10.8979 17.2817 10.7151C15.5167 9.03169 13.1515 7.15111 14.305 4.42085C14.9286 2.94462 16.4257 2 18.0001 2C19.5745 2 21.0715 2.94462 21.6952 4.42085C22.8472 7.14767 20.4878 9.03749 18.7185 10.7151Z" stroke="currentColor" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 6.5px' }" />
            <motion.path d="M18.1348 6H18.0098M18.2598 6C18.2598 6.13807 18.1478 6.25 18.0098 6.25C17.8717 6.25 17.7598 6.13807 17.7598 6C17.7598 5.86193 17.8717 5.75 18.0098 5.75C18.1478 5.75 18.2598 5.86193 18.2598 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18.01px 6px' }" />
            <motion.circle cx="5" cy="19" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 19px' }" />
            <motion.path d="M11 7H9.5C7.567 7 6 8.34315 6 10C6 11.6569 7.567 13 9.5 13H12.5C14.433 13 16 14.3431 16 16C16 17.6569 14.433 19 12.5 19H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 13px' }" />
            <motion.path d="M18.1348 6H18.0098M18.2598 6C18.2598 6.13807 18.1478 6.25 18.0098 6.25C17.8717 6.25 17.7598 6.13807 17.7598 6C17.7598 5.86193 17.8717 5.75 18.0098 5.75C18.1478 5.75 18.2598 5.86193 18.2598 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18.01px 6px' }" />
          </svg>
        </div>
</template>
