<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ColumnInsertIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after login-01: the object lines up, enters its slot, and seats
// generated from @hugeicons/core-free-icons
const frameVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1)', 'translateX(0.76px) scaleX(0.96)', 'translateX(-0.22px) scaleX(1.01)', 'translateX(0px) scaleX(1)'],
    transition: {
      duration: 0.59,
      delay: 0.08,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(-2.81px)', 'translateX(0.94px)', 'translateX(-0.28px)', 'translateX(0px)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M17.5 7C18.9045 7 19.6067 7 20.1111 7.33706C20.3295 7.48298 20.517 7.67048 20.6629 7.88886C21 8.39331 21 9.09554 21 10.5L21 18.5C21 19.9045 21 20.6067 20.6629 21.1111C20.517 21.3295 20.3295 21.517 20.1111 21.6629C19.6067 22 18.9045 22 17.5 22C16.0955 22 15.3933 22 14.8889 21.6629C14.6705 21.517 14.483 21.3295 14.3371 21.1111C14 20.6067 14 19.9045 14 18.5L14 10.5C14 9.09554 14 8.39331 14.3371 7.88886C14.483 7.67048 14.6705 7.48298 14.8889 7.33706C15.3933 7 16.0955 7 17.5 7Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 14.5px' }" />
            <motion.path d="M6.5 7C7.90446 7 8.60669 7 9.11114 7.33706C9.32952 7.48298 9.51702 7.67048 9.66294 7.88886C10 8.39331 10 9.09554 10 10.5L10 18.5C10 19.9045 10 20.6067 9.66294 21.1111C9.51702 21.3295 9.32952 21.517 9.11114 21.6629C8.60669 22 7.90446 22 6.5 22C5.09554 22 4.39331 22 3.88886 21.6629C3.67048 21.517 3.48298 21.3295 3.33706 21.1111C3 20.6067 3 19.9045 3 18.5L3 10.5C3 9.09554 3 8.39331 3.33706 7.88886C3.48298 7.67048 3.67048 7.48298 3.88886 7.33706C4.39331 7 5.09554 7 6.5 7Z" stroke="currentColor" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 14.5px' }" />
            <motion.path d="M15 2L13.4142 3.53318C12.7475 4.17772 12.4142 4.5 12 4.5C11.5858 4.5 11.2525 4.17773 10.5858 3.53318L9 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.25px' }" />
          </svg>
        </div>
</template>
