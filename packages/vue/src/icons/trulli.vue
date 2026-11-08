<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TrulliIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cone roof pinnacle bobs and the door nods
// authored from scripts/authored
const roofVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -0.8px)',
      'translate(0px, 0.11200000000000002px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.2, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M3.67201 10.5471L7.47975 5.84674C9.55727 3.28222 10.596 1.99995 12.0001 1.99995C13.4042 1.99995 14.443 3.28222 16.5205 5.84674L20.3282 10.5471C20.8408 11.1798 21.097 11.4961 20.9664 11.748C20.8357 12 20.4154 12 19.5748 12H4.4254C3.5848 12 3.1645 12 3.03386 11.748C2.90322 11.4961 3.15949 11.1798 3.67201 10.5471Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="roofVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7px' }" />
            <motion.path d="M6.00012 8.50764C9.32819 9.40699 10.8212 5.23135 13.5795 7.91038C15.0001 9.29003 16.4165 9.20495 18.0001 8.50764" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="roofVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.3px' }" />
            <motion.path d="M10.0002 21.9999V17.9999C10.0002 16.8953 10.8957 15.9999 12.0002 15.9999C13.1048 15.9999 14.0002 16.8953 14.0002 17.9999V21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <path d="M19.5002 11.9999L19.5002 19.9999C19.5002 20.9427 19.5002 21.4141 19.2074 21.707C18.9145 21.9999 18.4431 21.9999 17.5002 21.9999L6.50024 21.9999C5.55743 21.9999 5.08603 21.9999 4.79314 21.707C4.50024 21.4141 4.50024 20.9427 4.50024 19.9999L4.50024 11.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
