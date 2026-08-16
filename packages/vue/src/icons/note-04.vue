<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Note04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the note lifts and its written lines answer from the margin
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.76px) rotate(-0.94deg)', 'translateY(0.43px) rotate(0.47deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M5.49994 10.5V13.5C5.49994 17.2712 5.49994 19.1569 6.67151 20.3284C7.84308 21.5 9.7287 21.5 13.4999 21.5C17.2712 21.5 19.1568 21.5 20.3284 20.3284C21.4999 19.1569 21.4999 17.2712 21.4999 13.5V10.5C21.4999 6.72876 21.4999 4.84315 20.3284 3.67157C19.1568 2.5 17.2712 2.5 13.4999 2.5C9.7287 2.5 7.84308 2.5 6.67151 3.67158C5.49994 4.84315 5.49994 6.72877 5.49994 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
            <motion.path d="M5.5 10.5L4 10.5C3.17157 10.5 2.5 9.82843 2.5 9C2.5 8.17157 3.17157 7.5 4 7.5L7.5 7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 9px' }" />
            <motion.path d="M5.5 17.5L4 17.5C3.17157 17.5 2.5 16.8284 2.5 16C2.5 15.1716 3.17157 14.5 4 14.5L7.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 16px' }" />
            <motion.path d="M11 10.5H15M11 6.5H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.25px 8.5px' }" />
          </svg>
        </div>
</template>
