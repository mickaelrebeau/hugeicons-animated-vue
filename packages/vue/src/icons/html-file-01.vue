<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HtmlFile01Icon' })

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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.88px) rotate(-1.1deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M19.5 14V10.6569C19.5 9.83935 19.5 9.4306 19.3478 9.06306C19.1955 8.69552 18.9065 8.40649 18.3284 7.82843L13.5919 3.09188C13.093 2.593 12.8436 2.34355 12.5345 2.19575C12.4702 2.165 12.4044 2.13772 12.3372 2.11401C12.0141 2 11.6614 2 10.9558 2C7.71082 2 6.08831 2 4.98933 2.88607C4.76731 3.06508 4.56508 3.26731 4.38607 3.48933C3.5 4.58831 3.5 6.21082 3.5 9.45584V14M12.5 2.5V3C12.5 5.82843 12.5 7.24264 13.3787 8.12132C14.2574 9 15.6716 9 18.5 9H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 8px' }" />
            <motion.path d="M5.5 17V19.5M5.5 19.5V22M5.5 19.5H2.5M2.5 17V19.5M2.5 19.5V22M9 17V22M9 17H7.5M9 17H10.5M12.5 22V17L14.5 19.5L16.5 17V22M19 17V22H21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19.5px' }" />
          </svg>
        </div>
</template>
