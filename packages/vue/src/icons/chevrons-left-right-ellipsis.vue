<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChevronsLeftRightEllipsisIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after chevron-left: the mark commits left along its own axis
// generated from @hugeicons/core-free-icons
const chevronVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(-2.59px) scaleY(0.9)', 'translateX(0.49px) scaleY(1.04)', 'translateX(-0.86px) scaleY(0.97)', 'translateX(0px) scaleY(1)'],
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
            <motion.path d="M14.5 11.875V12M14.75 12C14.75 12.1381 14.6381 12.25 14.5 12.25C14.3619 12.25 14.25 12.1381 14.25 12C14.25 11.8619 14.3619 11.75 14.5 11.75C14.6381 11.75 14.75 11.8619 14.75 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chevronVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.5 11.875V12M9.75 12C9.75 12.1381 9.63807 12.25 9.5 12.25C9.36193 12.25 9.25 12.1381 9.25 12C9.25 11.8619 9.36193 11.75 9.5 11.75C9.63807 11.75 9.75 11.8619 9.75 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chevronVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.99996 17C6.99996 17 2.00001 13.3176 2 12C1.99999 10.6824 7 7 7 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chevronVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 17C17 17 22 13.3176 22 12C22 10.6824 17 7 17 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chevronVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
