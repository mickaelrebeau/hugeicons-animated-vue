<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Kaaba02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the door opens and the band dots flash
// authored from scripts/authored
const doorVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0px) scaleX(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0px) scaleX(1)',
      'translate(-2.00px, 0px) scaleX(0.2)',
      'translate(-2.00px, 0px) scaleX(0.2)',
      'translate(0.00px, 0px) scaleX(1)',
      'translate(0.00px, 0px) scaleX(1)',
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

const bandVariants: Variants = {
  normal: { opacity: 1 },
  animate: {
    opacity: [1, 0.2, 1, 0.2, 1, 1],
    transition: { duration: 0.8, times: [0, 0.2, 0.4, 0.6, 0.8, 1], ease: 'linear' },
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
            <path d="M21 22V5C21 3.58579 21 2.87868 20.5607 2.43934C20.1213 2 19.4142 2 18 2H6C4.58579 2 3.87868 2 3.43934 2.43934C3 2.87868 3 3.58579 3 5V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M7 17C7 16.0572 7 15.5858 7.29289 15.2929C7.58579 15 8.05719 15 9 15H10C10.9428 15 11.4142 15 11.7071 15.2929C12 15.5858 12 16.0572 12 17V22H7V17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="doorVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 18.5px' }" />
            <path d="M2 22H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 6H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 19H7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M12 19L21 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M3.5 9H5.5M8.5 9H10.5M13.5 9H15.5M18.5 9H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
