<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChatNotification01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the notification dot pops with a ping while the message lines stay
// authored from scripts/authored
const badgeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const pingVariants: Variants = {
  normal: { transform: 'scale(0.4)', opacity: 0 },
  animate: {
    transform: ['scale(0.4)', 'scale(0.4)', 'scale(1)', 'scale(1.22)'],
    opacity: [0, 0, 1, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.3, 0.46, 1],
      ease: [
        'linear',
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
            <path d="M7.5 9H16.5M7.5 13H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22 4.5C22 5.88071 20.8807 7 19.5 7C18.1193 7 17 5.88071 17 4.5C17 3.11929 18.1193 2 19.5 2C20.8807 2 22 3.11929 22 4.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.5px 4.5px' }" />
            <path d="M13.9693 3.01851C13.3258 3.00631 12.6684 3 12 3C10.5209 3 9.09517 3.0309 7.7562 3.08819C5.3157 3.1926 4.09545 3.24481 3.13007 4.21745C2.16469 5.19009 2.12282 6.37683 2.03909 8.7503C2.01346 9.47679 2 10.2292 2 11C2 11.7708 2.01346 12.5232 2.03909 13.2497C2.12282 15.6232 2.16469 16.8099 3.13007 17.7825C4.09545 18.7552 5.31569 18.8074 7.75619 18.9118C7.83715 18.9153 7.91842 18.9186 8 18.9219V21.2701C8 21.6732 8.32679 22 8.72991 22C8.90419 22 9.07273 21.9376 9.20503 21.8242L11.3845 19.9553C11.9325 19.4855 12.2064 19.2506 12.532 19.1266C12.8576 19.0026 13.2282 18.9955 13.9693 18.9815C14.7498 18.9667 15.5098 18.9432 16.2437 18.9118C18.6843 18.8074 19.9046 18.7552 20.8699 17.7826C21.8353 16.8099 21.8772 15.6232 21.9609 13.2497C21.9865 12.5232 22 11.7708 22 11C22 10.4913 21.9941 9.99055 21.9828 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19.5 1.3L19.5 0.3M22.27 2.9L23.14 2.4M22.27 6.1L23.14 6.6M19.5 7.7L19.5 8.7M16.73 6.1L15.86 6.6M16.73 2.9L15.86 2.4" stroke-width="1.2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" :variants="pingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
