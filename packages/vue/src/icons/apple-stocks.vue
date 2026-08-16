<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AppleStocksIcon' })

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
    transform: ['translateY(2.4px) scaleY(0.6)', 'translateY(-0.54px) scaleY(1.08)', 'translateY(0px) scaleY(1)'],
    transition: { duration: 0.52, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 },
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
            <motion.path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M2.5 14.5H3.03875C3.51106 14.5 3.74721 14.5 3.95256 14.4013C4.15791 14.3026 4.30544 14.1182 4.60049 13.7494L6 12L7.5 14.5L9 11L11.5 16L15 9L17 12.5L18.5 11L19.9453 13.168C20.1973 13.546 20.3233 13.735 20.5074 13.8494C20.544 13.8721 20.582 13.8925 20.6212 13.9103C20.8185 14 21.0457 14 21.5 14" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M15 2.5V5.5M15 21.5V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 21.5px' }" />
            <motion.circle cx="15" cy="9" r="1" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 10px' }" />
          </svg>
        </div>
</template>
