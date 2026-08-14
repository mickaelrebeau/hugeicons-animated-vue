<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Wallet01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// a banknote rises through the opening while the wallet and clasp stay coherent
const walletVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.98)', 'scaleX(1.01)', 'scaleX(1)'],
    transition: { duration: 0.56, ease: [0.23, 1, 0.32, 1] },
  },
};

const claspVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.34)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: { duration: 0.52, delay: 0.06, ease: [0.23, 1, 0.32, 1] },
  },
};

const banknoteVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-3.8px)', 'translateY(-3.8px)', 'translateY(0.25px)', 'translateY(0px)'],
    transition: { duration: 0.68, ease: [0.23, 1, 0.32, 1], times: [0, 0.34, 0.56, 0.84, 1] },
  },
};
const generatedGeometryVariants: Variants = {
  normal: { visibility: 'hidden', transition: { duration: 0.08 } },
  animate: { visibility: 'visible', transition: { duration: 0.08 } },
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
            <motion.g :variants="generatedGeometryVariants" :animate="controls" initial="normal">
            <motion.path d="M7.5 7V5.4C7.5 4.85 7.95 4.4 8.5 4.4H15.5C16.05 4.4 16.5 4.85 16.5 5.4V7M10.5 5.7H13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2" :variants="banknoteVariants" :animate="controls" initial="normal" />
            </motion.g>
            <motion.path d="M14 3H5C3.89543 3 3 3.89543 3 5C3 6.10457 3.89543 7 5 7H18C18 6.07003 18 5.60504 17.8978 5.22354C17.6204 4.18827 16.8117 3.37962 15.7765 3.10222C15.395 3 14.93 3 14 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="walletVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M3 5V15C3 17.8284 3 19.2426 3.87868 20.1213C4.75736 21 6.17157 21 9 21H15C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15V13C21 10.1716 21 8.75736 20.1213 7.87868C19.2426 7 17.8284 7 15 7H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="walletVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M21 12H19C18.535 12 18.3025 12 18.1118 12.0511C17.5941 12.1898 17.1898 12.5941 17.0511 13.1118C17 13.3025 17 13.535 17 14C17 14.465 17 14.6975 17.0511 14.8882C17.1898 15.4059 17.5941 15.8102 18.1118 15.9489C18.3025 16 18.535 16 19 16H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="claspVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 14px' }" />
          </svg>
        </div>
</template>
