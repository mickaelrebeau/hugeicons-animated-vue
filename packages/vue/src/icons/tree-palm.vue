<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TreePalmIcon' })

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
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-12.15deg) translateX(1.62px)', 'rotate(5.06deg) translateX(-0.41px)', 'rotate(-2.03deg) translateX(0.2px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.7,
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
            <motion.path d="M16.7356 14.6385C15.9149 11.4311 13.3834 9.08148 12 8.19817C12.5 7.66607 13.9663 7.25787 15.5 7.66618C17.0337 8.07448 19 9.79449 19 12.455C19 13.4814 18.6899 14.3841 18.2941 15.1033C17.8854 15.8459 16.9466 15.463 16.7356 14.6385Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 14.75px' }" />
            <motion.path d="M16.6158 3.5C12.9232 3.5 12 6.5 12 8C14.8671 6.44709 17.9198 6.70283 19.8616 7.12882C20.5446 7.27867 21.1985 6.7851 20.9437 6.14934C20.4468 4.90933 19.2201 3.5 16.6158 3.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 14.75px' }" />
            <motion.path d="M6.39662 2.5C4.60558 2.5 3.52517 3.30483 3.07531 4.12843C2.82633 4.58426 3.23136 5.03497 3.75359 5.10388C5.91073 5.38853 9.54597 6.12357 12 7.5C11.4906 5.5 9.96241 2.5 6.39662 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 14.75px' }" />
            <motion.path d="M13 9.5C12.8333 12.3333 12.5 16.5 11 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 14.75px' }" />
            <motion.path d="M9.5 12.5C9 14.1667 7.4 18.3 5 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 14.75px' }" />
            <motion.path d="M8.5 6.5C10.5 6.5 11.5 7.61799 12 8.17698C7.92482 9.54378 6.17463 11.6532 5.1252 13.9001C4.79289 14.6115 3.97271 14.7506 3.75031 13.9875C3.59787 13.4644 3.5 12.8319 3.5 12.0899C3.5 8.17698 7 6.5 8.5 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.75px 14.75px' }" />
          </svg>
        </div>
</template>
