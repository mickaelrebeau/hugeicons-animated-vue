<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CoinsPoundIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pound sign stamps onto the coin
// authored from scripts/authored
const signVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
            <path d="M14 18C18.4183 18 22 14.4183 22 10C22 5.58172 18.4183 2 14 2C9.58172 2 6 5.58172 6 10C6 14.4183 9.58172 18 14 18Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M13 20.8434C11.8824 21.5748 10.5465 22 9.11116 22C5.18378 22 2 18.8162 2 14.8888C2 13.4535 2.42523 12.1176 3.15657 11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M16 7.87274C15.875 7.04516 15.109 6.26561 14.0741 6.56561C12.9907 6.87966 12.4993 8.4729 12.9907 9.46841C13.5 10.5 13.7436 11.5 13.0794 12.9148C12.95 13.1904 12.8854 13.3282 12.921 13.4141C12.9567 13.5 13.0709 13.5 13.2992 13.5H16M12 10.1667H15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="signVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 9.9px' }" />
          </svg>
        </div>
</template>
