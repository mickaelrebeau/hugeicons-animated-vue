<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ContactRoundIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the contact nods and the shoulders redraw
// authored from scripts/authored
const headVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1px)',
      'translate(0px, 0.14px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.56,
      times: [0, 0.32, 0.62, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const shouldersVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.1,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M15 2.25195H9C6.17157 2.25195 4.75736 2.25195 3.87868 3.13063C3 4.00931 3 5.42353 3 8.25195V13.6297C3 16.0927 3 17.3241 3.67959 18.1535C3.80506 18.3066 3.94539 18.4469 4.0985 18.5724C4.92781 19.252 6.15928 19.252 8.62223 19.252C9.02437 19.252 9.22543 19.252 9.40521 19.3244C9.43933 19.3381 9.47266 19.3537 9.50506 19.3711C9.67577 19.4629 9.80449 19.6173 10.0619 19.9263L10.4636 20.4082C11.1756 21.2627 11.5316 21.752 12 21.752C12.4684 21.752 12.8244 21.2627 13.5364 20.4082L13.9381 19.9263C14.1955 19.6173 14.3242 19.4629 14.4949 19.3711C14.5273 19.3537 14.5607 19.3381 14.5948 19.3244C14.7746 19.252 14.9756 19.252 15.3778 19.252C17.8407 19.252 19.0722 19.252 19.9015 18.5724C20.0546 18.4469 20.1949 18.3066 20.3204 18.1535C21 17.3241 21 16.0927 21 13.6297V8.25195C21 5.42353 21 4.00931 20.1213 3.13063C19.2426 2.25195 17.8284 2.25195 15 2.25195Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.5 8.75195C14.5 10.1327 13.3807 11.252 12 11.252C10.6193 11.252 9.5 10.1327 9.5 8.75195C9.5 7.37124 10.6193 6.25195 12 6.25195C13.3807 6.25195 14.5 7.37124 14.5 8.75195Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.8px' }" />
            <motion.path d="M16 15.252C16 13.0428 14.2091 11.252 12 11.252C9.79086 11.252 8 13.0428 8 15.252" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shouldersVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
