<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Structure01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the top box hops and the branches rewrite to the two children
// authored from scripts/authored
const branchesVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const childVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.3,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const child2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      delay: 0.36,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const parentVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.168px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
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
            <motion.path d="M12 9V13M12 13H9C7.11438 13 6.17157 13 5.58579 13.5858C5 14.1716 5 15.1144 5 17M12 13H15C16.8856 13 17.8284 13 18.4142 13.5858C19 14.1716 19 15.1144 19 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branchesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M2.00866 21C2 20.7125 2 20.3821 2 20C2 18.5858 2 17.8787 2.43934 17.4393C2.87868 17 3.58579 17 5 17C6.41421 17 7.12132 17 7.56066 17.4393C8 17.8787 8 18.5858 8 20C8 20.3821 8 20.7125 7.99134 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="childVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 19px' }" />
            <motion.path d="M16.0087 21C16 20.7125 16 20.3821 16 20C16 18.5858 16 17.8787 16.4393 17.4393C16.8787 17 17.5858 17 19 17C20.4142 17 21.1213 17 21.5607 17.4393C22 17.8787 22 18.5858 22 20C22 20.3821 22 20.7125 21.9913 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="child2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 19px' }" />
            <motion.path d="M10.2857 3H13.7143C15.7888 3 16 4.10993 16 6C16 7.89007 15.7888 9 13.7143 9H10.2857C8.2112 9 8 7.89007 8 6C8 4.10993 8.2112 3 10.2857 3Z" stroke="currentColor" stroke-width="1.5" :variants="parentVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
          </svg>
        </div>
</template>
