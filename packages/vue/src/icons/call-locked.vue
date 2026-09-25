<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CallLockedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shackle snaps down onto the body
// authored from scripts/authored
const shackleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.8px)',
      'translate(0px, 0.6px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.58,
      times: [0, 0.28, 0.52, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'easeIn',
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bodyVariants: Variants = {
  normal: { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'translate(0px, 0px) rotate(0deg) scale(1)',
      'translate(0.6px, 0.8px) rotate(2.4deg) scale(0.96)',
      'translate(-0.3px, -0.2px) rotate(-1deg) scale(1.02)',
      'translate(0px, 0px) rotate(0deg) scale(1)',
    ],
    transition: {
      duration: 0.46,
      delay: 0.24,
      times: [0, 0.28, 0.62, 1],
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
            <path d="M4.91186 10.5413L7.55229 7.90088C8.09091 7.36227 8.27728 6.56642 8.05944 5.83652C7.8891 5.26577 7.69718 4.57964 7.56961 3.99292C7.45162 3.45027 6.97545 3 6.42012 3H4.91186C3.8012 3 2.88911 3.90384 3.01094 5.0078C3.93709 13.3996 10.6004 20.0629 18.9922 20.9891C20.0962 21.1109 21 20.1988 21 19.0881V17.5799C21 17.0246 20.5479 16.569 20.0015 16.4696C19.3988 16.36 18.7611 16.1804 18.2276 16.0103C17.4611 15.7659 16.6091 15.9377 16.0403 16.5065L13.4587 19.0881" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M14.5 6.5V5C14.5 3.89543 15.3954 3 16.5 3C17.6046 3 18.5 3.89543 18.5 5V6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 6.5px' }" />
            <motion.path d="M18.5 6.5H14.5C13.6716 6.5 13 7.17157 13 8V9.5C13 10.3284 13.6716 11 14.5 11H18.5C19.3284 11 20 10.3284 20 9.5V8C20 7.17157 19.3284 6.5 18.5 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 8.8px' }" />
          </svg>
        </div>
</template>
