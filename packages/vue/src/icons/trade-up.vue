<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TradeUpIcon' })

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
    transform: ['translateY(2.42px) scaleY(0.6)', 'translateY(-0.55px) scaleY(1.08)', 'translateY(0px) scaleY(1)'],
    transition: { duration: 0.53, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 },
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
            <motion.path d="M20 13V8H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 13px' }" />
            <motion.path d="M20 8L15 13C14.1174 13.8826 13.6762 14.3238 13.1346 14.3726C13.045 14.3807 12.955 14.3807 12.8654 14.3726C12.3238 14.3238 11.8826 13.8826 11 13C10.1174 12.1174 9.67615 11.6762 9.13457 11.6274C9.04504 11.6193 8.95496 11.6193 8.86543 11.6274C8.32385 11.6762 7.88256 12.1174 7 13L4 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
          </svg>
        </div>
</template>
