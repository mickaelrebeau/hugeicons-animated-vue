<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CallSparkIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spark spins out while the handset tips toward it
// authored from scripts/authored
const handsetVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-8deg)', 'rotate(2deg)', 'rotate(0deg)'],
    transition: { duration: 0.64, times: [0, 0.4, 0.72, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(40deg) scale(0.5)',
      'rotate(90deg) scale(1.24)',
      'rotate(90deg) scale(1)',
    ],
    transition: { duration: 0.7, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M4.91186 10.5413L7.55229 7.90088C8.09091 7.36227 8.27728 6.56642 8.05944 5.83652C7.8891 5.26577 7.69718 4.57964 7.56961 3.99292C7.45162 3.45027 6.97545 3 6.42012 3H4.91186C3.8012 3 2.88911 3.90384 3.01094 5.0078C3.93709 13.3996 10.6004 20.0629 18.9922 20.9891C20.0962 21.1109 21 20.1988 21 19.0881V17.5799C21 17.0246 20.5479 16.569 20.0015 16.4696C19.3988 16.36 18.7611 16.1804 18.2276 16.0103C17.4611 15.7659 16.6091 15.9377 16.0403 16.5065L13.4587 19.0881" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handsetVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 12.1px' }" />
            <motion.path d="M17.4693 3.02506C17.4761 2.99165 17.5239 2.99165 17.5307 3.02506C17.8852 4.75942 19.2406 6.11481 20.9749 6.4693C21.0084 6.47613 21.0084 6.52387 20.9749 6.5307C19.2406 6.88519 17.8852 8.24058 17.5307 9.97494C17.5239 10.0084 17.4761 10.0084 17.4693 9.97494C17.1148 8.24058 15.7594 6.88519 14.0251 6.5307C13.9916 6.52387 13.9916 6.47613 14.0251 6.4693C15.7594 6.11481 17.1148 4.75942 17.4693 3.02506Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 6.5px' }" />
          </svg>
        </div>
</template>
