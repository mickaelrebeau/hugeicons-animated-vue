<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FencingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two foils cross and part
// authored from scripts/authored
const foilVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.00px, 1.15px) rotate(8deg)',
      'translate(-0.41px, -0.39px) rotate(-3deg)',
      'translate(0.13px, 0.14px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const foil2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.00px, 1.15px) rotate(-8deg)',
      'translate(0.41px, -0.39px) rotate(3deg)',
      'translate(-0.13px, 0.14px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M6.88673 15.6009L2.72303 18.5907C2.56872 18.7001 2.42869 18.8285 2.30621 18.9728C1.33417 20.1179 2.8868 21.6661 4.03001 20.6924C4.17151 20.5719 4.29775 20.4344 4.40576 20.283L7.38448 16.0995M9.01217 14.006C7.05577 12.0464 4.94319 13.6542 4.94319 13.6542C4.94319 13.6542 5.9327 14.6453 7.15333 15.868C8.37395 17.0906 9.31531 18.0335 9.31531 18.0335C9.31531 18.0335 10.9686 15.9657 9.01217 14.006ZM9.01217 14.006L20 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="foilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.7px 12.3px' }" />
            <motion.path d="M17.1133 15.6009L21.277 18.5907C21.4313 18.7001 21.5713 18.8285 21.6938 18.9728C22.6658 20.1179 21.1132 21.666 19.97 20.6924C19.8285 20.5719 19.7023 20.4344 19.5942 20.283L16.6155 16.0995M14.9878 14.006C16.9442 12.0464 19.0568 13.6542 19.0568 13.6542C19.0568 13.6542 18.0673 14.6453 16.8467 15.868C15.626 17.0906 14.6847 18.0335 14.6847 18.0335C14.6847 18.0335 13.0314 15.9657 14.9878 14.006ZM14.9878 14.006L4 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="foil2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 12.3px' }" />
          </svg>
        </div>
</template>
