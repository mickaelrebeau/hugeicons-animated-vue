<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WifiError02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bang stretches through the signal wedge
// authored from scripts/authored
const frameVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.16, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const stemVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -1.10px) scaleY(1.2)',
      'translate(0px, 0.33px) scaleY(0.94)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.66,
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
            <motion.path d="M2 8.31974C3.99395 6.5363 6.41376 5.33105 9 4.8031M22 8.31974C20.0061 6.5363 17.5862 5.33105 15 4.8031M5 12.3587C6.13592 11.2453 7.50961 10.4295 9 9.96076M19 12.3587C17.8641 11.2453 16.4904 10.4295 15 9.96076M8.5 15.9287C8.65791 15.774 8.82501 15.6307 9 15.4994M15.5 15.9287C15.3421 15.774 15.175 15.6307 15 15.4994M12.1256 19.2501H12.0006M12.2506 19.2501C12.2506 19.3881 12.1387 19.5001 12.0006 19.5001C11.8625 19.5001 11.7506 19.3881 11.7506 19.2501C11.7506 19.112 11.8625 19.0001 12.0006 19.0001C12.1387 19.0001 12.2506 19.112 12.2506 19.2501Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.2px' }" />
            <motion.path d="M12 15.5001V4.50006" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stemVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
          </svg>
        </div>
</template>
