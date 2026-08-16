<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CardExchange02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after credit-card: the card swipes through an implied reader and catches its inertia
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(2.63px) rotate(2.2deg)', 'translateX(-0.33px) rotate(-0.55deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M22 14.0057C22 17.3206 19.3171 20.0017 16 20.0017L16.8571 18.2886" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.52px 17.5px' }" />
            <motion.path d="M2 10.0086C2 6.69363 4.68286 4.01257 8 4.01257L7.14286 5.72571" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.52px 17.5px' }" />
            <motion.path d="M10.9658 5.52406H21.7723M13.4658 10.9943H19.4999C20.8806 10.9943 21.9999 9.87573 21.9999 8.49595V4.49674C21.9999 3.11695 20.8806 1.99841 19.4999 1.99841H13.4658C12.0851 1.99841 10.9658 3.11695 10.9658 4.49674V8.49595C10.9658 9.87573 12.0851 10.9943 13.4658 10.9943Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.52px 17.5px' }" />
            <motion.path d="M2 16.5314H12.8065M4.5 22.0016H10.5341C11.9148 22.0016 13.0341 20.8831 13.0341 19.5033V15.5041C13.0341 14.1243 11.9148 13.0057 10.5341 13.0057H4.5C3.11929 13.0057 2 14.1243 2 15.5041V19.5033C2 20.8831 3.11929 22.0016 4.5 22.0016Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.52px 17.5px' }" />
          </svg>
        </div>
</template>
