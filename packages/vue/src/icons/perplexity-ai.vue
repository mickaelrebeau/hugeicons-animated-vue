<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PerplexityAiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the intelligence points answer one another instead of pulsing as a single badge
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.52px) scale(1.2)', 'translateY(0.35px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.42, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M6 16C4.58579 16 3.87868 16 3.43934 15.5607C3 15.1213 3 14.4142 3 13V11C3 9.58579 3 8.87868 3.43934 8.43934C3.87868 8 4.58579 8 6 8H18C19.4142 8 20.1213 8 20.5607 8.43934C21 8.87868 21 9.58579 21 11V13C21 14.4142 21 15.1213 20.5607 15.5607C20.1213 16 19.4142 16 18 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 2V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5 8V2.70711C5 2.31658 5.31658 2 5.70711 2C5.89464 2 6.0745 2.0745 6.20711 2.20711L12 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 5px' }" />
            <motion.path d="M19 8V2.70711C19 2.31658 18.6834 2 18.2929 2C18.1054 2 17.9255 2.0745 17.7929 2.20711L12 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 5px' }" />
            <motion.path d="M6.64855 12.9055L12 8L17.3514 12.9055C17.7647 13.2843 18 13.8192 18 14.3798V20.3067C18 20.6896 17.6896 21 17.3067 21C17.1114 21 16.9251 20.9176 16.7937 20.7731L12 15.5L7.20631 20.7731C7.07491 20.9176 6.88864 21 6.6933 21C6.3104 21 6 20.6896 6 20.3067V14.3798C6 13.8192 6.23529 13.2843 6.64855 12.9055Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
          </svg>
        </div>
</template>
