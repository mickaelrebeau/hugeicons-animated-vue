<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MarketOrderIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the bars step up one after another to their new highs
// generated from @hugeicons/core-free-icons
const barVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(2.15px) scaleY(0.6)', 'translateY(-0.49px) scaleY(1.08)', 'translateY(0px) scaleY(1)'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 },
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
            <motion.circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5" :variants="barVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M9.5 12.5L5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '7.25px 17px' }" />
            <motion.path d="M18 9.99976V10.0098M21 9.98999V9.99999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 10.01px' }" />
            <motion.path d="M3 10V10.01M6 10.01V10.02" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 10.02px' }" />
            <motion.path d="M12 9.99V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
