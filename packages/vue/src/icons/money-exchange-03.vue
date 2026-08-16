<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneyExchange03Icon' })

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
    transform: ['translateX(0px)', 'translateX(1.71px)', 'translateX(-0.24px)', 'translateX(0px)'],
    transition: {
      duration: 0.47,
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
            <motion.path d="M3 11C3 8.23571 5.23571 6 8 6L7 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.5px' }" />
            <motion.path d="M21 13C21 15.7643 18.7643 18 16 18L17 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.5px' }" />
            <motion.path d="M18.3333 10H14.6667C12.9382 10 12.0739 10 11.537 9.48744C11 8.97487 11 8.14992 11 6.5C11 4.85008 11 4.02513 11.537 3.51256C12.0739 3 12.9382 3 14.6667 3H18.3333C20.0618 3 20.9261 3 21.463 3.51256C22 4.02513 22 4.85008 22 6.5C22 8.14992 22 8.97487 21.463 9.48744C20.9261 10 20.0618 10 18.3333 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.5px' }" />
            <motion.path d="M9.33333 21H5.66667C3.93818 21 3.07394 21 2.53697 20.4874C2 19.9749 2 19.1499 2 17.5C2 15.8501 2 15.0251 2.53697 14.5126C3.07394 14 3.93818 14 5.66667 14H9.33333C11.0618 14 11.9261 14 12.463 14.5126C13 15.0251 13 15.8501 13 17.5C13 19.1499 13 19.9749 12.463 20.4874C11.9261 21 11.0618 21 9.33333 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.5px' }" />
            <motion.path d="M7.75 17.5H7.5M8 17.5C8 17.7761 7.77614 18 7.5 18C7.22386 18 7 17.7761 7 17.5C7 17.2239 7.22386 17 7.5 17C7.77614 17 8 17.2239 8 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.5px' }" />
            <motion.path d="M16.75 6.5H16.5M17 6.5C17 6.77614 16.7761 7 16.5 7C16.2239 7 16 6.77614 16 6.5C16 6.22386 16.2239 6 16.5 6C16.7761 6 17 6.22386 17 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.5px' }" />
          </svg>
        </div>
</template>
