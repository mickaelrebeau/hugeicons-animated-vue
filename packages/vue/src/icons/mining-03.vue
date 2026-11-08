<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mining03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pickaxe strikes and the coin pops
// authored from scripts/authored
const coinVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.3,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pickVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.20px, -1.49px) rotate(-16deg)',
      'translate(0.71px, 0.71px) rotate(6deg)',
      'translate(-0.12px, -0.11px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.56, 0.78, 1],
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
            <motion.path d="M16.9445 20.6667V15.3333M18.5052 15.3333V14M18.5052 22V20.6667M16.9445 18H20.0658M20.0658 18C20.5829 18 21.0021 18.4477 21.0021 19V19.6667C21.0021 20.219 20.5829 20.6667 20.0658 20.6667H16.0082M20.0658 18C20.5829 18 21.0021 17.5523 21.0021 17V16.3333C21.0021 15.781 20.5829 15.3333 20.0658 15.3333H16.0082" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="coinVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18px' }" />
            <motion.path d="M14.6956 4.18605C13.2951 3.31449 9.70074 1.64154 6.46298 2.06854C8.42149 3.43854 9.45182 4.17541 12.2314 6.68896M18.5673 8.11851C18.9392 8.73509 19.5616 9.92878 19.9974 11.1718M16.103 10.6214C16.3448 10.8972 16.6389 11.3118 16.8495 11.5563M10.3551 10.4183L3.41468 17.4677C2.85171 18.0395 2.86017 18.9751 3.43357 19.5575C4.00696 20.1399 4.92816 20.1485 5.49113 19.5767L12.4315 12.5274M11.8454 8.22564L14.5901 11.0134C14.8948 11.3229 15.3878 11.3241 15.6912 11.0159L19.0915 7.5622C19.3949 7.25405 19.3938 6.75331 19.089 6.44376L16.3444 3.65604C16.0396 3.34649 15.5466 3.34535 15.2432 3.6535L11.8429 7.10721C11.5395 7.41535 11.5407 7.91609 11.8454 8.22564Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="pickVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.4px 10.9px' }" />
          </svg>
        </div>
</template>
