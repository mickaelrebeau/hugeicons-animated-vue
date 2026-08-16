<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Sword01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after scissor-01: the blade winds up, slices through, and follows through
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-21.6deg)', 'rotate(7.86deg)', 'rotate(-1.96deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.51,
      times: [0, 0.32, 0.55, 0.8, 1],
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
            <motion.path d="M2.5 19.5C2.98686 19.5717 3.45571 19.7949 3.83041 20.1696C4.20512 20.5443 4.42832 21.0131 4.5 21.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
            <motion.path d="M8 16L4 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
            <motion.path d="M9 16.5L19.8538 7.92675C20.1737 7.64942 20.3975 7.27769 20.4927 6.86509L21.5 2.5L17.1349 3.50733C16.7223 3.60254 16.3506 3.82626 16.0732 4.14625L7.5 15" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
            <motion.path d="M4 13H4.57157C5.10201 13 5.61071 13.2107 5.98579 13.5858L10.4142 18.0142C10.7893 18.3893 11 18.898 11 19.4284V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.5px 16.5px' }" />
          </svg>
        </div>
</template>
