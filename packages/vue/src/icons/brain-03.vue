<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Brain03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: a thought travels across the connected lobes in sequence
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.39px) scale(1.2)', 'translateY(0.32px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.45, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M12 19V5C12 3.34315 10.6569 2 9 2C7.34315 2 6 3.34315 6 5C6 5.55228 5.55228 6 5 6C3.34315 6 2 7.34315 2 9C2 10.6569 3.34315 12 5 12C3.34315 12 2 13.3431 2 15C2 16.6569 3.34315 18 5 18C5.55228 18 6 18.4477 6 19C6 20.6569 7.34315 22 9 22C10.6569 22 12 20.6569 12 19Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
            <motion.path d="M12 19V5C12 3.34315 13.3431 2 15 2C16.6569 2 18 3.34315 18 5C18 5.55228 18.4477 6 19 6C20.6569 6 22 7.34315 22 9C22 10.6569 20.6569 12 19 12C20.6569 12 22 13.3431 22 15C22 16.6569 20.6569 18 19 18C18.4477 18 18 18.4477 18 19C18 20.6569 16.6569 22 15 22C13.3431 22 12 20.6569 12 19Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
          </svg>
        </div>
</template>
