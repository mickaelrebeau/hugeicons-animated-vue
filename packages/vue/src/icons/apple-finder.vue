<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AppleFinderIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the face smiles, both eyes blink, and the window-shine slides across
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.12, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const eyeLeftVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.14)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.5, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const eyeRightVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.14)', 'scaleY(1.1)', 'scaleY(1)'],
    transition: { duration: 0.5, delay: 0.06, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const smileVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.7)', 'scaleX(1.12)', 'scaleX(1)'],
    transition: { duration: 0.54, delay: 0.12, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const shineVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.6px)', 'translateX(0px)'],
    transition: { duration: 0.62, delay: 0.08, times: [0, 0.46, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 8V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 9px' }" />
            <motion.path d="M17 8V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="eyeRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 9px' }" />
            <motion.path d="M7 16.5C10.5 18.5 13.5 18.5 17 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="smileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
            <motion.path d="M12.9896 2.5C12.1238 3.78525 10.5163 7.71349 10.0737 11.5798C9.98097 12.3899 9.9346 12.795 10.1905 13.1176C10.2151 13.1486 10.2474 13.1843 10.2757 13.212C10.5708 13.5 11.0149 13.5 11.9031 13.5C12.3889 13.5 12.6317 13.5 12.7766 13.6314C12.7923 13.6457 12.8051 13.6588 12.819 13.6748C12.9468 13.8225 12.9383 14.072 12.9212 14.5709C12.8685 16.1156 12.9401 19.0524 14 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shineVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
