<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PopsicleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the popsicle move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.82px) rotate(-2.14deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M15.7807 8.89881L11.3072 4.42529C10.3946 3.51269 9.15685 3 7.86624 3C5.17869 3 3 5.17869 3 7.86625C3 9.15686 3.51269 10.3946 4.42529 11.3072L8.89881 15.7807C10.1652 17.0471 10.7984 17.6803 11.539 17.8892C12.0626 18.0369 12.6169 18.0369 13.1405 17.8892C13.8811 17.6803 14.5143 17.0471 15.7807 15.7808C17.0471 14.5144 17.6803 13.8812 17.8892 13.1406C18.0369 12.6169 18.0369 12.0627 17.8892 11.539C17.6803 10.7984 17.0471 10.1652 15.7807 8.89881Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.52px 18.04px' }" />
            <motion.path d="M16 16L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.52px 18.04px' }" />
          </svg>
        </div>
</template>
