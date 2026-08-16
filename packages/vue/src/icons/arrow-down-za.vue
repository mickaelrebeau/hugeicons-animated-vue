<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrowDownZaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow drops first, then Z sits above A in the reverse order
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

const letterAVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(1.4px)', 'translateY(-0.2px)', 'translateY(0px)'],
    transition: { duration: 0.56, delay: 0.16, times: [0, 0.4, 0.74, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterZVariants: Variants = {
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
            <motion.path d="M16.25 17.2499C15.8358 17.2499 15.5 17.5857 15.5 17.9999C15.5 18.4141 15.8358 18.7499 16.25 18.7499V17.9999V17.2499ZM19.25 18.7499C19.6642 18.7499 20 18.4141 20 17.9999C20 17.5857 19.6642 17.2499 19.25 17.2499V17.9999V18.7499ZM15.841 18.1086L15.1252 17.8849H15.1252L15.841 18.1086ZM14.5341 19.7762C14.4106 20.1716 14.6309 20.5922 15.0263 20.7158C15.4217 20.8393 15.8423 20.619 15.9659 20.2236L15.25 19.9999L14.5341 19.7762ZM19.5341 20.2236C19.6577 20.619 20.0783 20.8393 20.4737 20.7158C20.8691 20.5922 21.0894 20.1716 20.9659 19.7762L20.25 19.9999L19.5341 20.2236ZM19.659 18.1086L20.3748 17.8849V17.8849L19.659 18.1086ZM16.25 17.9999V18.7499H19.25V17.9999V17.2499H16.25V17.9999ZM15.841 18.1086L15.1252 17.8849L14.5341 19.7762L15.25 19.9999L15.9659 20.2236L16.5569 18.3323L15.841 18.1086ZM20.25 19.9999L20.9659 19.7762L20.3748 17.8849L19.659 18.1086L18.9431 18.3323L19.5341 20.2236L20.25 19.9999ZM15.841 18.1086L16.5569 18.3323C16.9552 17.0579 17.2324 16.176 17.4948 15.6046C17.6257 15.3196 17.7254 15.1759 17.7891 15.1103C17.8343 15.0639 17.8129 15.1025 17.75 15.1025V14.3525V13.6025C17.3195 13.6025 16.9735 13.7977 16.7141 14.0642C16.4733 14.3117 16.2884 14.6375 16.1317 14.9785C15.8191 15.6591 15.5094 16.6553 15.1252 17.8849L15.841 18.1086ZM19.659 18.1086L20.3748 17.8849C19.9906 16.6553 19.6809 15.6591 19.3683 14.9785C19.2116 14.6375 19.0267 14.3117 18.7859 14.0642C18.5265 13.7977 18.1805 13.6025 17.75 13.6025V14.3525V15.1025C17.6871 15.1025 17.6657 15.0639 17.7109 15.1103C17.7746 15.1759 17.8743 15.3196 18.0052 15.6046C18.2676 16.176 18.5448 17.0579 18.9431 18.3323L19.659 18.1086Z" fill="currentColor" :variants="letterAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 17.2px' }" />
            <motion.path d="M15.75 4H18.115C19.0386 4 19.5004 4 19.6353 4.28792C19.7701 4.57584 19.4745 4.93062 18.8832 5.64018L16.6168 8.35982C16.0255 9.06938 15.7299 9.42416 15.8647 9.71208C15.9996 10 16.4614 10 17.385 10H19.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterZVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 7px' }" />
          </svg>
        </div>
</template>
