<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PenTool01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after edit-02: the nib leads a short handwritten stroke and lifts
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-7.53deg) translate(-0.38px, 0.56px)', 'rotate(3.76deg) translate(0.28px, -0.28px)', 'rotate(0deg) translate(0px, 0px)'],
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
            <motion.circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.5 20.5L7.90613 15.227C8.19164 14.1564 8.33439 13.621 8.73856 13.3105C9.14274 13 9.69677 13 10.8048 13H13.1952C14.3032 13 14.8573 13 15.2614 13.3105C15.6656 13.621 15.8084 14.1564 16.0939 15.227L17.5 20.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.75px' }" />
            <motion.path d="M9.5 13L11.0769 9.36095C11.4701 8.45365 11.6667 8 12 8C12.3333 8 12.5299 8.45365 12.9231 9.36095L14.5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
          </svg>
        </div>
</template>
