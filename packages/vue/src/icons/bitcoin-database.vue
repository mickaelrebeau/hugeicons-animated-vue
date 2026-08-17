<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BitcoinDatabaseIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the B stamps the still cylinder
// authored from scripts/authored
const btcVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.48, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" />
            <path d="M12 15C7.58172 15 4 13.6569 4 12" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15.9375 20.6667L15.9375 15.3333M17.5 15.3333V14M17.5 22V20.6667M15.9375 18H19.0625M19.0625 18C19.5803 18 20 18.4477 20 19V19.6667C20 20.219 19.5803 20.6667 19.0625 20.6667H15M19.0625 18C19.5803 18 20 17.5523 20 17V16.3333C20 15.781 19.5803 15.3333 19.0625 15.3333H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="btcVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18px' }" />
            <path d="M20 12V5M12 22C7.58172 22 4 20.6569 4 19V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
