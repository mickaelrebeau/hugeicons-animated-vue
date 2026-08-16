<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PointingRight03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the fingertip commits toward the direction it already points
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.85px) scaleX(0.9) scaleY(1.04)', 'translateX(2.13px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M11.329 7.87124L9.5 10.0051L19.25 10.0051C20.2165 10.0051 21 10.7886 21 11.7551C21 12.7216 20.2165 13.5051 19.25 13.5051H14L13.5224 16.493C13.2331 18.4216 13.0885 19.386 12.6816 20.0652C12.0094 21.1872 11 22 9.52639 22C8.5 22 7.8114 21.7463 5.96127 21.1296C4.78734 20.7383 4.20036 20.5426 3.73571 20.2236C2.97073 19.6983 2.4122 18.9233 2.15576 18.0315C2 17.4898 2 16.8711 2 15.6336L2 14.5847C2 12.9395 2 12.1169 2.30186 11.3846C2.356 11.2533 2.41709 11.1249 2.48487 11.0001C2.86288 10.304 3.50129 9.78533 4.77813 8.74791L8.91166 5.38941C9.54686 4.87331 10.4559 4.86987 11.095 5.38114C11.8631 5.99565 11.9692 7.12437 11.329 7.87124Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 13.43px' }" />
            <motion.path d="M22 4.5L16 4.5M22 4.5C22 3.79977 20.0057 2.49153 19.5 2M22 4.5C22 5.20023 20.0057 6.50847 19.5 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 13.43px' }" />
          </svg>
        </div>
</template>
