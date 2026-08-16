<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse07Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the shell presses under the active button and releases
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.85px) scaleX(0.9) scaleY(1.04)', 'translateX(2.12px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
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
            <motion.path d="M5 2C5 2.82843 5.67157 3.5 6.5 3.5L9 3.5C10.8856 3.5 11.8284 3.5 12.4142 4.08579C12.8183 4.48987 12.9436 5.06385 12.9825 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
            <motion.path d="M7.19248 18.0711C7.34438 19.9843 8.85933 21.6088 10.812 21.8495C11.5301 21.9379 12.2601 22 13 22C13.7398 22 14.4699 21.9379 15.1879 21.8495C17.1407 21.6088 18.6555 19.9843 18.8074 18.0711C18.9128 16.7453 19 15.3856 19 14C19 12.6144 18.9128 11.2547 18.8074 9.92895C18.6555 8.01572 17.1407 6.39115 15.1879 6.15056C14.4699 6.06209 13.7398 6 13 6C12.2601 6 11.5301 6.06209 10.812 6.15056C8.85933 6.39115 7.34438 8.01572 7.19248 9.92895C7.08722 11.2547 7 12.6144 7 14C7 15.3856 7.08722 16.7453 7.19248 18.0711Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
            <motion.path d="M13 9V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
          </svg>
        </div>
</template>
