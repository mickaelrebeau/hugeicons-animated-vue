<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SolarPowerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sun rises over the panel and the panel brightens
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sunVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.6px)',
      'translate(0px, -0.4px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.3, 0.62, 0.86, 1],
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
            <motion.path d="M2.98915 15.3273L4.05648 12.3273C4.28468 11.6859 4.39879 11.3652 4.65689 11.1826C4.91498 11 5.25424 11 5.93275 11H18.0672C18.7458 11 19.085 11 19.3431 11.1826C19.6012 11.3652 19.7153 11.6859 19.9435 12.3273L21.0108 15.3273C21.4437 16.5438 21.6601 17.1521 21.3624 17.576C21.0648 18 20.4214 18 19.1346 18H4.86542C3.5786 18 2.93519 18 2.63756 17.576C2.33994 17.1521 2.55634 16.5438 2.98915 15.3273Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <path d="M9.5 11L8 18M14.5 11L16 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M4 14.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.3333 5.5C14.3333 6.78866 13.2887 7.83333 12 7.83333M14.3333 5.5C14.3333 4.21134 13.2887 3.16667 12 3.16667M14.3333 5.5H15.5M12 7.83333C10.7113 7.83333 9.66667 6.78866 9.66667 5.5M12 7.83333V9M9.66667 5.5C9.66667 4.21134 10.7113 3.16667 12 3.16667M9.66667 5.5L8.5 5.5M12 3.16667V2M13.6499 3.85009L14.4749 3.02513M10.3501 7.14992L9.52513 7.97488M13.6499 7.14992L14.4749 7.97488M10.3501 3.85009L9.52513 3.02513" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sunVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 5.5px' }" />
            <path d="M15 22C13.9398 20.8271 14 19 14 18M9 22C10.0602 20.8271 10 19 10 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M2 22H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
