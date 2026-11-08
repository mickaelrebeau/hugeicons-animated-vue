<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RssLockedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the padlock clamps shut beside the feed
// authored from scripts/authored
const shackleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.8px)',
      'translate(0px, -0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.14, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M18 21C18 19.2468 17.6992 17.5639 17.1465 16M3 6C5.13331 6 7.16261 6.44534 9 7.24813" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M11 21C11 16.5817 7.41828 13 3 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3.75 20.5H3.5M4 20.5C4 20.7761 3.77614 21 3.5 21C3.22386 21 3 20.7761 3 20.5C3 20.2239 3.22386 20 3.5 20C3.77614 20 4 20.2239 4 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M15 7V5C15 3.89543 15.8954 3 17 3C18.1046 3 19 3.89543 19 5V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 5px' }" />
            <motion.path d="M18.5 7H15.5C14.5654 7 14.0981 7 13.75 7.20096C13.522 7.33261 13.3326 7.52197 13.201 7.75C13 8.09808 13 8.56538 13 9.5C13 10.4346 13 10.9019 13.201 11.25C13.3326 11.478 13.522 11.6674 13.75 11.799C14.0981 12 14.5654 12 15.5 12H18.5C19.4346 12 19.9019 12 20.25 11.799C20.478 11.6674 20.6674 11.478 20.799 11.25C21 10.9019 21 10.4346 21 9.5C21 8.56538 21 8.09808 20.799 7.75C20.6674 7.52197 20.478 7.33261 20.25 7.20096C19.9019 7 19.4346 7 18.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 9.5px' }" />
          </svg>
        </div>
</template>
