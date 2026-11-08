<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SunCloudAngledZap02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cloud drifts, then the bolt flashes
// authored from scripts/authored
const boltVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.92)', 'scale(1)'],
    opacity: [1, 0.2, 1, 1],
    transition: {
      duration: 0.5,
      delay: 0.26,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const cloudVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 0px)',
      'translate(0.6px, 0px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: { duration: 0.9, times: [0, 0.18, 0.46, 0.74, 1], ease: [0.77, 0, 0.175, 1] },
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
            <motion.path d="M12.5784 14.9999L10.8043 17.6837C10.5668 18.043 10.4481 18.2226 10.5217 18.3612C10.5952 18.4999 10.8093 18.4999 11.2375 18.4999H12.7625C13.1907 18.4999 13.4048 18.4999 13.4783 18.6385C13.5519 18.7772 13.4332 18.9568 13.1957 19.3161L11.4216 21.9999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boltVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
            <path d="M2.95939 9.19373C2.21865 6.47179 3.85922 3.67397 6.6237 2.94463M2.95939 9.19373L2 9.44684M2.95939 9.19373C3.14359 9.87059 3.4577 10.479 3.86823 11M6.6237 2.94463L6.36663 2M6.6237 2.94463C8.66673 2.40563 10.7518 3.14719 12 4.66961M3.4765 5.32297L2.4644 4.74628M11.1407 2.45725L10.557 3.45494" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M17.4776 11.0001C17.485 11 17.4925 11 17.5 11C19.9853 11 22 13.0147 22 15.5C22 17.8251 20.2624 19.7631 18 20M17.4776 11.0001C17.4924 10.8354 17.5 10.6686 17.5 10.5C17.5 7.46243 15.0376 5 12 5C9.12324 5 6.76233 7.20862 6.52042 10.0227M17.4776 11.0001C17.3753 12.1345 16.9286 13.1696 16.2428 14M6.52042 10.0227C3.98398 10.2641 2 12.4003 2 15C2 17.419 3.71776 19.512 6 19.9753M6.52042 10.0227C6.67826 10.0077 6.83823 10 7 10C8.12582 10 9.16474 10.3721 10.0005 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
