<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Briefcase02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the handle pulls up and both straps stretch after it
// authored from scripts/authored
const handleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.3px)',
      'translate(0px, -1.3px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const strapsVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -0.45px) scaleY(1.3)',
      'translate(0px, -0.45px) scaleY(1.3)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.04,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M8.49869 6.50012C8.49869 5.09566 8.49869 4.39343 8.83575 3.88898C8.98167 3.6706 9.16917 3.4831 9.38755 3.33718C9.89199 3.00012 10.5942 3.00012 11.9987 3.00012C13.4032 3.00012 14.1054 3.00012 14.6098 3.33718C14.8282 3.4831 15.0157 3.6706 15.1616 3.88898C15.4987 4.39343 15.4987 5.09566 15.4987 6.50012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4.8px' }" />
            <path d="M19.9981 6.50028L3.99901 6.50012C2.89455 6.50019 1.99891 7.3958 1.99881 8.50025C1.99891 10.7092 3.7902 12.5005 5.99916 12.5007H17.998C20.2069 12.5006 21.9981 10.7094 21.9982 8.50042C21.9982 7.39594 21.1026 6.50036 19.9981 6.50028Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7.49869 11.0001V14.0001M16.4987 14.0001V11.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="strapsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <path d="M2.00114 8.50012L1.99899 13.9971C1.9977 17.298 1.99705 18.9485 3.02223 19.9741C4.04741 20.9997 5.69789 20.9998 8.99883 20.9998L14.9999 21C18.2992 21 19.9489 21.0001 20.974 19.9752C21.9991 18.9503 21.9994 17.3006 22.0001 14.0013L22.0011 8.50012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
