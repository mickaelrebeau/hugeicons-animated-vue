<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RukuIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the ruku move from their own mass and settle together
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
            <motion.path d="M15.5 7.76239L17.8883 7.98862C19.2866 8.12106 20.5 7.08098 20.5 5.74989C20.5 4.50731 19.4365 3.5 18.1247 3.5H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.78px 18.5px' }" />
            <motion.path d="M12.0911 6.5L10.0207 10.3833V14.8978M10.0207 14.8978V18.5C6.78541 18.5 4.84681 17.8333 3.5 17.5V9.60937C3.5 5.68298 6.71707 2.5 10.6855 2.5C12.2479 2.5 13.4299 2.69092 14.2573 2.91951C15.1883 3.17674 15.7316 4.01566 15.9212 4.9535C16.0591 5.6359 16.0158 6.34727 15.7934 7.0075L10.0207 14.8978Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.78px 18.5px' }" />
            <motion.path d="M8.5 18.5V21.5M8.5 21.5H7.5C6.55719 21.5 6.08579 21.5 5.79289 21.2071C5.5 20.9142 5.5 20.4428 5.5 19.5V18.5M8.5 21.5H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.78px 18.5px' }" />
          </svg>
        </div>
</template>
