<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileQuestionMarkIcon' })

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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
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
            <motion.path d="M3.5 14.5C3.5 13.1193 4.6193 12 6 12C7.3807 12 8.5 13.1193 8.5 14.5C8.5 15.3569 8.06886 16.1131 7.41166 16.5636C6.72833 17.0319 6 17.6716 6 18.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 15.25px' }" />
            <motion.path d="M6.125 21.75H6M6.25 21.75C6.25 21.8881 6.13807 22 6 22C5.86193 22 5.75 21.8881 5.75 21.75C5.75 21.6119 5.86193 21.5 6 21.5C6.13807 21.5 6.25 21.6119 6.25 21.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 21.75px' }" />
            <motion.path d="M13.5 2.5V3C13.5 5.82843 13.5 7.24264 14.3787 8.12132C15.2574 9 16.6716 9 19.5 9H20M4.50394 7.98123C4.52397 5.69117 4.64575 4.40752 5.38607 3.48933C5.56507 3.26731 5.76731 3.06508 5.98932 2.88607C7.0883 2 8.71081 2 11.9558 2C12.6614 2 13.0141 2 13.3372 2.11401C13.4044 2.13772 13.4702 2.165 13.5345 2.19575C13.8435 2.34355 14.093 2.593 14.5919 3.09188L19.3284 7.82843C19.9065 8.40649 20.1955 8.69552 20.3478 9.06306C20.5 9.4306 20.5 9.83935 20.5 10.6569V14C20.5 17.7712 20.5 19.6569 19.3284 20.8284C18.1568 22 16.2712 22 12.5 22C11.7645 22 11.1007 22 10.5 21.9913" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 12px' }" />
          </svg>
        </div>
</template>
