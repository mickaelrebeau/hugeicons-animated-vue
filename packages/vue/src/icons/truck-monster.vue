<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TruckMonsterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: it rolls forward on its wheels, then eases back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.28px) rotate(4.1deg)', 'translateX(-0.41px) rotate(-1.03deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M21 14L20.7578 11.5776C20.6326 10.3263 20.5701 9.70067 20.201 9.239C19.832 8.77732 19.2355 8.5785 18.0425 8.18084C17.6735 8.05784 17.4234 7.93745 17.187 7.62499C16.4318 6.62664 15.3436 4.68636 14.5275 4.2579C14.0362 4 13.4568 4 12.2979 4H11C10.0572 4 9.58579 4 9.29289 4.29289C9 4.58579 9 5.05719 9 6V13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
            <motion.path d="M9 9.5H3V14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
            <motion.path d="M17.5 8H14C13.0572 8 12.5858 8 12.2929 7.70711C12 7.41421 12 6.94281 12 6V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
            <motion.path d="M9 5H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
            <motion.path d="M12 10.5H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
            <motion.path d="M13.5 17H10.5M9.5 14H14.5M4.5 14H3.5C3.03406 14 2.80109 14 2.61732 14.0761C2.00228 14.3309 2 14.9298 2 15.5C2 16.0702 2.00228 16.6691 2.61732 16.9239C2.80109 17 3.03406 17 3.5 17M19.5 14H20.5C20.9659 14 21.1989 14 21.3827 14.0761C21.9977 14.3309 22 14.9298 22 15.5C22 16.0702 21.9977 16.6691 21.3827 16.9239C21.1989 17 20.9659 17 20.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
            <motion.path d="M10.5 16.5C10.5 18.433 8.933 20 7 20C5.067 20 3.5 18.433 3.5 16.5C3.5 14.567 5.067 13 7 13C8.933 13 10.5 14.567 10.5 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
            <motion.path d="M17 20C18.933 20 20.5 18.433 20.5 16.5C20.5 14.567 18.933 13 17 13C15.067 13 13.5 14.567 13.5 16.5C13.5 18.433 15.067 20 17 20Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 14px' }" />
          </svg>
        </div>
</template>
