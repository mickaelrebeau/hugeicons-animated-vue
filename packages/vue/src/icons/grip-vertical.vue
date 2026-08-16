<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GripVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after more-horizontal: the repeated points of the grip vertical answer in spatial order
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.63px) scale(1.2)', 'translateY(0.38px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.44, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M8.5 19.5V20M9.5 20C9.5 20.5523 9.05228 21 8.5 21C7.94772 21 7.5 20.5523 7.5 20C7.5 19.4477 7.94772 19 8.5 19C9.05228 19 9.5 19.4477 9.5 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 20px' }" />
            <motion.path d="M15.5 19.5V20M16.5 20C16.5 20.5523 16.0523 21 15.5 21C14.9477 21 14.5 20.5523 14.5 20C14.5 19.4477 14.9477 19 15.5 19C16.0523 19 16.5 19.4477 16.5 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 20px' }" />
            <motion.path d="M8.5 3.5V4M9.5 4C9.5 4.55228 9.05228 5 8.5 5C7.94772 5 7.5 4.55228 7.5 4C7.5 3.44772 7.94772 3 8.5 3C9.05228 3 9.5 3.44772 9.5 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 4px' }" />
            <motion.path d="M8.5 11.5V12M9.5 12C9.5 12.5523 9.05228 13 8.5 13C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11C9.05228 11 9.5 11.4477 9.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 12px' }" />
            <motion.path d="M15.5 3.5V4M16.5 4C16.5 4.55228 16.0523 5 15.5 5C14.9477 5 14.5 4.55228 14.5 4C14.5 3.44772 14.9477 3 15.5 3C16.0523 3 16.5 3.44772 16.5 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 4px' }" />
            <motion.path d="M15.5 11.5V12M16.5 12C16.5 12.5523 16.0523 13 15.5 13C14.9477 13 14.5 12.5523 14.5 12C14.5 11.4477 14.9477 11 15.5 11C16.0523 11 16.5 11.4477 16.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 12px' }" />
          </svg>
        </div>
</template>
