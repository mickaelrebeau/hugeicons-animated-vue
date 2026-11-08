<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MailLock01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flap snaps shut and the padlock hops
// authored from scripts/authored
const flapVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, -3.50px) scaleY(0.3)',
      'translate(0px, 0.40px) scaleY(1.08)',
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.56,
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

const lockVariants: Variants = {
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
      delay: 0.2,
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
            <motion.path d="M2 5L8.91302 8.91697C11.4616 10.361 12.5384 10.361 15.087 8.91697L22 5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="flapVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <path d="M11.9942 19.4954C11.0292 19.4954 10.0644 19.4832 9.0947 19.4588C5.94803 19.3797 4.3747 19.3403 3.24424 18.2052C2.11376 17.07 2.08109 15.5377 2.01576 12.4729C1.99475 11.4875 1.99474 10.5079 2.01575 9.52248C2.08109 6.45778 2.11375 4.92543 3.24423 3.7903C4.3747 2.65517 5.94803 2.61563 9.09469 2.53655C11.034 2.48781 12.9543 2.48781 14.8937 2.53656C18.0404 2.61565 19.6136 2.65519 20.7442 3.79031C21.8746 4.92544 21.9073 6.45779 21.9726 9.5225C21.9831 10.0152 21.9884 10.0066 21.9884 10.4978" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16.7394 15.6776L16.7394 14.2872C16.7394 14.0819 16.7479 13.874 16.8216 13.6822C17.0175 13.1717 17.5365 12.5029 18.4815 12.5029C19.4264 12.5029 19.9659 13.1717 20.1618 13.6822C20.2354 13.874 20.244 14.0819 20.244 14.2872L20.244 15.6776M16.8089 21.5005H20.1949C21.1917 21.5005 21.9998 20.6939 21.9998 19.6989V17.6976C21.9998 16.7026 21.1917 15.896 20.1949 15.896H16.8089C15.812 15.896 15.0039 16.7026 15.0039 17.6976V19.6989C15.0039 20.6939 15.812 21.5005 16.8089 21.5005Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lockVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17px' }" />
          </svg>
        </div>
</template>
