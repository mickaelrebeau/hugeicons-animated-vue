<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PizzaCutterIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the slice lifts by its crust and settles back onto the plate
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.53px) scaleY(0.82)', 'translateY(-3.71px) scaleY(1.08)', 'translateY(0.55px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.72,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M11.5355 19.5355C9.58291 21.4882 6.41709 21.4882 4.46447 19.5355C2.51184 17.5829 2.51184 14.4171 4.46447 12.4645C6.41709 10.5118 9.58291 10.5118 11.5355 12.4645C13.4882 14.4171 13.4882 17.5829 11.5355 19.5355Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.49px' }" />
            <motion.path d="M16.1367 13.375C15.7025 12.1438 14.9931 10.9881 14.0083 10.0034C13.0236 9.01865 11.8679 8.3092 10.6367 7.875" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.49px' }" />
            <motion.path d="M15.5 11.5L20.3787 6.62132C20.7765 6.2235 21 5.68393 21 5.12132C21 3.94975 20.0503 3 18.8787 3C18.3161 3 17.7765 3.2235 17.3787 3.62132L12.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.49px' }" />
            <motion.path d="M16 5L19 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.49px' }" />
            <motion.path d="M14 10L12 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.49px' }" />
            <motion.path d="M8.125 16H8M8.25 16C8.25 16.1381 8.13807 16.25 8 16.25C7.86193 16.25 7.75 16.1381 7.75 16C7.75 15.8619 7.86193 15.75 8 15.75C8.13807 15.75 8.25 15.8619 8.25 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 21.49px' }" />
          </svg>
        </div>
</template>
