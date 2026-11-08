<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Download03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow drops into the open box
// authored from scripts/authored
const boxVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.26, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0px, -0.192px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M14 21.5H10C6.71252 21.5 5.06878 21.5 3.96243 20.592C3.75989 20.4258 3.57418 20.2401 3.40796 20.0376C2.5 18.9312 2.5 17.2875 2.5 14C2.5 10.7125 2.5 9.06878 3.40796 7.96243C3.57418 7.75989 3.75989 7.57418 3.96243 7.40796C5.06878 6.5 6.71252 6.5 10 6.5H14C17.2875 6.5 18.9312 6.5 20.0376 7.40796C20.2401 7.57418 20.4258 7.75989 20.592 7.96243C21.5 9.06878 21.5 10.7125 21.5 14C21.5 17.2875 21.5 18.9312 20.592 20.0376C20.4258 20.2401 20.2401 20.4258 20.0376 20.592C18.9312 21.5 17.2875 21.5 14 21.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boxVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <path d="M2.5 14.5V10.5C2.5 6.72876 2.5 4.84315 3.67157 3.67157C4.84315 2.5 6.72876 2.5 10.5 2.5H13.5C17.2712 2.5 19.1569 2.5 20.3284 3.67157C21.5 4.84315 21.5 6.72876 21.5 10.5V14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15 14.5C15 14.5 12.7905 17.4999 12 17.4999C11.2094 17.5 9 14.4999 9 14.4999M12 17L12 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
          </svg>
        </div>
</template>
