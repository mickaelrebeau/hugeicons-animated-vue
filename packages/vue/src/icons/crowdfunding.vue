<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CrowdfundingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after more-horizontal: the repeated points of the crowdfunding answer in spatial order
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.6px) rotate(-1.88deg)', 'translateY(0.38px) rotate(0.66deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.59px) scale(1.2)', 'translateY(0.37px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.43, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.circle cx="12" cy="5" r="3" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="20" r="2" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.circle cx="20" cy="20" r="2" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 20px' }" />
            <motion.circle cx="4" cy="20" r="2" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 20px' }" />
            <motion.path d="M20 15C20 13.8954 18.8807 13 17.5 13H6.5C5.11929 13 4 13.8954 4 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 11L12 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
