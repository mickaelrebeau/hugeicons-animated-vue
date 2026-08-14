<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AlarmClockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clock rattles while its two existing alarm bells sweep through a broad mirrored arc;
// no additional ringing marks are introduced
const svgVariants: Variants = {
  normal: { rotate: 0, transition: { duration: 0.3 } },
  animate: {
    rotate: [0, -5, 4, -3, 2, -1, 0],
    transition: { duration: 0.62, ease: [0.77, 0, 0.175, 1], repeat: Infinity },
  },
};

const bellVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg)', transition: { duration: 0.16 } },
  animate: (direction: number) => ({
    transform: [
      'translate(0px, 0px) rotate(0deg)',
      'translate(' + direction * 2.6 + 'px, 0.9px) rotate(' + direction * -9 + 'deg)',
      'translate(' + direction * -0.45 + 'px, -0.25px) rotate(' + direction * 4 + 'deg)',
      'translate(' + direction * 2.1 + 'px, 0.65px) rotate(' + direction * -6 + 'deg)',
      'translate(' + direction * 0.35 + 'px, 0.1px) rotate(' + direction * -1 + 'deg)',
      'translate(0px, 0px) rotate(0deg)',
    ],
    transition: {
      duration: 0.68,
      ease: [0.77, 0, 0.175, 1],
      times: [0, 0.2, 0.42, 0.64, 0.82, 1],
      repeat: Infinity,
    },
  }),
};

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <motion.svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible" :variants="svgVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }">
            <path d="M20.5 12.5C20.5 17.1944 16.6944 21 12 21C7.30558 21 3.5 17.1944 3.5 12.5C3.5 7.80558 7.30558 4 12 4C16.6944 4 20.5 7.80558 20.5 12.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M5.88 18.7031L3.5 21.0031" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18.14 18.668L20.5 20.998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M5 3L2 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformBox: 'fill-box', transformOrigin: '50% 50%' }" />
            <motion.path d="M22 6L19 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bellVariants" :custom="-1" :animate="controls" initial="normal" :style="{ transformBox: 'fill-box', transformOrigin: '50% 50%' }" />
            <path d="M12 8V12.5L14 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </motion.svg>
        </div>
</template>
