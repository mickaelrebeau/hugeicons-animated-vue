<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FilePenIcon' })

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
            <motion.path d="M4.5 13V9.45584C4.5 6.21082 4.5 4.58831 5.38607 3.48933C5.56508 3.26731 5.76731 3.06508 5.98933 2.88607C7.08831 2 8.71082 2 11.9558 2C12.6614 2 13.0141 2 13.3372 2.11401C13.4044 2.13772 13.4702 2.165 13.5345 2.19575C13.8436 2.34355 14.093 2.593 14.5919 3.09188L19.3284 7.82843C19.9065 8.40649 20.1955 8.69552 20.3478 9.06306C20.5 9.4306 20.5 9.83935 20.5 10.6569V14C20.5 17.7712 20.5 19.6569 19.3284 20.8284C18.1569 22 16.2712 22 12.5 22C12.1508 22 11.8178 22 11.5 21.9991M13.5 2.5V3C13.5 5.82843 13.5 7.24264 14.3787 8.12132C15.2574 9 16.6716 9 19.5 9H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 12px' }" />
            <motion.path d="M3.5 22V20.6611C3.5 20.0548 3.74082 19.4735 4.16947 19.0448L8.81022 14.4041C9.06894 14.1453 9.41983 14 9.78571 14C10.1516 14 10.5025 14.1453 10.7612 14.4041L11.0959 14.7388C11.3547 14.9975 11.5 15.3484 11.5 15.7143C11.5 16.0802 11.3547 16.4311 11.0959 16.6898L6.45518 21.3305C6.02653 21.7592 5.44515 22 4.83894 22H3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 18px' }" />
          </svg>
        </div>
</template>
