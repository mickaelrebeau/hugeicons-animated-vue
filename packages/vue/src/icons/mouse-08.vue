<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse08Icon' })

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
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.83px) scaleX(0.9) scaleY(1.04)', 'translateX(2.06px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M7.19248 18.0711C7.34438 19.9843 8.85933 21.6088 10.812 21.8495C11.5301 21.9379 12.2601 22 13 22C13.7398 22 14.4699 21.9379 15.1879 21.8495C17.1407 21.6088 18.6555 19.9843 18.8074 18.0711C18.9128 16.7453 19 15.3856 19 14C19 12.6144 18.9128 11.2547 18.8074 9.92895C18.6555 8.01572 17.1407 6.39115 15.1879 6.15056C14.4699 6.06209 13.7398 6 13 6C12.2601 6 11.5301 6.06209 10.812 6.15056C8.85933 6.39115 7.34438 8.01572 7.19248 9.92895C7.08722 11.2547 7 12.6144 7 14C7 15.3856 7.08722 16.7453 7.19248 18.0711Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
            <motion.path d="M13 9V7.5C13 5.61438 13 4.67157 12.4142 4.08579C11.8284 3.5 10.8856 3.5 9 3.5L6.5 3.5C5.67157 3.5 5 2.82843 5 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
            <motion.path d="M11.5 10.5C11.5 10.0341 11.5 9.80109 11.5761 9.61732C11.6776 9.37229 11.8723 9.17761 12.1173 9.07612C12.3011 9 12.5341 9 13 9C13.4659 9 13.6989 9 13.8827 9.07612C14.1277 9.17761 14.3224 9.37229 14.4239 9.61732C14.5 9.80109 14.5 10.0341 14.5 10.5V11.5C14.5 11.9659 14.5 12.1989 14.4239 12.3827C14.3224 12.6277 14.1277 12.8224 13.8827 12.9239C13.6989 13 13.4659 13 13 13C12.5341 13 12.3011 13 12.1173 12.9239C11.8723 12.8224 11.6776 12.6277 11.5761 12.3827C11.5 12.1989 11.5 11.9659 11.5 11.5V10.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14px' }" />
          </svg>
        </div>
</template>
