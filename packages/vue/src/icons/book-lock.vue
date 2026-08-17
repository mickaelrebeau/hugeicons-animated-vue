<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BookLockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lock compresses onto the still cover, curl holding
// authored from scripts/authored
const lockVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.88px) scaleY(0.78)',
      'translate(0px, 0.88px) scaleY(0.78)',
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
            <path d="M19.5 22H5.5C4.39543 22 3.5 21.1046 3.5 20M3.5 20C3.5 18.8954 4.39543 18 5.5 18H19.5V14M3.5 20V8C3.5 5.17157 3.5 3.75736 4.37868 2.87868C5.25736 2 6.67157 2 9.5 2H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M19 18C19 18 18 18.7628 18 20C18 21.2372 19 22 19 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M19 5.5V4C19 2.89543 18.1046 2 17 2C15.8954 2 15 2.89543 15 4V5.5M19 5.5H15M19 5.5C19.8284 5.5 20.5 6.17157 20.5 7V7.75C20.5 8.44891 20.5 8.79837 20.3858 9.07403C20.2336 9.44157 19.9416 9.73358 19.574 9.88582C19.2984 10 18.9489 10 18.25 10H15.75C15.0511 10 14.7016 10 14.426 9.88582C14.0584 9.73358 13.7664 9.44157 13.6142 9.07403C13.5 8.79837 13.5 8.44891 13.5 7.75V7C13.5 6.17157 14.1716 5.5 15 5.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 6px' }" />
          </svg>
        </div>
</template>
