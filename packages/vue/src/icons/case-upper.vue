<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CaseUpperIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the letters stand up tall from the baseline, A first and then B
// authored from scripts/authored
const bowlVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.88px) scaleY(1.25)',
      'translate(0px, 0.30px) scaleY(0.96)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.58,
      delay: 0.12,
      times: [0, 0.36, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bowl2Variants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.63px) scaleY(1.25)',
      'translate(0px, 0.10px) scaleY(0.96)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.58,
      delay: 0.12,
      times: [0, 0.36, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const letterVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.04px) scaleY(1.18)',
      'translate(0px, 0.23px) scaleY(0.96)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.58,
      times: [0, 0.36, 0.68, 1],
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
            <motion.path d="M18.5 7H16.5C16.0341 7 15.8011 7 15.6173 7.07612C15.3723 7.17761 15.1776 7.37229 15.0761 7.61732C15 7.80109 15 8.03406 15 8.5V12H18.5C19.8807 12 21 10.8807 21 9.5C21 8.11929 19.8807 7 18.5 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bowlVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 9.5px' }" />
            <motion.path d="M19.5 12H15V15.6C15 15.9723 15 16.1584 15.0489 16.309C15.1479 16.6135 15.3865 16.8521 15.691 16.9511C15.8416 17 16.0277 17 16.4 17H19.5C20.8807 17 22 15.8807 22 14.5C22 13.1193 20.8807 12 19.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bowl2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 14.5px' }" />
            <motion.path d="M4.62734 10.0987L5.32827 10.3655V10.3655L4.62734 10.0987ZM1.29908 16.7332C1.1517 17.1203 1.34605 17.5536 1.73316 17.7009C2.12027 17.8483 2.55355 17.654 2.70092 17.2668L2 17L1.29908 16.7332ZM10.2991 17.2668C10.4464 17.654 10.8797 17.8483 11.2668 17.7009C11.654 17.5536 11.8483 17.1203 11.7009 16.7332L11 17L10.2991 17.2668ZM8.37266 10.0987L7.67173 10.3655V10.3655L8.37266 10.0987ZM3.5 13.25C3.08579 13.25 2.75 13.5858 2.75 14C2.75 14.4142 3.08579 14.75 3.5 14.75V14V13.25ZM9.5 14.75C9.91421 14.75 10.25 14.4142 10.25 14C10.25 13.5858 9.91421 13.25 9.5 13.25V14V14.75ZM4.62734 10.0987L3.92642 9.83181L1.29908 16.7332L2 17L2.70092 17.2668L5.32827 10.3655L4.62734 10.0987ZM11 17L11.7009 16.7332L9.07358 9.83181L8.37266 10.0987L7.67173 10.3655L10.2991 17.2668L11 17ZM4.62734 10.0987L5.32827 10.3655C5.73034 9.30935 6.00423 8.59494 6.25631 8.13531C6.52854 7.63894 6.60953 7.75 6.5 7.75V7V6.25C5.69747 6.25 5.23535 6.87751 4.94111 7.41402C4.62672 7.98727 4.31078 8.8222 3.92642 9.83181L4.62734 10.0987ZM8.37266 10.0987L9.07358 9.83181C8.68922 8.82219 8.37328 7.98727 8.05889 7.41402C7.76465 6.87751 7.30253 6.25 6.5 6.25V7V7.75C6.39047 7.75 6.47146 7.63894 6.74369 8.13531C6.99577 8.59494 7.26966 9.30934 7.67173 10.3655L8.37266 10.0987ZM3.5 14V14.75H9.5V14V13.25H3.5V14Z" fill="currentColor" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 12px' }" />
          </svg>
        </div>
</template>
