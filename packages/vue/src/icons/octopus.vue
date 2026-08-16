<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OctopusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the octopus separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.08deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.52px, -1.3px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
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
            <motion.path d="M16.0925 13C17.2309 12.0981 18 10.8493 18 9.46931C18 6.71919 14.9455 2 12 2C9.05448 2 6 6.71919 6 9.46931C6 10.8493 6.76907 12.0981 7.90754 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <motion.path d="M13.5 14C13.0164 18 13.8997 19.7143 17 22M10.5 14C10.9836 18 10.1002 19.7143 7 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M13.5 14C14.5 16 17.0791 18.5 19.0475 18.5C21.0158 18.5 22 17.2688 22 15.75C22 14.2312 20.8984 13 19.5396 13M10.5 14C9.5 16 6.92082 18.5 4.95249 18.5C2.98416 18.5 2 17.2688 2 15.75C2 14.2312 3.10156 13 4.46041 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.75px' }" />
            <motion.path d="M10.125 10H10M10.25 10C10.25 10.1381 10.1381 10.25 10 10.25C9.86193 10.25 9.75 10.1381 9.75 10C9.75 9.86193 9.86193 9.75 10 9.75C10.1381 9.75 10.25 9.86193 10.25 10Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 10px' }" />
            <motion.path d="M14.125 10H14M14.25 10C14.25 10.1381 14.1381 10.25 14 10.25C13.8619 10.25 13.75 10.1381 13.75 10C13.75 9.86193 13.8619 9.75 14 9.75C14.1381 9.75 14.25 9.86193 14.25 10Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 10px' }" />
          </svg>
        </div>
</template>
