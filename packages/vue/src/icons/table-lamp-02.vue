<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TableLamp02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lamp pull cord is tugged and the shade nods
// authored from scripts/authored
const shadeVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.28px, 0.02px) rotate(8deg)',
      'translate(-0.20px, 0.01px) rotate(-5.6deg)',
      'translate(0.08px, 0.00px) rotate(2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.14,
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

const cordVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1px)',
      'translate(0px, -0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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
            <path d="M5 20V22M19 20V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.5556 10H6.44444C4.34931 10 3.30175 10 2.65087 10.5858C2 11.1716 2 12.1144 2 14V16C2 17.8856 2 18.8284 2.65087 19.4142C3.30175 20 4.34931 20 6.44444 20H17.5556C19.6507 20 20.6983 20 21.3491 19.4142C22 18.8284 22 17.8856 22 16V14C22 12.1144 22 11.1716 21.3491 10.5858C20.6983 10 19.6507 10 17.5556 10Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 10.0001L12 20.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M16 15.0001L17 15.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M7 15.0001L8 15.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M8 2C6.1038 2 4.51109 3.27976 4.0638 5.01012C3.8557 5.81516 4.15776 6 4.95386 6H11.0461C11.8422 6 12.1443 5.81516 11.9362 5.01012C11.4889 3.27976 9.8962 2 8 2Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="shadeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 4px' }" />
            <path d="M8 6V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11 6V7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cordVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6.8px' }" />
          </svg>
        </div>
</template>
