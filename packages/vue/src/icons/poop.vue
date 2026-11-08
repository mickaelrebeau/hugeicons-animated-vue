<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PoopIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pile squishes down and springs back up
// authored from scripts/authored
const pileVariants: Variants = {
  normal: { transform: 'scale(1, 1)' },
  animate: {
    transform: ['scale(1, 1)', 'scale(1.1, 0.86)', 'scale(0.95, 1.07)', 'scale(1.01, 0.99)', 'scale(1, 1)'],
    transition: {
      duration: 0.66,
      times: [0, 0.24, 0.5, 0.76, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.g :variants="pileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px', transformBox: 'view-box' }">
              <path d="M19.2007 14C20.3305 14.8357 21 15.8744 21 17C21 19.7614 16.9706 22 12 22C7.02944 22 3 19.7614 3 17C3 15.8744 3.6695 14.8357 4.79934 14" stroke="currentColor" stroke-width="1.5" />
              <path d="M12.7585 8C11.2229 7.11636 9.9284 6.78583 8.89652 6.79725M8.89652 6.79725C7.009 6.81815 6 7.9832 6 9C6 10.6569 8.59363 12 11.793 12C14.9924 12 16.8707 10.4819 17.5861 9C19.0343 6 16.6206 2.5 11.3103 2C12.4367 3.36484 13.531 6.23506 8.89652 6.79725Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
              <path d="M17.0144 10C18.8351 10.7211 20 11.8265 20 13.0657C20 15.2386 16.4183 17 12 17C7.58172 17 4 15.2386 4 13.0657C4 11.9588 4.92955 10.9586 6.42571 10.2437" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            </motion.g>
          </svg>
        </div>
</template>
