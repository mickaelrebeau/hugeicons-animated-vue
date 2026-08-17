<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Audit01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the fingerprint stamps the page, then the two lines rewrite under it
// authored from scripts/authored
const linesVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.22)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.58,
      delay: 0.14,
      times: [0, 0.14, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const printVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.54, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M19 10.5V10C19 6.22876 19 4.34315 17.8284 3.17157C16.6569 2 14.7712 2 11 2C7.22876 2 5.34315 2 4.17157 3.17157C3 4.34315 3 6.22876 3 10V16C3 17.8638 3 18.7956 3.30448 19.5307C3.71046 20.5108 4.48915 21.2895 5.46927 21.6955C6.20435 22 7.13623 22 9 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 7H15M7 11H11" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="linesVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 9px' }" />
            <motion.path d="M15.2825 19.0044C15.2235 18.1157 15.118 17.1658 14.6817 16.0917C14.3095 15.1756 14.4132 13.0205 16.5 13.0205C18.5868 13.0205 18.6664 15.1756 18.2942 16.0917C17.8578 17.1658 17.7765 18.1157 17.7175 19.0044M21 22H12V20.7543C12 20.3078 12.2664 19.9154 12.6528 19.7928L14.9076 19.077C15.0684 19.0259 15.2348 19 15.4021 19H17.5979C17.7652 19 17.9316 19.0259 18.0924 19.077L20.3472 19.7928C20.7336 19.9154 21 20.3078 21 20.7543V22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="printVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 17.5px' }" />
          </svg>
        </div>
</template>
