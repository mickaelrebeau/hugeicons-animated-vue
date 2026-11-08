<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Napkins02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the folded napkin flops down on its point
// authored from scripts/authored
const napkinVariants: Variants = {
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

const foldVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.40px) scaleY(1.1)',
      'translate(0px, -0.20px) scaleY(0.95)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const chevronVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 0.6px)',
      'translate(0px, -0.09px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      delay: 0.1,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M17.129 9.93457L15.5593 6.7402C14.0063 3.5797 13.2297 1.99945 12 1.99945C10.7703 1.99945 9.99374 3.5797 8.44067 6.7402L6.87095 9.93457C6.22703 11.245 5.90506 11.9002 6.02457 12.5651C6.14407 13.2301 6.67308 13.7269 7.7311 14.7207L9.30082 16.195C10.5816 17.398 11.222 17.9995 12 17.9995C12.778 17.9995 13.4184 17.398 14.6992 16.195L16.2689 14.7207C17.3269 13.7269 17.8559 13.2301 17.9754 12.5651C18.0949 11.9002 17.773 11.245 17.129 9.93457Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="napkinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M17.129 13.9346C17.773 15.245 18.0949 15.9002 17.9754 16.5651C17.8559 17.2301 17.3269 17.7269 16.2689 18.7207L14.6992 20.195C13.4184 21.398 12.778 21.9995 12 21.9995C11.222 21.9995 10.5816 21.398 9.30082 20.195L7.7311 18.7207C6.67308 17.7269 6.14407 17.2301 6.02457 16.5651C5.90506 15.9002 6.22703 15.245 6.87095 13.9346" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="foldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M16.5 9.5L12 14L7.5 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="chevronVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.8px' }" />
          </svg>
        </div>
</template>
