<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneyNotFound02Icon' })

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
    transform: ['translateX(0px)', 'translateX(1.95px)', 'translateX(-0.27px)', 'translateX(0px)'],
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
            <motion.path d="M9.87868 9.87866C9.33579 10.4216 9 11.1716 9 12C9 13.6568 10.3431 15 12 15C12.8284 15 13.5784 14.6642 14.1213 14.1213" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M3 3L21 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M21.541 17.541C22 16.6386 22 15.278 22 13V11C22 8.17157 22 6.75736 21.1213 5.87868C20.2426 5 18.8284 5 16 5H9M18.9305 18.9305C18.168 19 17.2143 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11C2 8.17157 2 6.75736 2.87868 5.87868C3.38012 5.37724 4.05597 5.16196 5.06953 5.06953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M5.375 12H5.25M5.5 12C5.5 12.1381 5.38807 12.25 5.25 12.25C5.11193 12.25 5 12.1381 5 12C5 11.8619 5.11193 11.75 5.25 11.75C5.38807 11.75 5.5 11.8619 5.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
            <motion.path d="M18.875 12H18.75M19 12C19 12.1381 18.8881 12.25 18.75 12.25C18.6119 12.25 18.5 12.1381 18.5 12C18.5 11.8619 18.6119 11.75 18.75 11.75C18.8881 11.75 19 11.8619 19 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12px' }" />
          </svg>
        </div>
</template>
