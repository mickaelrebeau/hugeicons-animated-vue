<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AccessibilityIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the accessibility move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.7px) rotate(-2deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M13.0216 17.5C13.0216 19.7091 11.2307 21.5 9.02158 21.5C6.81244 21.5 5.02158 19.7091 5.02158 17.5C5.02158 15.2909 6.81244 13.5 9.02158 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.09px 20.5px' }" />
            <motion.path d="M9.02158 10.5L9.46879 9.60557C9.73775 9.06766 9.87223 8.7987 10.1139 8.64935C10.3555 8.5 10.6562 8.5 11.2576 8.5H14.2855C15.7359 8.5 16.4611 8.5 16.7542 8.97427C17.0473 9.44854 16.723 10.0972 16.0744 11.3944L14.5216 14.5M14.5216 14.5H16.5216C17.8784 14.5 18.5568 14.5 18.8536 14.9453C19.1505 15.3906 18.8896 16.0168 18.3677 17.2692L17.0216 20.5M14.5216 14.5C13.2222 14.5 12.5726 14.5 12.2726 14.0974C12.2455 14.0609 12.2208 14.0227 12.1989 13.9829C11.9565 13.5432 12.2253 12.9518 12.763 11.7689L14.0216 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.09px 20.5px' }" />
            <motion.path d="M17.0216 5.5C17.85 5.5 18.5216 4.82843 18.5216 4C18.5216 3.17157 17.85 2.5 17.0216 2.5C16.1931 2.5 15.5216 3.17157 15.5216 4C15.5216 4.82843 16.1931 5.5 17.0216 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.09px 20.5px' }" />
          </svg>
        </div>
</template>
