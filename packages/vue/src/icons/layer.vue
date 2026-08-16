<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LayerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the layers separate in depth, pause, and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.86px) rotate(-1.08deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.51px, -1.29px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
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
            <motion.path d="M9.60573 4.81298C10.7856 4.27099 11.3755 4 12 4C12.6245 4 13.2144 4.27099 14.3943 4.81298L19.2873 7.06064C21.0958 7.89137 22 8.30674 22 9C22 9.69326 21.0958 10.1086 19.2873 10.9394L14.3943 13.187C13.2144 13.729 12.6245 14 12 14C11.3755 14 10.7856 13.729 9.60573 13.187L4.7127 10.9394C2.90423 10.1086 2 9.69326 2 9C2 8.30674 2.90423 7.89137 4.7127 7.06064L9.60573 4.81298Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M20.2327 13.5C21.4109 14.062 22 14.4405 22 15.0001C22 15.6934 21.0958 16.1087 19.2873 16.9395L14.3943 19.1871C13.2144 19.7291 12.6245 20.0001 12 20.0001C11.3755 20.0001 10.7856 19.7291 9.60573 19.1871L4.7127 16.9395C2.90423 16.1087 2 15.6934 2 15.0001C2 14.4405 2.58909 14.062 3.76727 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.75px' }" />
          </svg>
        </div>
</template>
