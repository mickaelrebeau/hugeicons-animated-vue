<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SignalLow01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the signal travels from its source toward the strongest bar
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.75px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 1.02, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M6 10L6 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M6.80844 9.28111C6.43534 9.76037 6.2488 10 6 10C5.7512 10 5.56466 9.76037 5.19156 9.28112L4.44578 8.32312C3.37255 6.94451 2.83594 6.25521 3.04429 5.68812C3.06552 5.63034 3.0916 5.57458 3.12224 5.52145C3.423 5 4.282 5 6 5C7.718 5 8.577 5 8.87776 5.52145C8.9084 5.57458 8.93448 5.63034 8.95571 5.68812C9.16406 6.25521 8.62745 6.94451 7.55422 8.32312L6.80844 9.28111Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M10 13V19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M13 19L14 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M17 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M21 19L22 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
