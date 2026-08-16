<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneyNotFound04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wallet-01: the value rises from the wallet and settles back into place
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.85px)', 'translateX(-0.26px)', 'translateX(0px)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M18.5 11.4893V11.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M5.5 12.4893V12.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M2.99988 3.00098L20.9999 21.001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M10.2322 10.2314C9.77972 10.6839 9.49988 11.3089 9.49988 11.9993C9.49988 13.38 10.6192 14.4993 11.9999 14.4993C12.6903 14.4993 13.3153 14.2194 13.7677 13.767" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M21.6566 17.6577C21.8698 17.3798 21.9999 17.0462 21.9999 16.6833V6.92803C21.9999 6.35987 21.6755 5.84549 21.1328 5.6773C20.1902 5.38518 18.4793 5.00098 15.9999 5.00098C13.3534 5.00098 11.8275 5.5613 9.7911 5.7922M18.2193 18.2204C17.5645 18.1529 16.8247 18.1104 15.9999 18.1104C11.249 18.1104 10.1094 19.9161 3.14468 18.3802C2.47252 18.232 1.99988 17.6275 1.99988 16.9392V6.92214C1.99988 5.94628 2.92067 5.23464 3.87786 5.42458C4.54916 5.55779 5.16296 5.65792 5.72938 5.73048" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
          </svg>
        </div>
</template>
