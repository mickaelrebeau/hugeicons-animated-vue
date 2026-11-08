<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PayByCheckIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the check dips into the envelope slot, then the signature line rewrites
// authored from scripts/authored
const lineVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.56,
      delay: 0.24,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const checkVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1.2px, 2.2px)',
      'translate(0.18px, -0.33px)',
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
            <path d="M7 11H6C2.69067 11 2 11.6907 2 15V18C2 21.3093 2.69067 22 6 22H18C21.3093 22 22 21.3093 22 18V15C22 12.7889 21.6917 11.7468 20.5 11.2987" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 18L18 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17.2442 3.13291C17.6913 2.64778 17.9149 2.40522 18.1524 2.26374C18.7256 1.92234 19.4315 1.91173 20.0142 2.23573C20.2557 2.37001 20.4862 2.60575 20.947 3.07721C21.4079 3.54868 21.6383 3.78441 21.7696 4.03149C22.0863 4.62767 22.0759 5.34971 21.7422 5.93611C21.6039 6.17913 21.3668 6.40783 20.8926 6.86523L15.2504 12.3075C13.7556 13.7493 12.8297 14.0483 10.7592 13.9941C10.3833 13.9842 10.1954 13.9793 10.0862 13.8551C9.9769 13.731 9.99182 13.5393 10.0216 13.1558C10.1592 11.3881 10.4706 10.4824 11.6737 9.17706L17.2442 3.13291Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="checkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 8px' }" />
          </svg>
        </div>
</template>
