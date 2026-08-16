<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SortingNineOneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sort-by-down-01: the values trade places while the direction mark leads
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.44, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M7 20.9994V14.9481C7 14.3736 7 14.0863 6.76959 14.0149C6.26306 13.8577 5.5 14.999 5.5 14.999M7 20.9994H5.5M7 20.9994H8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 17.43px' }" />
            <motion.path d="M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9ZM9 6.5V7.375C9 8.61244 9 9.23116 8.56066 9.61558C8.12132 10 7.41421 10 6 10H5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 6.5px' }" />
            <motion.path d="M16.5001 19.999V3.99902M16.5001 19.999C15.7998 19.999 14.4916 18.0047 14.0001 17.499M16.5001 19.999C17.2003 19.999 18.5085 18.0047 19.0001 17.499" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12px' }" />
          </svg>
        </div>
</template>
