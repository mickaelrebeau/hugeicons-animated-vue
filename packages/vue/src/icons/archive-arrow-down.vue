<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArchiveArrowDownIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the file-arrow drops into the drawer, and the seam takes the weight
// authored from scripts/authored
const bodyVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.8px)', 'translateY(0px)'],
    transition: { duration: 0.58, delay: 0.12, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const seamVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.2px)', 'translateY(0px)'],
    transition: { duration: 0.58, delay: 0.1, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.2px)',
      'translate(0px, -0.264px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      delay: 0.04,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shaftVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: [
      'translateY(0px) scaleY(1)',
      'translateY(1.4px) scaleY(0.82)',
      'translateY(-0.2px) scaleY(1.04)',
      'translateY(0px) scaleY(1)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.4, 0.72, 1],
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
            <motion.path d="M8 3C7.28543 3.05475 6.78159 3.18135 6.34921 3.47408C5.58736 3.98988 5.22202 4.90323 4.49134 6.72994L2.42914 11.9271C2.21522 12.4619 2.10826 12.7293 2.05413 13.0104C2 13.2915 2 13.5795 2 14.1555V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H16C18.8284 21 20.2426 21 21.1213 20.1213C22 19.2426 22 17.8284 22 15V14.1555C22 13.5795 22 13.2915 21.9459 13.0104C21.8917 12.7293 21.7848 12.4619 21.5709 11.9271L19.5087 6.72994C18.778 4.90323 18.4126 3.98988 17.6508 3.47408C17.2184 3.18135 16.7146 3.05475 16 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M2.5 13H5.58579C6.16263 13 6.45105 13 6.71982 13.0766C6.86747 13.1187 7.00978 13.1776 7.14394 13.2523C7.38816 13.3882 7.59211 13.5921 8 14C8.40789 14.4079 8.61184 14.6118 8.85606 14.7477C8.99022 14.8224 9.13253 14.8813 9.28018 14.9234C9.54895 15 9.83737 15 10.4142 15H13.5858C14.1626 15 14.4511 15 14.7198 14.9234C14.8675 14.8813 15.0098 14.8224 15.1439 14.7477C15.3882 14.6118 15.5921 14.4079 16 14C16.4079 13.5921 16.6118 13.3882 16.8561 13.2523C16.9902 13.1776 17.1325 13.1187 17.2802 13.0766C17.5489 13 17.8374 13 18.4142 13H21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seamVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M15 7.00002C15 7.00002 12.7905 9.99999 12 10C11.2094 10 9 7 9 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
            <motion.path d="M12 3V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3px' }" />
          </svg>
        </div>
</template>
