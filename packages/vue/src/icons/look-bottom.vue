<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LookBottomIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the look bottom separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.49px, -1.27px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.85px) rotate(-1.06deg)', 'translateY(0.48px) rotate(0.53deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M9.5 17C10.2235 17.6334 11.0809 18 12 18C12.9191 18 13.7765 17.6334 14.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
            <motion.path d="M15.625 11.887V12.4165M8.375 11.887V12.4165M8.75 12.25C8.75 11.8358 8.58211 11.5 8.375 11.5C8.16789 11.5 8 11.8358 8 12.25C8 12.6642 8.16789 13 8.375 13C8.58211 13 8.75 12.6642 8.75 12.25ZM16 12.25C16 11.8358 15.8321 11.5 15.625 11.5C15.4179 11.5 15.25 11.8358 15.25 12.25C15.25 12.6642 15.4179 13 15.625 13C15.8321 13 16 12.6642 16 12.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.25px' }" />
            <motion.path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
