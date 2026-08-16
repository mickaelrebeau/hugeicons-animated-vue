<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SignalNo01Icon' })

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
    transform: ['translateY(0.79px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.93, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
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
            <motion.path d="M5 10L5 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M5.80844 9.28111C5.43534 9.76037 5.2488 10 5 10C4.7512 10 4.56466 9.76037 4.19156 9.28112L3.44578 8.32312C2.37255 6.94451 1.83594 6.25521 2.04429 5.68812C2.06552 5.63034 2.0916 5.57458 2.12224 5.52145C2.423 5 3.282 5 5 5C6.718 5 7.577 5 7.87776 5.52145C7.9084 5.57458 7.93448 5.63034 7.95571 5.68812C8.16406 6.25521 7.62745 6.94451 6.55422 8.32312L5.80844 9.28111Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M18.4297 9L12.4297 15M18.4297 15L12.4297 9" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="6" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M12 19L13 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M8 19L9 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M16 19L17 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M20 19L21 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
