<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShareLocation01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the signal travels through each connection and reaches every node
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
            <motion.path d="M12.7185 16.2151C12.5258 16.3979 12.2682 16.5 12.0001 16.5C11.732 16.5 11.4744 16.3979 11.2817 16.2151C9.51674 14.5317 7.15154 12.6511 8.30498 9.92085C8.92863 8.44462 10.4257 7.5 12.0001 7.5C13.5745 7.5 15.0715 8.44462 15.6952 9.92085C16.8472 12.6477 14.4878 14.5375 12.7185 16.2151Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M10 21.8C10.6462 21.9311 11.3151 22 12 22C17.5237 22 22 17.5222 22 12C22 6.47778 17.5237 2 12 2C11.3151 2 10.6462 2.06886 10 2.20004M2.20004 14C2.06886 13.3538 2 12.6849 2 12C2 11.3151 2.06886 10.6462 2.20004 10M6.5 20.353C5.36678 19.6053 4.39469 18.6332 3.64702 17.5M3.64702 6.5C4.39469 5.36678 5.36678 4.39469 6.5 3.64702" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.1348 11.5H12.0098M12.2598 11.5C12.2598 11.6381 12.1478 11.75 12.0098 11.75C11.8717 11.75 11.7598 11.6381 11.7598 11.5C11.7598 11.3619 11.8717 11.25 12.0098 11.25C12.1478 11.25 12.2598 11.3619 12.2598 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12.01px 11.5px' }" />
          </svg>
        </div>
</template>
