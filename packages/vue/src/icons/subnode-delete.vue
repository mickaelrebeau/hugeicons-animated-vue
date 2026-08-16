<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SubnodeDeleteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after delete-02: the lid opens and the bin catches the discarded weight
// generated from @hugeicons/core-free-icons
const binVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.86px)', 'translateY(0px)'],
    transition: {
      duration: 0.29,
      ease: 'easeOut',
      delay: 0.28,
    },
  },
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.72px) rotate(-2.03deg)', 'translateY(0.41px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lidVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8.58deg)', 'rotate(-7.63deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.78,
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
            <motion.path d="M14.5 19.5H13.5C10.6716 19.5 9.25736 19.5 8.37868 18.6213C7.5 17.7426 7.5 16.3284 7.5 13.5V11.5M7.5 8V11.5M7.5 11.5H12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="binVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 19.5px' }" />
            <motion.path d="M14.5 19.5C14.5 18.3215 14.5 17.7322 14.8515 17.3661C15.2029 17 15.7686 17 16.9 17H18.1C19.2314 17 19.7971 17 20.1485 17.3661C20.5 17.7322 20.5 18.3215 20.5 19.5C20.5 20.6785 20.5 21.2678 20.1485 21.6339C19.7971 22 19.2314 22 18.1 22H16.9C15.7686 22 15.2029 22 14.8515 21.6339C14.5 21.2678 14.5 20.6785 14.5 19.5Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.78571 2H9.21429C11.2888 2 11.5 3.10993 11.5 5C11.5 6.89007 11.2888 8 9.21429 8H5.78571C3.7112 8 3.5 6.89007 3.5 5C3.5 3.10993 3.7112 2 5.78571 2Z" stroke="currentColor" stroke-width="1.5" :variants="lidVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 5px' }" />
            <motion.path d="M19.5 9.5L17.5 11.5M17.5 11.5L15.5 13.5M17.5 11.5L19.5 13.5M17.5 11.5L15.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
