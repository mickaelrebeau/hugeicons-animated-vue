<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CovariateIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after more-horizontal: the repeated points of the covariate answer in spatial order
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.75px) rotate(-2.06deg)', 'translateY(0.41px) rotate(0.72deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.41px) scale(1.2)', 'translateY(0.33px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 17L20 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.375 10.25H7.25M7.5 10.25C7.5 10.3881 7.38807 10.5 7.25 10.5C7.11193 10.5 7 10.3881 7 10.25C7 10.1119 7.11193 10 7.25 10C7.38807 10 7.5 10.1119 7.5 10.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7.25px 10.25px' }" />
            <motion.path d="M12.375 6.25H12.25M12.5 6.25C12.5 6.38807 12.3881 6.5 12.25 6.5C12.1119 6.5 12 6.38807 12 6.25C12 6.11193 12.1119 6 12.25 6C12.3881 6 12.5 6.11193 12.5 6.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12.25px 6.25px' }" />
            <motion.path d="M14.375 15.25H14.25M14.5 15.25C14.5 15.3881 14.3881 15.5 14.25 15.5C14.1119 15.5 14 15.3881 14 15.25C14 15.1119 14.1119 15 14.25 15C14.3881 15 14.5 15.1119 14.5 15.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '14.25px 15.25px' }" />
            <motion.path d="M19.375 11.25H19.25M19.5 11.25C19.5 11.3881 19.3881 11.5 19.25 11.5C19.1119 11.5 19 11.3881 19 11.25C19 11.1119 19.1119 11 19.25 11C19.3881 11 19.5 11.1119 19.5 11.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '19.25px 11.25px' }" />
          </svg>
        </div>
</template>
