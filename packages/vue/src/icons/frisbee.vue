<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FrisbeeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the frisbee move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.66px) rotate(-1.95deg)', 'translateY(0.39px) rotate(0.68deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M4 22L7 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.53px 17.93px' }" />
            <motion.path d="M2 20L5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.53px 17.93px' }" />
            <motion.path d="M19.7161 2.44925C21.0334 3.76659 19.3553 7.58059 15.9679 10.968C12.5805 14.3555 8.76656 16.0337 7.44924 14.7163M19.7161 2.44925C18.3988 1.1319 14.5848 2.81006 11.1974 6.19752M19.7161 2.44925L21.4198 4.15275C22.9253 5.65829 21.3998 9.62485 18.0124 13.0123C14.625 16.3998 10.6585 17.9254 9.15297 16.4198L7.44924 14.7163M7.44924 14.7163C6.13192 13.399 7.81005 9.58498 11.1974 6.19752M11.1974 6.19752C8.93918 8.45582 7.71872 10.897 8.47148 11.6498C9.22423 12.4025 11.6651 11.1821 13.9234 8.92375C16.1817 6.66545 17.4021 4.22449 16.6494 3.47172C15.8966 2.71895 13.4557 3.93921 11.1974 6.19752Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.53px 17.93px' }" />
          </svg>
        </div>
</template>
