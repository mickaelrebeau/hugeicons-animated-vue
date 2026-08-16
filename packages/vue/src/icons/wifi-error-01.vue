<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiError01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after alert-circle: it refuses the input with a short head-shake
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8.31deg)', 'rotate(7.27deg)', 'rotate(-4.15deg)', 'rotate(2.08deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.53,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M18.5 9.99761C14.7324 6.66535 9.5 6.66535 5.5 9.99761" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.33px' }" />
            <motion.path d="M2 6.9986C8.31579 1.66699 15.6842 1.66698 22 6.99849" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.33px' }" />
            <motion.path d="M11.9933 14.9853V16.4964M11.9933 18.4673V18.4984M12.1444 12.0075C12.4933 11.9942 13.375 12.163 14.2349 13.6825L16.3884 17.3742C17.2109 18.5922 17.6154 20.7778 14.5873 20.9418L12 21.0002L9.3841 20.926C6.35606 20.7621 6.82207 18.5938 7.58302 17.3585L9.73652 13.6667C10.5964 12.1473 11.4781 11.9784 11.8271 11.9918L12.1444 12.0075Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.33px' }" />
          </svg>
        </div>
</template>
