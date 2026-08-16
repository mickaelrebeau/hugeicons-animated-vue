<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SunCloudAngledZap01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sun-03: energy gathers in the core before traveling out to the rays
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.16)', 'scale(0.98)', 'scale(1.09)', 'scale(1)'],
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      times: [0, 0.12, 0.32, 0.48, 0.68, 1],
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
            <motion.path d="M9 4.65468C8.30552 3.65451 7.15088 3 5.84388 3C3.72096 3 2 4.72674 2 6.85679C2 8.15354 2.63783 9.30081 3.61588 10" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.25px' }" />
            <motion.path d="M7 18.5C4.23858 18.5 2 16.336 2 13.6667C2 11.1537 3.98398 9.0886 6.52042 8.85528M17.5 18.5C19.9853 18.5 22 16.5524 22 14.15C22 11.7476 19.9853 9.8 17.5 9.8C17.4925 9.8 17.485 9.80002 17.4776 9.80005M17.4776 9.80005C17.4924 9.64084 17.5 9.47961 17.5 9.31667C17.5 6.38035 15.0376 4 12 4C9.12324 4 6.76233 6.135 6.52042 8.85528M17.4776 9.80005C17.3753 10.8967 16.9286 11.8973 16.2428 12.7M6.52042 8.85528C6.67826 8.84076 6.83823 8.83333 7 8.83333C8.12582 8.83333 9.16474 9.19302 10.0005 9.8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.25px' }" />
            <motion.path d="M12.5784 14L10.8043 16.6838C10.5668 17.0431 10.4481 17.2227 10.5217 17.3614C10.5952 17.5 10.8093 17.5 11.2375 17.5H12.7625C13.1907 17.5 13.4048 17.5 13.4783 17.6386C13.5519 17.7773 13.4332 17.9569 13.1957 18.3162L11.4216 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.25px' }" />
          </svg>
        </div>
</template>
