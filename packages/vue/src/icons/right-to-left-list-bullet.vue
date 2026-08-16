<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RightToLeftListBulletIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-right-02: the mark commits right along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.58px) scaleY(0.94)', 'translateX(-0.3px) scaleY(1.02)', 'translateX(0.45px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.49,
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
            <motion.path d="M3.87949 5.5L15.8795 5.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path opacity="0.4" d="M3.87949 12.5L15.8795 12.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.87949 19.5L15.8795 19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path opacity="0.4" d="M20.0045 5.5H19.8795M20.1295 5.5C20.1295 5.63807 20.0176 5.75 19.8795 5.75C19.7414 5.75 19.6295 5.63807 19.6295 5.5C19.6295 5.36193 19.7414 5.25 19.8795 5.25C20.0176 5.25 20.1295 5.36193 20.1295 5.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path opacity="0.4" d="M20.0045 12.5H19.8795M20.1295 12.5C20.1295 12.6381 20.0176 12.75 19.8795 12.75C19.7414 12.75 19.6295 12.6381 19.6295 12.5C19.6295 12.3619 19.7414 12.25 19.8795 12.25C20.0176 12.25 20.1295 12.3619 20.1295 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path opacity="0.4" d="M20.0045 19.5H19.8795M20.1295 19.5C20.1295 19.6381 20.0176 19.75 19.8795 19.75C19.7414 19.75 19.6295 19.6381 19.6295 19.5C19.6295 19.3619 19.7414 19.25 19.8795 19.25C20.0176 19.25 20.1295 19.3619 20.1295 19.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
