<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GavelIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the gavel lifts and strikes
// authored from scripts/authored
const gavelVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-4.53px, -1.44px) rotate(-16deg)',
      'translate(1.57px, 0.86px) rotate(6deg)',
      'translate(-0.27px, -0.13px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.56, 0.78, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const gavel2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-2.64px, -3.96px) rotate(-16deg)',
      'translate(0.69px, 1.65px) rotate(6deg)',
      'translate(-0.13px, -0.27px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.56, 0.78, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const gavel3Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-3.58px, -2.70px) rotate(-16deg)',
      'translate(1.13px, 1.25px) rotate(6deg)',
      'translate(-0.20px, -0.20px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.56, 0.78, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const gavel4Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.48px, -1.11px) rotate(-16deg)',
      'translate(0.47px, 0.52px) rotate(6deg)',
      'translate(-0.08px, -0.08px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.56, 0.78, 1],
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
            <motion.path d="M11.4021 2.66163L7.42723 6.63669C6.87842 7.18553 6.87842 8.07538 7.42723 8.62422C7.97605 9.17306 8.86585 9.17306 9.41466 8.62422L13.3895 4.64916C13.9383 4.10032 13.9383 3.21047 13.3895 2.66163C12.8407 2.11279 11.9509 2.11279 11.4021 2.66163Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="gavelVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.4px 5.6px' }" />
            <motion.path d="M17.3639 16.5734L21.3387 12.5984C21.8876 12.0495 21.8876 11.1597 21.3387 10.6108C20.7899 10.062 19.9001 10.062 19.3513 10.6108L15.3765 14.5859C14.8276 15.1347 14.8276 16.0246 15.3765 16.5734C15.9253 17.1223 16.8151 17.1223 17.3639 16.5734Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="gavel2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.4px 13.6px' }" />
            <motion.path d="M15.3763 14.5861L9.41406 8.6235L13.3889 4.64844L19.3512 10.611L15.3763 14.5861Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="gavel3Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '14.4px 9.6px' }" />
            <motion.path d="M11.4004 10.6094L3.03012 18.143C2.84128 18.313 2.74685 18.398 2.67724 18.478C2.13029 19.1064 2.10589 20.0345 2.61905 20.6909C2.68436 20.7744 2.7742 20.8643 2.95384 21.0439C3.13348 21.2236 3.22331 21.3134 3.30684 21.3787C3.96316 21.8919 4.89121 21.8675 5.51965 21.3205C5.59964 21.2509 5.68463 21.1565 5.85457 20.9676L13.3878 12.5969" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="gavel4Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.7px 16.3px' }" />
          </svg>
        </div>
</template>
