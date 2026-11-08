<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'HoodieIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the hood is pulled up and the strings swing
// authored from scripts/authored
const stringsVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.21px, -0.02px) rotate(-12deg)',
      'translate(-0.14px, -0.01px) rotate(8deg)',
      'translate(0.05px, -0.00px) rotate(-3deg)',
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

const hoodVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.15px)',
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
            <path d="M17.6408 12C17.54 12.7452 17.5796 13.5006 17.6588 15.0114L18 19.522C18 20.2289 17.8802 20.6065 17.2451 20.9476C14.6324 22.3508 9.3676 22.3508 6.75491 20.9476C6.11985 20.6065 6 20.2289 6 19.522L6.34125 15.0114C6.42039 13.5006 6.45996 12.7452 6.3592 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14 17C14 17.8748 14.419 18.419 15 19M10 17C10 17.8748 9.58097 18.419 9 19" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="stringsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M7.39989 6.89742L11.2824 8.7472C11.6362 8.91573 11.8131 9 12 9C12.1869 9 12.3638 8.91573 12.7176 8.7472L16.6001 6.89742C17.4594 6.48802 17.8891 6.28332 17.9821 5.75891C18.0751 5.2345 17.8026 4.92615 17.2575 4.30943C14.5363 1.23019 9.46367 1.23019 6.74246 4.30943C6.19745 4.92614 5.92494 5.2345 6.01794 5.75891C6.11095 6.28332 6.5406 6.48802 7.39989 6.89742Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hoodVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.1px' }" />
            <motion.path d="M14 6L12 9L10 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hoodVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <path d="M6.38367 6.5C5.0338 6.76655 3.82669 8.0197 2.98877 9.14157C2.45198 9.86027 2.18359 10.2196 2.05065 10.8834C1.9177 11.5473 2.05787 12.1008 2.33819 13.2079L3.63742 18.3389C3.86713 19.2461 5 19.1109 6 18.102M17.6163 6.5C18.9662 6.76655 20.1733 8.0197 21.0112 9.14157C21.548 9.86027 21.8164 10.2196 21.9494 10.8834C22.0823 11.5473 21.9421 12.1008 21.6618 13.2079L20.3626 18.3389C20.1329 19.2461 19 19.1026 18 18.6065" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
