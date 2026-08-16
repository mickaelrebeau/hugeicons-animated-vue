<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CactusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: the crown leans on a breeze while the trunk stays planted
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-12.38deg) translateX(1.65px)', 'rotate(5.16deg) translateX(-0.41px)', 'rotate(-2.06deg) translateX(0.21px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.71,
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
            <motion.path d="M13.1509 15H10.8491C8.79675 15 7.77055 15 7.2641 15.5967C6.75765 16.1934 7.03957 17.0703 7.6034 18.8242L7.69704 19.1154C8.14071 20.4955 8.36255 21.1855 8.95349 21.5878L8.97997 21.6055C9.57752 22 10.385 22 12 22C13.615 22 14.4225 22 15.02 21.6055L15.0465 21.5878C15.6375 21.1855 15.8593 20.4955 16.303 19.1154L16.3966 18.8242C16.9604 17.0703 17.2423 16.1934 16.7359 15.5967C16.2294 15 15.2033 15 13.1509 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M9.90373 15L8.55745 7.93548C8.16693 5.8863 9.81696 4 12 4C14.183 4 15.8331 5.88629 15.4426 7.93548L14.0963 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M12 15L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M15.5 6L17 5M8.5 6L7 5M12 4V2M15.5 10L17 11M8.5 10L7 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
          </svg>
        </div>
</template>
