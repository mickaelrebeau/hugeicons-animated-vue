<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SlowWindsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the arcs of the slow winds propagate outward from their geometric source
// generated from @hugeicons/core-free-icons
const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.77px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.91, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
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
            <motion.path d="M21 5.63247C19.8635 4.81397 18.4095 4.81397 17.273 5.63247C16.5877 6.13474 15.6685 6.11614 14.9833 5.61388C13.8468 4.79537 12.3928 4.79537 11.273 5.61388C10.571 6.11614 9.68524 6.11614 9 5.61388" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M3 9.37672C4.16839 10.1953 5.66323 10.1953 6.83162 9.37672C7.53608 8.87443 8.46392 8.87443 9.16838 9.37672C10.3368 10.1953 11.8488 10.2139 13 9.39531" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M21 14.6233C19.8635 13.8047 18.4095 13.8047 17.273 14.6233C16.5877 15.1256 15.6852 15.1256 15 14.6233C13.8635 13.8047 12.3928 13.7861 11.273 14.6047C10.571 15.107 9.68524 15.107 9 14.6047" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M3 18.3767C4.16839 19.1953 5.66323 19.1953 6.83162 18.3767C7.53608 17.8744 8.46392 17.8744 9.16838 18.3767C10.3368 19.1953 11.8488 19.2139 13 18.3953" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
          </svg>
        </div>
</template>
