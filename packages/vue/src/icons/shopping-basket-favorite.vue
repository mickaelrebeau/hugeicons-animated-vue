<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShoppingBasketFavoriteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the heart beats at the basket corner
// authored from scripts/authored
const heartVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.26)', 'scale(1)', 'scale(1.16)', 'scale(1)'],
    transition: { duration: 0.8, times: [0, 0.18, 0.4, 0.58, 1], ease: 'easeInOut' },
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
            <path d="M12.5 22H10C6.70017 22 5.05025 22 4.02513 20.9749C3 19.9497 3 18.2998 3 15V11C3 9.11438 3 8.17157 3.58579 7.58579C4.17157 7 5.11438 7 7 7H15C16.8856 7 17.8284 7 18.4142 7.58579C19 8.17157 19 9.11438 19 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M15 9.5C15 5.63401 13.2091 2 11 2C8.79086 2 7 5.63401 7 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17.5 22C17.5 22 14 19.8824 14 17.8333C14 16.8208 14.7368 16 15.75 16C16.275 16 16.8 16.1765 17.5 16.8824C18.2 16.1765 18.725 16 19.25 16C20.2632 16 21 16.8208 21 17.8333C21 19.8824 17.5 22 17.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="heartVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 19px' }" />
          </svg>
        </div>
</template>
