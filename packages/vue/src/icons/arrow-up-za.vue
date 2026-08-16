<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowUpZaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow lifts first, then Z sits above A — reverse of az
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

const letterZVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-0.8px)', 'translateY(0.2px)', 'translateY(0px)'],
    transition: { duration: 0.52, delay: 0.1, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterAVariants: Variants = {
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
            <motion.path d="M15.75 4H18.115C19.0386 4 19.5004 4 19.6353 4.28792C19.7701 4.57584 19.4745 4.93062 18.8832 5.64018L16.6168 8.35982C16.0255 9.06938 15.7299 9.42416 15.8647 9.71208C15.9996 10 16.4614 10 17.385 10H19.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterZVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 7px' }" />
            <motion.path d="M16.25 17.25C15.8358 17.25 15.5 17.5858 15.5 18C15.5 18.4142 15.8358 18.75 16.25 18.75V18V17.25ZM19.25 18.75C19.6642 18.75 20 18.4142 20 18C20 17.5858 19.6642 17.25 19.25 17.25V18V18.75ZM15.841 18.1087L15.1252 17.885H15.1252L15.841 18.1087ZM14.5341 19.7763C14.4106 20.1717 14.6309 20.5923 15.0263 20.7159C15.4217 20.8394 15.8423 20.6191 15.9659 20.2237L15.25 20L14.5341 19.7763ZM19.5341 20.2237C19.6577 20.6191 20.0783 20.8394 20.4737 20.7159C20.8691 20.5923 21.0894 20.1717 20.9659 19.7763L20.25 20L19.5341 20.2237ZM19.659 18.1087L20.3748 17.885V17.885L19.659 18.1087ZM16.25 18V18.75H19.25V18V17.25H16.25V18ZM15.841 18.1087L15.1252 17.885L14.5341 19.7763L15.25 20L15.9659 20.2237L16.5569 18.3324L15.841 18.1087ZM20.25 20L20.9659 19.7763L20.3748 17.885L19.659 18.1087L18.9431 18.3324L19.5341 20.2237L20.25 20ZM15.841 18.1087L16.5569 18.3324C16.9588 17.0462 17.2364 16.0726 17.509 15.3954C17.6452 15.0572 17.7546 14.8613 17.8363 14.7596C17.9116 14.6659 17.8806 14.75 17.75 14.75V14V13.25C17.2518 13.25 16.8962 13.5347 16.6669 13.8201C16.444 14.0975 16.2689 14.4593 16.1175 14.8352C15.8151 15.5864 15.5058 16.6671 15.1252 17.885L15.841 18.1087ZM19.659 18.1087L20.3748 17.885C19.9942 16.6671 19.6849 15.5864 19.3825 14.8352C19.2311 14.4593 19.056 14.0975 18.8331 13.8201C18.6038 13.5347 18.2482 13.25 17.75 13.25V14V14.75C17.6194 14.75 17.5884 14.6659 17.6637 14.7596C17.7454 14.8613 17.8548 15.0572 17.991 15.3954C18.2636 16.0726 18.5412 17.0462 18.9431 18.3324L19.659 18.1087Z" fill="currentColor" :variants="letterAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 17px' }" />
          </svg>
        </div>
</template>
