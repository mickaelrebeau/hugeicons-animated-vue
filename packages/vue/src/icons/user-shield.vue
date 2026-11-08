<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'UserShieldIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the shield stamps down
// authored from scripts/authored
const shieldVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.5, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M14.5 7.5C14.5 4.73858 12.2614 2.5 9.5 2.5C6.73858 2.5 4.5 4.73858 4.5 7.5C4.5 10.2614 6.73858 12.5 9.5 12.5C12.2614 12.5 14.5 10.2614 14.5 7.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2.5 19.5C2.5 15.634 5.63401 12.5 9.5 12.5C10.5736 12.5 11.5907 12.7417 12.5 13.1736" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M21.5 17V14.5C19.5 14.5 18 13.5 18 13.5C18 13.5 16.5 14.5 14.5 14.5V17C14.5 20.5 18 21.5 18 21.5C18 21.5 21.5 20.5 21.5 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shieldVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17.5px' }" />
          </svg>
        </div>
</template>
