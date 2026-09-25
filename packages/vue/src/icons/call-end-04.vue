<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CallEnd04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the receiver plunges off the cradle
// authored from scripts/authored
const receiverVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) scale(1, 1)' },
  animate: {
    transform: [
      'translate(0px, 0px) scale(1, 1)',
      'translate(0px, 2.8px) scale(1.08, 0.82)',
      'translate(0px, -0.5px) scale(0.96, 1.06)',
      'translate(0px, 0px) scale(1, 1)',
    ],
    transition: {
      duration: 0.58,
      times: [0, 0.36, 0.66, 1],
      ease: [
        'easeIn',
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
            <path d="M15.9212 9.24433L15.931 9.30236C16.0456 9.98064 16.1029 10.3198 16.2809 10.5938C16.3339 10.6753 16.3943 10.7518 16.4613 10.8221C16.6866 11.0586 17.0029 11.1923 17.6356 11.4598C18.5863 11.8617 19.0616 12.0627 19.5176 11.9827C19.6515 11.9592 19.7818 11.9184 19.9053 11.8613C20.3256 11.6669 20.605 11.2259 21.1637 10.344C21.7465 9.42428 22.0378 8.9644 21.9961 8.43957C21.9867 8.32195 21.9561 8.17279 21.9184 8.06099C21.7504 7.56215 21.3553 7.29135 20.5653 6.74976C15.2168 3.0834 8.78319 3.08342 3.43474 6.74976C2.64467 7.29135 2.24964 7.56215 2.08155 8.06099C2.04388 8.17279 2.0133 8.32195 2.00394 8.43958C1.96217 8.96441 2.25354 9.42428 2.83628 10.344C3.39504 11.2259 3.67442 11.6669 4.09473 11.8613C4.21816 11.9184 4.34846 11.9592 4.48236 11.9827C4.93835 12.0627 5.41371 11.8617 6.36443 11.4598C6.99706 11.1923 7.31337 11.0586 7.5387 10.8221C7.60574 10.7518 7.66613 10.6753 7.7191 10.5938C7.89713 10.3198 7.95443 9.98064 8.06903 9.30236L8.07883 9.24433C8.19712 8.54421 8.25626 8.19414 8.51567 7.87314C8.55197 7.82822 8.61802 7.75692 8.66002 7.71731C8.96021 7.43423 9.22512 7.36865 9.75492 7.23749C11.1819 6.88423 12.8181 6.88423 14.2451 7.23749C14.7749 7.36865 15.0398 7.43423 15.34 7.71731C15.382 7.75692 15.448 7.82822 15.4843 7.87314C15.7437 8.19414 15.8029 8.54421 15.9212 9.24433Z" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M9.49976 17.5L11.9998 20L14.4998 17.5M11.9998 12.5V19.3912" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="receiverVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
          </svg>
        </div>
</template>
