<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Recycle02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after refresh: the three segments chase one another around the loop and settle
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-25.3deg)', 'rotate(360deg)'],
    transition: {
      duration: 0.89,
      times: [0, 0.2, 1],
      ease: ['easeIn', 'easeOut'],
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
            <motion.path d="M10.8386 19.7631H16.4671C19.3324 19.7631 20.7651 19.7631 21.4622 19.0038C21.6578 18.7907 21.8093 18.544 21.9087 18.2766C22.2627 17.3239 21.567 16.1237 20.1754 13.7234M10.8386 19.7631L13.7564 17.5262M10.8386 19.7631L13.7564 22M18.4896 10.8154L15.507 5.6705C14.2306 3.4687 13.5924 2.36781 12.7003 2.10134C12.248 1.96622 11.7634 1.96622 11.3111 2.10134C10.419 2.36781 9.78081 3.4687 8.50438 5.6705M18.4896 10.8154L15.0117 9.50645M18.4896 10.8154L19.0588 7.27638M6.81856 8.57849L3.73542 13.8968C2.43531 16.1395 1.78525 17.2608 2.06354 18.1613C2.17186 18.5119 2.36819 18.8316 2.63534 19.0926C3.32163 19.7631 4.66018 19.7631 7.33728 19.7631M6.81856 8.57849L7.36018 12.1215M6.81856 8.57849L3.33053 9.8626" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
