<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Structure04Icon' })

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
            <motion.path d="M2 12C2 9.518 2.518 9 5 9H7C9.482 9 10 9.518 10 12C10 14.482 9.482 15 7 15H5C2.518 15 2 14.482 2 12Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 12px' }" />
            <motion.path d="M14 7C14 4.518 14.518 4 17 4H19C21.482 4 22 4.518 22 7C22 9.482 21.482 10 19 10H17C14.518 10 14 9.482 14 7Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 7px' }" />
            <motion.path d="M14 17C14 14.518 14.518 14 17 14H19C21.482 14 22 14.518 22 17C22 19.482 21.482 20 19 20H17C14.518 20 14 19.482 14 17Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17px' }" />
            <motion.path d="M14 7L11 12L14 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 12px' }" />
          </svg>
        </div>
</template>
