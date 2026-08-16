<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDownAzIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow drops first, then A sits above Z in the new order
// authored from scripts/authored
const shaftVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.4px)',
      'translate(0px, -0.288px)',
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

const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 2.6px)',
      'translate(0px, -0.312px)',
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

const letterZVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'],
    transition: { duration: 0.56, delay: 0.16, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterAVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: { duration: 0.52, delay: 0.1, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M7.75 19V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 11.5px' }" />
            <motion.path d="M3.75 16C3.75 16 6.69596 20 7.75003 20C8.80411 20 11.75 16 11.75 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 18px' }" />
            <motion.path d="M15.75 14H18.115C19.0386 14 19.5004 14 19.6353 14.2879C19.7701 14.5758 19.4745 14.9306 18.8832 15.6402L16.6168 18.3598C16.0255 19.0694 15.7299 19.4242 15.8647 19.7121C15.9996 20 16.4614 20 17.385 20H19.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterZVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 17px' }" />
            <motion.path d="M16.25 7.24999C15.8358 7.24999 15.5 7.58578 15.5 7.99999C15.5 8.4142 15.8358 8.74999 16.25 8.74999V7.99999V7.24999ZM19.25 8.74999C19.6642 8.74999 20 8.4142 20 7.99999C20 7.58578 19.6642 7.24999 19.25 7.24999V7.99999V8.74999ZM15.841 8.10866L15.1252 7.88495H15.1252L15.841 8.10866ZM14.5341 9.77628C14.4106 10.1716 14.6309 10.5923 15.0263 10.7158C15.4217 10.8394 15.8423 10.6191 15.9659 10.2237L15.25 9.99999L14.5341 9.77628ZM19.5341 10.2237C19.6577 10.6191 20.0783 10.8394 20.4737 10.7158C20.8691 10.5923 21.0894 10.1716 20.9659 9.77628L20.25 9.99999L19.5341 10.2237ZM19.659 8.10866L20.3748 7.88495V7.88495L19.659 8.10866ZM16.25 7.99999V8.74999H19.25V7.99999V7.24999H16.25V7.99999ZM15.841 8.10866L15.1252 7.88495L14.5341 9.77628L15.25 9.99999L15.9659 10.2237L16.5569 8.33237L15.841 8.10866ZM20.25 9.99999L20.9659 9.77628L20.3748 7.88495L19.659 8.10866L18.9431 8.33236L19.5341 10.2237L20.25 9.99999ZM15.841 8.10866L16.5569 8.33237C16.9552 7.05793 17.2324 6.17607 17.4948 5.60465C17.6257 5.31968 17.7254 5.17592 17.7891 5.11041C17.8343 5.06393 17.8129 5.1026 17.75 5.1026V4.3526V3.6026C17.3195 3.6026 16.9735 3.79777 16.7141 4.0643C16.4733 4.31179 16.2884 4.63754 16.1317 4.97858C15.8191 5.65918 15.5094 6.65534 15.1252 7.88495L15.841 8.10866ZM19.659 8.10866L20.3748 7.88495C19.9906 6.65534 19.6809 5.65918 19.3683 4.97858C19.2116 4.63754 19.0267 4.31179 18.7859 4.0643C18.5265 3.79777 18.1805 3.6026 17.75 3.6026V4.3526V5.1026C17.6871 5.1026 17.6657 5.06393 17.7109 5.11041C17.7746 5.17592 17.8743 5.31968 18.0052 5.60465C18.2676 6.17607 18.5448 7.05793 18.9431 8.33236L19.659 8.10866Z" fill="currentColor" :variants="letterAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 7.2px' }" />
          </svg>
        </div>
</template>
