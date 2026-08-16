<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileCogIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the sheet lifts from its stack while its details follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.78px) rotate(-0.97deg)', 'translateY(0.44px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M6.96161 20C8.06618 20 8.96161 19.1046 8.96161 18C8.96161 16.8954 8.06618 16 6.96161 16M6.96161 20C5.85704 20 4.96161 19.1046 4.96161 18C4.96161 16.8954 5.85704 16 6.96161 16M6.96161 20V22M6.96161 16V14M8.69617 16.9956L10.4282 15.9956M5.23207 18.9956L3.50002 19.9956M8.70118 18.9956L10.4332 19.9956M5.23708 16.9956L3.50502 15.9956" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.97px 18px' }" />
            <motion.path d="M13.5 2.5V3C13.5 5.82843 13.5 7.24264 14.3787 8.12132C15.2574 9 16.6716 9 19.5 9H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.75px 5.75px' }" />
            <motion.path d="M13.5 21.9991C16.6143 21.99 18.2653 21.8915 19.3284 20.8284C20.5 19.6569 20.5 17.7712 20.5 14V10.6569C20.5 9.83935 20.5 9.4306 20.3478 9.06306C20.1955 8.69552 19.9065 8.40649 19.3284 7.82843L14.5919 3.09188C14.093 2.593 13.8436 2.34355 13.5345 2.19575C13.4702 2.165 13.4044 2.13772 13.3372 2.11401C13.0141 2 12.6614 2 11.9558 2C8.71082 2 7.08831 2 5.98933 2.88607C5.76731 3.06508 5.56508 3.26731 5.38607 3.48933C4.5 4.58831 4.5 6.21082 4.5 9.45584V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 12px' }" />
          </svg>
        </div>
</template>
