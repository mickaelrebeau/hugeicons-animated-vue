<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MarketAnalysisIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the bars step up one after another to their new highs
// generated from @hugeicons/core-free-icons
const barVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(2.18px) scaleY(0.6)', 'translateY(-0.49px) scaleY(1.08)', 'translateY(0px) scaleY(1)'],
    transition: { duration: 0.49, ease: [0.23, 1, 0.32, 1], delay: i * 0.07 },
  }),
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
            <path d="M14 16V8C14 7.05719 14 6.58579 13.7071 6.29289C13.4142 6 12.9428 6 12 6C11.0572 6 10.5858 6 10.2929 6.29289C10 6.58579 10 7.05719 10 8V16C10 16.9428 10 17.4142 10.2929 17.7071C10.5858 18 11.0572 18 12 18C12.9428 18 13.4142 18 13.7071 17.7071C14 17.4142 14 16.9428 14 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21 9V7C21 6.05719 21 5.58579 20.7071 5.29289C20.4142 5 19.9428 5 19 5C18.0572 5 17.5858 5 17.2929 5.29289C17 5.58579 17 6.05719 17 7V9C17 9.94281 17 10.4142 17.2929 10.7071C17.5858 11 18.0572 11 19 11C19.9428 11 20.4142 11 20.7071 10.7071C21 10.4142 21 9.94281 21 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 11px' }" />
            <motion.path d="M7 14V12C7 11.0572 7 10.5858 6.70711 10.2929C6.41421 10 5.94281 10 5 10C4.05719 10 3.58579 10 3.29289 10.2929C3 10.5858 3 11.0572 3 12V14C3 14.9428 3 15.4142 3.29289 15.7071C3.58579 16 4.05719 16 5 16C5.94281 16 6.41421 16 6.70711 15.7071C7 15.4142 7 14.9428 7 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 16px' }" />
            <motion.path d="M12 21L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M19 13L19 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="6" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 13px' }" />
            <motion.path d="M12 6L12 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <motion.path d="M19 5L19 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="7" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 5px' }" />
            <motion.path d="M5 18L5 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 18px' }" />
            <motion.path d="M5 10L5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="barVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 10px' }" />
          </svg>
        </div>
</template>
