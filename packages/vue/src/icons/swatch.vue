<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SwatchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the swatch take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.44deg)', 'scale(1.1) rotate(2.17deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.59px) rotate(-1.88deg)', 'translateY(0.38px) rotate(0.66deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M16.5551 4C17.0179 4.42885 17.5421 4.96506 18.1713 5.60862C20.0571 7.53758 21 8.50206 21 9.70056C21 10.8991 20.0571 11.8635 18.1713 13.7925L11.7706 20.3396C11.5289 20.5868 11.2709 20.8069 11 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12.5px' }" />
            <motion.path d="M2 16.6153C2 19.5892 4.48731 22 7.55556 22H16.4444C19.0634 22 20.3728 22 21.1864 21.2114C22 20.4229 22 19.1537 22 16.6153C22 16.0078 22 15.4729 21.9888 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 7.55556C2 4.93664 2 3.62718 2.80546 2.81359C3.61091 2 4.90728 2 7.5 2C10.0927 2 11.3891 2 12.1945 2.81359C13 3.62718 13 4.93664 13 7.55556V16.4444C13 19.5127 10.5376 22 7.5 22C4.46243 22 2 19.5127 2 16.4444V7.55556Z" stroke="currentColor" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
            <motion.path d="M7.5 17.5H7.50898" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2 8H13M2 13H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
