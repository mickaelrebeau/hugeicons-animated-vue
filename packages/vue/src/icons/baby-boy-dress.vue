<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BabyBoyDressIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// collar, tunic and sash hang from the shoulders as one garment and sway, then settle
// authored from scripts/authored
const collarVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.10px, -0.00px) rotate(-5deg)',
      'translate(-0.13px, -0.01px) rotate(7deg)',
      'translate(0.04px, -0.00px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.78,
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

const tunicVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.76px, -0.03px) rotate(-5deg)',
      'translate(-1.06px, -0.06px) rotate(7deg)',
      'translate(0.30px, -0.01px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.78,
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

const sashVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.46px, -0.02px) rotate(-5deg)',
      'translate(-0.65px, -0.04px) rotate(7deg)',
      'translate(0.18px, -0.00px) rotate(-2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.78,
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
            <motion.path d="M5.94724 9.003C5.94724 9.003 3.68265 11.252 3.01654 10.9766C2.07687 10.5882 1.67051 6.8204 2.30951 6.24512L4.76679 4.03287C5.90144 3.01137 5.93084 3 7.43853 3H8.95703C9.1835 4.3592 10.4956 5.99207 12 5.99207C13.5044 5.99207 14.8165 4.3592 15.043 3H16.5615C18.0692 3 18.0986 3.01136 19.2332 4.03287L21.6905 6.24512C22.3295 6.8204 21.9231 10.5882 20.9835 10.9766C20.3173 11.252 18.0489 9.003 18.0489 9.003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="collarVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.1px' }" />
            <motion.path d="M6 8V18.5267C6 19.2323 6.11985 19.6092 6.75491 19.9496C9.3676 21.3501 14.6324 21.3501 17.2451 19.9496C17.8802 19.6092 18 19.2323 18 18.5267L18 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tunicVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.7px' }" />
            <motion.path d="M6 10C8 12.6667 16 12.6667 18 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sashVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.3px' }" />
          </svg>
        </div>
</template>
