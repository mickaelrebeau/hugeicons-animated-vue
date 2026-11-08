<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TongueWinkRightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the face winks its right eye and the tongue wags
// authored from scripts/authored
const tongueVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.49px, -0.37px) rotate(-8deg)',
      'translate(-0.37px, 0.22px) rotate(5.6deg)',
      'translate(0.15px, -0.10px) rotate(-2.4deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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

const winkVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.2)', 'scaleY(1)', 'scaleY(1)'],
    transition: { duration: 0.66, times: [0, 0.3, 0.6, 1], ease: [0.77, 0, 0.175, 1] },
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
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 13.2313 21.7775 14.4107 21.3704 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M17.659 14C16.8353 16.3304 14.6128 18 12.0004 18C9.38795 18 7.16547 16.3304 6.3418 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M13 18.0004L14.7731 20.7097C15.4725 21.9439 17.0216 22.3668 18.2331 21.6542C19.4446 20.9416 19.8597 19.3634 19.1602 18.1291L17.3872 15.0004" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tongueVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.4px 18.7px' }" />
            <motion.path d="M14.5 8.80018C14.842 8.3144 15.3866 8.00018 16 8.00018C16.6134 8.00018 17.158 8.3144 17.5 8.80018" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="winkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 8.4px' }" />
            <path d="M8.375 8.38719V8.91667M8.75 8.75018C8.75 8.33597 8.58211 8.00018 8.375 8.00018C8.16789 8.00018 8 8.33597 8 8.75018C8 9.16439 8.16789 9.50018 8.375 9.50018C8.58211 9.50018 8.75 9.16439 8.75 8.75018Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
