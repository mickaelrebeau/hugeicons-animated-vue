<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WindPower03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three blades spin around the hub
// authored from scripts/authored
const rotorVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-5.01px, 1.95px) rotate(70deg)',
      'translate(-2.79px, -7.15px) rotate(250deg)',
      'translate(-0.40px, 0.52px) rotate(368deg)',
      'translate(0.00px, -0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rotor2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(4.70px, 3.29px) rotate(70deg)',
      'translate(-4.70px, 6.71px) rotate(250deg)',
      'translate(0.70px, 0.05px) rotate(368deg)',
      'translate(-0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const rotor3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.12px, -5.38px) rotate(70deg)',
      'translate(7.68px, 0.18px) rotate(250deg)',
      'translate(-0.32px, -0.57px) rotate(368deg)',
      'translate(0.00px, 0.00px) rotate(360deg)',
    ],
    transition: {
      duration: 0.9,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <path d="M14 10.8664C14 11.9719 13.1046 12.868 12 12.868C10.8954 12.868 10 11.9719 10 10.8664C10 9.76091 10.8954 8.86475 12 8.86475C13.1046 8.86475 14 9.76091 14 10.8664Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M13.9907 10.6843L20 14.3678C19.1716 15.8036 17.3368 16.2955 15.9019 15.4666L11.7373 12.8487" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rotorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.9px 13.5px' }" />
            <motion.path d="M13.484 9.50448L13.484 2.36762C11.8271 2.36758 10.5168 3.71191 10.5168 5.36975C10.5168 5.36975 10.5168 7.88979 10.5168 9.50451" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rotor2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.9px' }" />
            <motion.path d="M10.007 10.6865L4 14.3681C4.82843 15.8039 6.6632 16.2958 8.09808 15.4669L12.2617 12.8502" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rotor3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.1px 13.5px' }" />
            <path d="M13.4502 16.8694L13.7702 18.8916C13.9962 20.4963 14.1092 21.2987 13.8547 21.8356C13.6001 22.3725 13.1067 22.3726 12.1199 22.3726H11.8801C10.8933 22.3726 10.3999 22.3725 10.1453 21.8356C9.89078 21.2987 10.0038 20.4963 10.2298 18.8916L10.5498 16.8694" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
