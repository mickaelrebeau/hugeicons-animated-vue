<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SquareArrowDiagonal02Icon' })

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
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.85px) scaleY(0.94)', 'translateX(-0.33px) scaleY(1.02)', 'translateX(0.49px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M2.5 11.9999C2.5 7.52157 2.5 5.28239 3.89124 3.89115C5.28249 2.49991 7.52166 2.49991 12 2.49991C16.4783 2.49991 18.7175 2.49991 20.1088 3.89115C21.5 5.28239 21.5 7.52157 21.5 11.9999C21.5 16.4783 21.5 18.7174 20.1088 20.1087C18.7175 21.4999 16.4783 21.4999 12 21.4999C7.52166 21.4999 5.28249 21.4999 3.89124 20.1087C2.5 18.7174 2.5 16.4783 2.5 11.9999Z" stroke="currentColor" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.8008 15.8009L8.19915 8.19919M15.8008 15.8009C16.2444 15.3573 15.8098 13.2652 15.8008 12.6335M15.8008 15.8009C15.3573 16.2445 13.2652 15.8099 12.6335 15.8009M8.19915 8.19919C8.64273 7.75561 10.7348 8.19021 11.3665 8.19919M8.19915 8.19919C7.75558 8.64276 8.19018 10.7348 8.19915 11.3666" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
