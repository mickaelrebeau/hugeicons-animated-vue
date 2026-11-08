<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailRemove01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flap snaps shut and the X spins away
// authored from scripts/authored
const flapVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -3.50px) scaleY(0.3)',
      'translate(0px, 0.40px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.56,
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

const xVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: [
      'rotate(0deg)',
      'rotate(18deg)',
      'rotate(62.99999999999999deg)',
      'rotate(92.7deg)',
      'rotate(90deg)',
    ],
    transition: {
      duration: 0.6,
      delay: 0.2,
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
            <motion.path d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <path d="M21.9928 11C22.0047 10.1743 22.0019 10.3514 21.9842 9.52439C21.9189 6.45886 21.8862 4.92609 20.7551 3.79066C19.6239 2.65523 18.0497 2.61568 14.9012 2.53657C12.9607 2.48781 11.0393 2.48781 9.09882 2.53656C5.95033 2.61566 4.37608 2.65521 3.24495 3.79065C2.11382 4.92608 2.08114 6.45885 2.01576 9.52438C1.99474 10.5101 1.99475 11.4899 2.01577 12.4756C2.08114 15.5412 2.11383 17.0739 3.24496 18.2094C4.37608 19.3448 5.95033 19.3843 9.09883 19.4634C10.0691 19.4878 10.0345 19.5 11 19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14 14.5L17.5 18M17.5 18L21 21.5M17.5 18L14 21.5M17.5 18L21 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="xVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18px' }" />
          </svg>
        </div>
</template>
