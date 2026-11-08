<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Login02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow pushes in through the doorframe
// authored from scripts/authored
const doorVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.22, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.6px, 0px)',
      'translate(-0.192px, 0px)',
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
            <motion.path d="M20.6073 4.00087C21 4.61597 21 5.41166 21 7.00304V16.997C21 18.5883 21 19.384 20.6073 19.9991C20.5372 20.109 20.4586 20.2132 20.3722 20.3108C19.8886 20.8572 19.1233 21.0758 17.5929 21.513C16.0586 21.9513 15.2914 22.1704 14.736 21.8417C14.6396 21.7847 14.55 21.7171 14.4687 21.6402C14 21.1965 14 20.3988 14 18.8034V5.19662C14 3.60122 14 2.80351 14.4687 2.35982C14.55 2.28288 14.6396 2.21527 14.736 2.15827C15.2914 1.82956 16.0586 2.0487 17.5929 2.48699C19.1233 2.92418 19.8886 3.14278 20.3722 3.68925C20.4586 3.78684 20.5372 3.89103 20.6073 4.00087Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="doorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12px' }" />
            <path d="M14 4H11.9829C10.0812 4 9.13039 4 8.5396 4.58579C8.21023 4.91238 8.06449 5.34994 8 6M14 20H11.9829C10.0812 20 9.13039 20 8.5396 19.4142C8.21023 19.0876 8.06449 18.6501 8 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 12H3M8.50005 9.49994C8.50005 9.49994 11 11.3412 11 12C11 12.6588 8.50003 14.4999 8.50003 14.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
          </svg>
        </div>
</template>
