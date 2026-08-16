<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Parabola03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the curve draws from its vertex outward to both arms
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.35px) scale(0.74)', 'translateY(-0.39px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.46, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
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
            <motion.path d="M21 2C21 10.2843 16.9706 17 12 17C7.02944 17 3 10.2843 3 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.5px' }" />
            <motion.path d="M2 20H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M9.5 4.5C11.1 2.68572 11.45 2 12 2M14.5 4.5C12.9 2.68572 12.55 2 12 2M12 2V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
