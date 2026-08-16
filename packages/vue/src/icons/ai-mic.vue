<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiMicIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the capsule rises to catch the voice while the spark keeps watch
// authored from scripts/authored
const capsuleVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1)' },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-0.7px) scale(1.05)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.6, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const cradleVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.04)', 'scaleX(1)'],
    transition: { duration: 0.6, delay: 0.06, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sparkVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)', opacity: 1 },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-26deg) scale(0.5)',
      'rotate(9deg) scale(1.2)',
      'rotate(0deg) scale(1)',
    ],
    opacity: [1, 0.5, 1, 1],
    transition: { duration: 0.62, delay: 0.18, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17 11C17 13.7614 14.7614 16 12 16C9.23858 16 7 13.7614 7 11V7C7 4.23858 9.23858 2 12 2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="capsuleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
            <motion.path d="M20 11C20 15.4183 16.4183 19 12 19M12 19C7.58172 19 4 15.4183 4 11M12 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cradleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M14.3327 4.64612C15.5394 4.49594 16.4959 3.53944 16.6461 2.33267C16.6689 2.14999 16.8159 2 17 2C17.1841 2 17.3311 2.14999 17.3539 2.33267C17.5041 3.53944 18.4606 4.49594 19.6673 4.64612C19.85 4.66885 20 4.81591 20 5C20 5.1841 19.85 5.33115 19.6673 5.35388C18.4606 5.50406 17.5041 6.46056 17.3539 7.66733C17.3311 7.85001 17.1841 8 17 8C16.8159 8 16.6689 7.85001 16.6461 7.66733C16.4959 6.46056 15.5394 5.50406 14.3327 5.35388C14.15 5.33115 14 5.1841 14 5C14 4.81591 14.15 4.66885 14.3327 4.64612Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sparkVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 5px' }" />
          </svg>
        </div>
</template>
