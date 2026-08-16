<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ArrangeByNumbersNineOneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the pieces leave their offsets and snap into the named arrangement
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.32px) scale(0.74)', 'translateY(-0.38px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
  }),
}

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
            <motion.path d="M6.99988 21.0003V14.9491C6.99988 14.3746 6.99988 14.0873 6.76947 14.0158C6.26294 13.8587 5.49988 15 5.49988 15M6.99988 21.0003H5.49988M6.99988 21.0003H8.49988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 17.43px' }" />
            <motion.path d="M8.99988 6.50098V4.75098C8.99988 3.92602 8.99988 3.51354 8.70698 3.25726C8.41409 3.00098 7.94269 3.00098 6.99988 3.00098C6.05707 3.00098 5.58566 3.00098 5.29277 3.25726C4.99988 3.51354 4.99988 3.92602 4.99988 4.75098C4.99988 5.57593 4.99988 5.98841 5.29277 6.2447C5.58566 6.50098 6.05707 6.50098 6.99988 6.50098H8.99988ZM8.99988 6.50098V7.37598C8.99988 8.61341 8.99988 9.23213 8.56054 9.61655C8.1212 10.001 7.41409 10.001 5.99988 10.001H4.99988" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 6.5px' }" />
            <motion.path d="M16.4999 20V4M16.4999 20C15.7997 20 14.4915 18.0057 13.9999 17.5M16.4999 20C17.2002 20 18.5084 18.0057 18.9999 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
          </svg>
        </div>
</template>
