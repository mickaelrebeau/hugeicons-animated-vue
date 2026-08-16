<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GroupItemsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user-group: the profiles gather toward one another and settle as a group
// generated from @hugeicons/core-free-icons
const personVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.57px) scale(1.03)', 'translateY(0.52px) scale(0.98)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const personVariants2: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px) scale(1)', 'translateX(-1.57px) scale(0.97)', 'translateX(0.37px) scale(1.01)', 'translateX(0px) scale(1)'],
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
            <motion.path d="M6 4C6 5.10457 5.10457 6 4 6C2.89543 6 2 5.10457 2 4C2 2.89543 2.89543 2 4 2C5.10457 2 6 2.89543 6 4Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 4px' }" />
            <motion.path d="M22 4C22 5.10457 21.1046 6 20 6C18.8954 6 18 5.10457 18 4C18 2.89543 18.8954 2 20 2C21.1046 2 22 2.89543 22 4Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 4px' }" />
            <motion.path d="M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18C21.1046 18 22 18.8954 22 20Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 20px' }" />
            <motion.path d="M6 20C6 21.1046 5.10457 22 4 22C2.89543 22 2 21.1046 2 20C2 18.8954 2.89543 18 4 18C5.10457 18 6 18.8954 6 20Z" stroke="currentColor" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 20px' }" />
            <motion.path d="M20 6V18M18 20H6M18 4H6M4 6V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16.5 9C16.5 8.53406 16.5 8.30109 16.4239 8.11732C16.3224 7.87229 16.1277 7.67761 15.8827 7.57612C15.6989 7.5 15.4659 7.5 15 7.5H9C8.53406 7.5 8.30109 7.5 8.11732 7.57612C7.87229 7.67761 7.67761 7.87229 7.57612 8.11732C7.5 8.30109 7.5 8.53406 7.5 9C7.5 9.46594 7.5 9.69891 7.57612 9.88268C7.67761 10.1277 7.87229 10.3224 8.11732 10.4239C8.30109 10.5 8.53406 10.5 9 10.5H15C15.4659 10.5 15.6989 10.5 15.8827 10.4239C16.1277 10.3224 16.3224 10.1277 16.4239 9.88268C16.5 9.69891 16.5 9.46594 16.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M16.5 15C16.5 14.5341 16.5 14.3011 16.4239 14.1173C16.3224 13.8723 16.1277 13.6776 15.8827 13.5761C15.6989 13.5 15.4659 13.5 15 13.5H9C8.53406 13.5 8.30109 13.5 8.11732 13.5761C7.87229 13.6776 7.67761 13.8723 7.57612 14.1173C7.5 14.3011 7.5 14.5341 7.5 15C7.5 15.4659 7.5 15.6989 7.57612 15.8827C7.67761 16.1277 7.87229 16.3224 8.11732 16.4239C8.30109 16.5 8.53406 16.5 9 16.5H15C15.4659 16.5 15.6989 16.5 15.8827 16.4239C16.1277 16.3224 16.3224 16.1277 16.4239 15.8827C16.5 15.6989 16.5 15.4659 16.5 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
          </svg>
        </div>
</template>
