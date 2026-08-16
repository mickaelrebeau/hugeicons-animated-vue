<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiWebBrowsingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the intelligence points answer one another instead of pulsing as a single badge
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.54px) scale(1.2)', 'translateY(0.36px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.42, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M11.5379 8.32172C11.6966 7.89276 12.3034 7.89276 12.4621 8.32172L13.1735 10.2443C13.2733 10.514 13.486 10.7267 13.7557 10.8265L15.6783 11.5379C16.1072 11.6966 16.1072 12.3034 15.6783 12.4621L13.7557 13.1735C13.486 13.2733 13.2733 13.486 13.1735 13.7557L12.4621 15.6783C12.3034 16.1072 11.6966 16.1072 11.5379 15.6783L10.8265 13.7557C10.7267 13.486 10.514 13.2733 10.2443 13.1735L8.32172 12.4621C7.89276 12.3034 7.89276 11.6966 8.32172 11.5379L10.2443 10.8265C10.514 10.7267 10.7267 10.514 10.8265 10.2443L11.5379 8.32172Z" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 8C8.67327 4.46819 10.2109 2 12 2C13.7891 2 15.3267 4.46819 16 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5px' }" />
            <motion.path d="M8 16C8.67327 19.5318 10.2109 22 12 22C13.7891 22 15.3267 19.5318 16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <motion.path d="M2 12H4.5M22 12H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
