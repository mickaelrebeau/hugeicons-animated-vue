<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BikeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after shopping-cart-01: it rolls forward on its wheels, then eases back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.01px) rotate(3.77deg)', 'translateX(-0.38px) rotate(-0.94deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M5.5 20.5C7.433 20.5 9 18.933 9 17C9 15.067 7.433 13.5 5.5 13.5C3.567 13.5 2 15.067 2 17C2 18.933 3.567 20.5 5.5 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.96px 18.5px' }" />
            <motion.path d="M18.5 20.5C20.433 20.5 22 18.933 22 17C22 15.067 20.433 13.5 18.5 13.5C16.567 13.5 15 15.067 15 17C15 18.933 16.567 20.5 18.5 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.96px 18.5px' }" />
            <motion.path d="M15 4V4.5M16 4.5C16 5.05228 15.5523 5.5 15 5.5C14.4477 5.5 14 5.05228 14 4.5C14 3.94772 14.4477 3.5 15 3.5C15.5523 3.5 16 3.94772 16 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.96px 18.5px' }" />
            <motion.path d="M12 18.4998V16.1567C12 15.3392 12 14.9305 11.8478 14.5629C11.6955 14.1954 11.4065 13.9063 10.8284 13.3283L9.91421 12.4141C9.24755 11.7474 8.91422 11.4141 8.91422 10.9998C8.91422 10.5856 9.24755 10.2523 9.91422 9.58564L11.0858 8.41406C11.7525 7.7474 12.0858 7.41406 12.5 7.41406C12.9142 7.41406 13.2475 7.7474 13.9142 8.41406L14.8284 9.32828C15.4065 9.90634 15.6955 10.1954 16.0631 10.3476C16.4306 10.4998 16.8394 10.4998 17.6569 10.4998H19M13.5 8.49985L10 11.9998M12.5 8.49985L10 10.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.96px 18.5px' }" />
          </svg>
        </div>
</template>
