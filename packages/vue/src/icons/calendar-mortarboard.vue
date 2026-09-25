<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarMortarboardIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cap is tossed and the tassel lags behind
// authored from scripts/authored
const capVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg)',
      'translate(-0.4px, -3.2px) rotate(-14deg)',
      'translate(0.3px, -0.4px) rotate(5deg)',
      'translate(0px, 0px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.36, 0.68, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const tasselVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(0deg)', 'rotate(22deg)', 'rotate(-6deg)', 'rotate(0deg)'],
    transition: { duration: 0.78, times: [0, 0.28, 0.52, 0.76, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M15 2V6M7 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M20 12C20 8.22876 20 6.34315 18.8284 5.17157C17.6569 4 15.7712 4 12 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 10H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17.4642 18.8143L21.5358 17.1857C21.8161 17.0735 22 16.802 22 16.5C22 16.198 21.8161 15.9265 21.5358 15.8143L17.4642 14.1857C17.1576 14.063 16.8303 14 16.5 14C16.1697 14 15.8424 14.063 15.5358 14.1857L11.4642 15.8143C11.1839 15.9265 11 16.198 11 16.5C11 16.802 11.1839 17.0735 11.4642 17.1857L15.5358 18.8143C15.8424 18.937 16.1697 19 16.5 19C16.8303 19 17.1576 18.937 17.4642 18.8143Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="capVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 16.5px' }" />
            <motion.path d="M22 16.5V19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tasselVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 16.5px' }" />
            <path d="M13.5 18V20.1538C13.5 20.6435 13.8161 21.1131 14.3787 21.4593C14.9413 21.8055 15.7044 22 16.5 22C17.2956 22 18.0587 21.8055 18.6213 21.4593C19.1839 21.1131 19.5 20.6435 19.5 20.1538V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
