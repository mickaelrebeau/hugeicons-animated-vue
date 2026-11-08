<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SmartWatch04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the watch hands sweep around the face
// authored from scripts/authored
const handsVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(72deg)',
      'rotate(251.99999999999997deg)',
      'rotate(370.8deg)',
      'rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <path d="M4.5 12C4.5 8.71252 4.5 7.06878 5.40796 5.96243C5.57418 5.75989 5.75989 5.57418 5.96243 5.40796C7.06878 4.5 8.71252 4.5 12 4.5C15.2875 4.5 16.9312 4.5 18.0376 5.40796C18.2401 5.57418 18.4258 5.75989 18.592 5.96243C19.5 7.06878 19.5 8.71252 19.5 12C19.5 15.2875 19.5 16.9312 18.592 18.0376C18.4258 18.2401 18.2401 18.4258 18.0376 18.592C16.9312 19.5 15.2875 19.5 12 19.5C8.71252 19.5 7.06878 19.5 5.96243 18.592C5.75989 18.4258 5.57418 18.2401 5.40796 18.0376C4.5 16.9312 4.5 15.2875 4.5 12Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M9 22H15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M9 2H15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M10 10L13 13M15 9L11 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 11px' }" />
          </svg>
        </div>
</template>
