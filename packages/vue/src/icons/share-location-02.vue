<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShareLocation02Icon' })

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
            <motion.path d="M11.9999 7.5C9.92887 7.5 8.24994 9.12804 8.24994 11.1363C8.24994 12.2847 8.71869 13.1775 9.65619 13.9751C10.317 14.5372 11.5193 15.7431 11.9999 16.5C12.5049 15.7582 13.6829 14.5372 14.3437 13.9751C15.2812 13.1775 15.7499 12.2847 15.7499 11.1363C15.7499 9.12804 14.071 7.5 11.9999 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.1347 11H12.0097M12.2597 11C12.2597 11.1381 12.1478 11.25 12.0097 11.25C11.8716 11.25 11.7597 11.1381 11.7597 11C11.7597 10.8619 11.8716 10.75 12.0097 10.75C12.1478 10.75 12.2597 10.8619 12.2597 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12.01px 11px' }" />
            <motion.path d="M10 21.8C10.6462 21.9311 11.3151 22 12 22C17.5237 22 22 17.5222 22 12C22 6.47778 17.5237 2 12 2C11.3151 2 10.6462 2.06886 10 2.20004M2.20004 14C2.06886 13.3538 2 12.6849 2 12C2 11.3151 2.06886 10.6462 2.20004 10M6.5 20.353C5.36678 19.6053 4.39469 18.6332 3.64702 17.5M3.64702 6.5C4.39469 5.36678 5.36678 4.39469 6.5 3.64702" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
