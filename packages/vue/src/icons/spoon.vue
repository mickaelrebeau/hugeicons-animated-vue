<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpoonIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spoon scoops and lifts
// authored from scripts/authored
const spoonVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.38px, -1.64px) rotate(10deg)',
      'translate(1.13px, 1.00px) rotate(-7deg)',
      'translate(-0.44px, -0.47px) rotate(3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M21.105 2.89501C19.3895 1.17949 15.6577 2.12988 13.7277 4.05984C12.6875 5.10001 12.3831 6.21243 12.592 7.28565C12.8022 8.36561 12.7813 9.58474 11.9794 10.338L2.50346 19.2396C1.84652 19.8568 1.8303 20.895 2.46765 21.5324C3.105 22.1697 4.14323 22.1535 4.76036 21.4965L13.662 12.0206C14.4153 11.2187 15.6344 11.1978 16.7143 11.408C17.7876 11.6169 18.9 11.3125 19.9402 10.2723C21.8701 8.34233 22.8205 4.61053 21.105 2.89501Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="spoonVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.3px 11.7px' }" />
          </svg>
        </div>
</template>
