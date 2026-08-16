<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowUpAzIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow lifts first, then A sits above Z in the new ascending order
// authored from scripts/authored
const shaftVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -2.4px)',
      'translate(0px, 0.288px)',
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
      'translate(0px, -2.6px)',
      'translate(0px, 0.312px)',
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

const letterAVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: { duration: 0.52, delay: 0.1, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterZVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'],
    transition: { duration: 0.56, delay: 0.16, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M7.75 5V20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shaftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 12.5px' }" />
            <motion.path d="M11.75 7.99997C11.75 7.99997 8.80405 4.00001 7.74997 4C6.69589 3.99999 3.75 8 3.75 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.8px 6px' }" />
            <motion.path d="M16.25 7.25C15.8358 7.25 15.5 7.58579 15.5 8C15.5 8.41421 15.8358 8.75 16.25 8.75V8V7.25ZM19.25 8.75C19.6642 8.75 20 8.41421 20 8C20 7.58579 19.6642 7.25 19.25 7.25V8V8.75ZM15.841 8.10867L15.1252 7.88496H15.1252L15.841 8.10867ZM14.5341 9.77629C14.4106 10.1717 14.6309 10.5923 15.0263 10.7159C15.4217 10.8394 15.8423 10.6191 15.9659 10.2237L15.25 10L14.5341 9.77629ZM19.5341 10.2237C19.6577 10.6191 20.0783 10.8394 20.4737 10.7159C20.8691 10.5923 21.0894 10.1717 20.9659 9.77629L20.25 10L19.5341 10.2237ZM19.659 8.10867L20.3748 7.88496V7.88496L19.659 8.10867ZM16.25 8V8.75H19.25V8V7.25H16.25V8ZM15.841 8.10867L15.1252 7.88496L14.5341 9.77629L15.25 10L15.9659 10.2237L16.5569 8.33238L15.841 8.10867ZM20.25 10L20.9659 9.77629L20.3748 7.88496L19.659 8.10867L18.9431 8.33238L19.5341 10.2237L20.25 10ZM15.841 8.10867L16.5569 8.33238C16.9588 7.04617 17.2364 6.07258 17.509 5.39543C17.6452 5.05719 17.7546 4.86127 17.8363 4.75958C17.9116 4.66587 17.8806 4.75 17.75 4.75V4V3.25C17.2518 3.25 16.8962 3.5347 16.6669 3.82011C16.444 4.09755 16.2689 4.45929 16.1175 4.83521C15.8151 5.58639 15.5058 6.66713 15.1252 7.88496L15.841 8.10867ZM19.659 8.10867L20.3748 7.88496C19.9942 6.66713 19.6849 5.58639 19.3825 4.83521C19.2311 4.45929 19.056 4.09755 18.8331 3.82011C18.6038 3.5347 18.2482 3.25 17.75 3.25V4V4.75C17.6194 4.75 17.5884 4.66587 17.6637 4.75958C17.7454 4.86127 17.8548 5.05719 17.991 5.39543C18.2636 6.07258 18.5412 7.04617 18.9431 8.33238L19.659 8.10867Z" fill="currentColor" :variants="letterAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 7px' }" />
            <motion.path d="M15.75 14H18.115C19.0386 14 19.5004 14 19.6353 14.2879C19.7701 14.5758 19.4745 14.9306 18.8832 15.6402L16.6168 18.3598C16.0255 19.0694 15.7299 19.4242 15.8647 19.7121C15.9996 20 16.4614 20 17.385 20H19.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterZVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 17px' }" />
          </svg>
        </div>
</template>
