<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FastWindIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: a gust leans the silhouette, then it springs back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-12.07deg) translateX(1.61px)', 'rotate(5.03deg) translateX(-0.4px)', 'rotate(-2.01deg) translateX(0.2px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.69,
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
            <motion.path d="M2 5.94145C5.5 9.37313 10.5755 7.90241 11.7324 5.94145C11.9026 5.65301 12 5.31814 12 4.96096C12 3.87795 11.1046 3 10 3C8.89543 3 8 3.87795 8 4.96096" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 14.19px' }" />
            <motion.path d="M17 8.92814C17 7.31097 18.1193 6 19.5 6C20.8807 6 22 7.31097 22 8.92814C22 9.6452 21.7799 10.3021 21.4146 10.8111C19.3463 14.1915 9.2764 12.9164 4 11.8563" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 14.19px' }" />
            <motion.path d="M13.0854 19.8873C13.2913 20.5356 13.8469 21 14.5 21C15.3284 21 16 20.2528 16 19.331C16 19.0176 15.9224 18.7244 15.7873 18.4738C14.4999 15.9925 7.99996 14.3239 2 18.7746" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 14.19px' }" />
            <motion.path d="M19 15.5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 14.19px' }" />
          </svg>
        </div>
</template>
