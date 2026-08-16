<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloverIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the clover move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.82px) rotate(-2.14deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M12 10.5L7.89963 6.39963M7.89963 6.39963C6.89316 5.39316 6.89315 3.76133 7.89963 2.75486C8.90611 1.74838 10.5379 1.74838 11.5444 2.75486L12 3.21045L12.4556 2.75486C13.4621 1.74838 15.0939 1.74838 16.1004 2.75486C17.1068 3.76133 17.1068 5.39315 16.1004 6.39963L12 10.5M12 10.5L7.89963 14.6004M12 10.5L16.1004 14.6004M7.89963 6.39963C6.89316 5.39316 5.26133 5.39315 4.25486 6.39963C3.24838 7.40611 3.24838 9.03793 4.25486 10.0444L4.71045 10.5L4.25486 10.9556C3.24838 11.9621 3.24838 13.5939 4.25486 14.6004C5.26133 15.6068 6.89316 15.6068 7.89963 14.6004M16.1004 6.39963C17.1068 5.39315 18.7387 5.39315 19.7451 6.39963C20.7516 7.40611 20.7516 9.03793 19.7451 10.0444L19.2895 10.5L19.7451 10.9556C20.7516 11.9621 20.7516 13.5939 19.7451 14.6004C18.7387 15.6068 17.1068 15.6068 16.1004 14.6004M7.89963 14.6004C6.89316 15.6068 6.89315 17.2387 7.89963 18.2451C8.90611 19.2516 10.5379 19.2516 11.5444 18.2451L12 17.7895L12.4556 18.2451C13.4621 19.2516 15.0939 19.2516 16.1004 18.2451C17.1068 17.2387 17.1068 15.6068 16.1004 14.6004" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.25px' }" />
            <motion.path d="M7.5 15L5.62132 16.8787C4.26306 18.2369 3.5 20.0791 3.5 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.25px' }" />
          </svg>
        </div>
</template>
