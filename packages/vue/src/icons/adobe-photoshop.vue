<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AdobePhotoshopIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the P holds while the S wiggles through its own curve
// authored from scripts/authored
const badgeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.46, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const letterVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.06)', 'scale(1)'],
    transition: { duration: 0.5, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const curveVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(-11deg)', 'skewX(7deg)', 'skewX(0deg)'],
    transition: { duration: 0.58, delay: 0.06, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.5 16V12M6.5 12V9.125C6.5 9.00892 6.5 8.95087 6.50482 8.90198C6.55158 8.42721 6.92721 8.05158 7.40198 8.00482C7.45087 8 7.50892 8 7.625 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="letterVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 16px' }" />
            <motion.path d="M17.4658 11.2225C17.2923 10.5267 16.4782 10 15.5 10C14.3954 10 13.5 10.6716 13.5 11.5C13.5 12.3284 14.3954 13 15.5 13C16.6046 13 17.5 13.6716 17.5 14.5C17.5 15.3284 16.6046 16 15.5 16C14.5183 16 13.7019 15.4696 13.5323 14.77" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="curveVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.5px 13px' }" />
          </svg>
        </div>
</template>
