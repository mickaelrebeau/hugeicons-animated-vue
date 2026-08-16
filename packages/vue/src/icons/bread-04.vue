<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Bread04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the loaf drops onto the counter and settles with soft weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.43px) scaleY(0.82)', 'translateY(-3.48px) scaleY(1.08)', 'translateY(0.51px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.68,
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
            <motion.path d="M8.5 4C5.04311 4 2 5.59321 2 7.55853C2 8.92302 3.6427 9.93848 3.43338 11.2206L3.18919 15.7778C3.08307 17.7584 3.03001 18.7487 3.59988 19.3744C4.16975 20 5.12486 20 7.0351 20H9.9649C11.8751 20 12.8303 20 13.4001 19.3744C13.97 18.7487 13.9169 17.7584 13.8108 15.7778L13.5666 11.2206C13.3573 9.93848 15 8.92302 15 7.55853C15 5.59321 11.9569 4 8.5 4Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 20px' }" />
            <motion.path d="M11 20H17.1838C19.011 20 19.9246 20 20.4697 19.3744C21.0148 18.7487 20.964 17.7584 20.8625 15.7778L20.629 11.2206C20.4287 9.93848 22 8.92302 22 7.55853C22 5.59321 19.0892 4 15.7826 4H8" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 20px' }" />
          </svg>
        </div>
</template>
