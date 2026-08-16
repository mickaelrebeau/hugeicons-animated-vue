<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AppleMusicIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two beamed notes bounce, the right one a beat later
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.16, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const notesVariants: Variants = {
  normal: { transform: 'rotate(0deg) translateY(0px)' },
  animate: {
    transform: [
      'rotate(0deg) translateY(0px)',
      'rotate(-6deg) translateY(-1.4px)',
      'rotate(2deg) translateY(0.3px)',
      'rotate(0deg) translateY(0px)',
    ],
    transition: { duration: 0.64, times: [0, 0.36, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4.25276 20.302C5.6554 21.5 7.77027 21.5 12 21.5C16.2297 21.5 18.3446 21.5 19.7472 20.302C19.9464 20.1319 20.1319 19.9464 20.302 19.7472C21.5 18.3446 21.5 16.2297 21.5 12C21.5 7.77027 21.5 5.6554 20.302 4.25276C20.1319 4.05358 19.9464 3.86808 19.7472 3.69797C18.3446 2.5 16.2297 2.5 12 2.5C7.77027 2.5 5.6554 2.5 4.25276 3.69797C4.05358 3.86808 3.86808 4.05358 3.69797 4.25276C2.5 5.6554 2.5 7.77027 2.5 12C2.5 16.2297 2.5 18.3446 3.69797 19.7472C3.86808 19.9464 4.05358 20.1319 4.25276 20.302Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9.05181 16.0523L7.44711 16.6596C7.17802 16.7615 7 17.0193 7 17.3071C7 17.7968 7.49439 18.1317 7.94888 17.9498L8.87139 17.5806C9.25105 17.4287 9.5 17.0608 9.5 16.6517V9.5M15.5518 14.5517L13.9471 15.159C13.678 15.2608 13.5 15.5186 13.5 15.8064C13.5 16.2961 13.9944 16.631 14.4489 16.4491L15.3714 16.08C15.751 15.928 16 15.5602 16 15.1511V8.20125M9.5 9.5L16 8.20125M9.5 9.5V8.65872M16 8.20125V7.35063M16 7.35063V6.5L9.5 7.81743V8.65872M16 7.35063L9.5 8.65872" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="notesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.3px' }" />
          </svg>
        </div>
</template>
