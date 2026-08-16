<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Wav02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-down-02: the wav follows the down direction already encoded by its geometry
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(2.71px) scaleX(0.94)', 'translateY(-0.31px) scaleX(1.02)', 'translateY(0.47px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
    transition: {
      duration: 0.51,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M18 11C18 10.1825 18 9.4306 17.8478 9.06306C17.6955 8.69552 17.4065 8.40649 16.8284 7.82843L12.0919 3.09188C11.593 2.593 11.3436 2.34355 11.0345 2.19575C10.9702 2.165 10.9044 2.13772 10.8372 2.11401C10.5141 2 10.1614 2 9.45584 2C6.21082 2 4.58831 2 3.48933 2.88607C3.26731 3.06508 3.06508 3.26731 2.88607 3.48933C2 4.58831 2 6.21082 2 9.45584V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H18M11 2.5V3C11 5.82843 11 7.24264 11.8787 8.12132C12.7574 9 14.1716 9 17 9H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6 14V19L8 16.5L10 19V14M12.5 19L14.25 14H14.75L16.5 19M13.5 17.5H15.5M18 14L19.75 19H20.25L22 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
