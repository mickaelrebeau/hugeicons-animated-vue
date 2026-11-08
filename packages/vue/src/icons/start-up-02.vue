<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'StartUp02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the rocket launches up and to the right and its window glints
// authored from scripts/authored
const rocketVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, -1.2px)',
      'translate(-0.18px, 0.18px)',
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

const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)', opacity: 1 },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, -1.2px)',
      'translate(-0.18px, 0.18px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    opacity: [1, 0.4, 1, 1, 1],
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

const trailVariants: Variants = {
  normal: { transform: 'translateX(0px)', opacity: 0 },
  animate: {
    transform: [
      'translateX(0px)',
      'translateX(0px)',
      'translateX(-0.48px)',
      'translateX(-1.2px)',
      'translateX(-1.2px)',
    ],
    opacity: [0, 0, 1, 0, 0],
    transition: {
      duration: 0.7,
      times: [0, 0.2, 0.46, 0.86, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        'linear',
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
            <motion.path d="M7 11.2947C12.284 1.44656 18.8635 1.333 21.4928 2.50724C22.667 5.1365 22.5534 11.716 12.7053 17C12.6031 16.4129 12.0352 14.8749 10.5801 13.4199C9.12512 11.9648 7.58712 11.3969 7 11.2947Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rocketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.8px 9.2px' }" />
            <motion.path d="M14 16.8C16.0428 17.7334 16.2609 19.4069 16.5439 21C16.5439 21 20.8223 18.0481 18.0856 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rocketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.4px 17.5px' }" />
            <motion.path d="M7.19998 9.99987C6.26664 7.95709 4.59305 7.73899 3 7.45601C3 7.45601 5.95194 3.17753 10 5.91431" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rocketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 6.6px' }" />
            <motion.path d="M6.20866 13.9998C5.57677 14.6317 4.50255 16.4642 5.26082 18.739C7.53564 19.4973 9.36813 18.4231 10 17.7912" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.3px 16.7px' }" />
            <motion.path d="M18.0952 7.753C18.0952 6.7328 17.2682 5.90578 16.248 5.90578C15.2278 5.90578 14.4008 6.7328 14.4008 7.753C14.4008 8.77319 15.2278 9.60022 16.248 9.60022C17.2682 9.60022 18.0952 8.77319 18.0952 7.753Z" stroke="currentColor" stroke-width="1.5" :variants="rocketVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.2px 7.8px' }" />
            <motion.path d="M5 21L3 23M2 18L1 19" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="trailVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
