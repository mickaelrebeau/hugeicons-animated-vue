<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CargoShipIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the ship rolls on the swell, the sea slides under it and the stack puffs smoke
// authored from scripts/authored
const seaVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0.8px, 0px)',
      'translate(-0.4px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.86,
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

const hullVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.29px, 0.01px) rotate(-3deg)',
      'translate(0.24px, 0.01px) rotate(2.5deg)',
      'translate(-0.10px, 0.00px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
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

const hull2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.59px, 0.02px) rotate(-3deg)',
      'translate(0.49px, 0.01px) rotate(2.5deg)',
      'translate(-0.20px, 0.00px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
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

const hull3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.86px, 0.02px) rotate(-3deg)',
      'translate(0.72px, 0.02px) rotate(2.5deg)',
      'translate(-0.29px, 0.00px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.86,
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

const puffVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0.65px, -0.45px) scale(1)',
      'translate(1.3px, -0.9px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.1,
      times: [0, 0.16, 0.42, 1],
      ease: [
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const puff2Variants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(0.4)', opacity: 0 },
  animate: {
    transform: [
      'translate(0px, 0px) scale(0.4)',
      'translate(0px, 0px) scale(0.4)',
      'translate(0.5px, -0.6px) scale(1)',
      'translate(1px, -1.2px) scale(1.5)',
    ],
    opacity: [0, 0, 0.9, 0],
    transition: {
      duration: 0.8,
      delay: 0.36,
      times: [0, 0.16, 0.42, 1],
      ease: [
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
            <motion.path d="M2 21.494C3.2945 21.5899 4.38367 20.5 5.33333 20.5C6.283 20.5 7.82473 21.5053 8.66667 21.494C9.67699 21.5025 10.8604 20.5 12 20.5C13.1396 20.5 14.323 21.5025 15.3333 21.494C16.6278 21.5899 17.717 20.5 18.6667 20.5C19.6163 20.5 21.1581 21.5053 22 21.494" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M6 20.5C4.58214 18.7336 3.58286 16.4728 3.15734 15.2748C3.0224 14.8949 2.95494 14.705 3.03329 14.5234C3.11163 14.3419 3.30377 14.2568 3.68803 14.0866L11.1772 10.7692C11.5824 10.5897 11.785 10.5 12 10.5C12.215 10.5 12.4176 10.5897 12.8228 10.7692L20.312 14.0866C20.6962 14.2568 20.8884 14.3419 20.9667 14.5234C21.0451 14.705 20.9776 14.8949 20.8427 15.2748C20.4171 16.4728 19.4179 18.7336 18 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hullVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15.5px' }" />
            <motion.path d="M6 13L6.21591 10.1932C6.35068 8.44115 6.41807 7.56511 6.99316 7.03256C7.56826 6.5 8.44688 6.5 10.2041 6.5H13.7959C15.5531 6.5 16.4317 6.5 17.0068 7.03256C17.5819 7.56511 17.6493 8.44115 17.7841 10.1932L18 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hull2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9.8px' }" />
            <motion.path d="M8.5 6.5L8.67151 5.1279C8.82792 3.87661 8.90613 3.25097 9.33147 2.87548C9.75681 2.5 10.3873 2.5 11.6483 2.5H12.3517C13.6127 2.5 14.2432 2.5 14.6685 2.87548C15.0939 3.25097 15.1721 3.87661 15.3285 5.1279L15.5 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hull3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.5px' }" />
            <motion.circle cx="13.6" cy="1.4" r="0.6" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puffVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12.6" cy="1.6" r="0.45" stroke-width="1.1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="puff2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
