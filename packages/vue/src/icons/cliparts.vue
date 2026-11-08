<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClipartsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the folded corner flaps in and out of its notch
// authored from scripts/authored
const sheetVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.3, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const cornerVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(-1.92px, 1.88px) scale(0.6)',
      'translate(0.38px, -0.38px) scale(1.08)',
      'translate(-0.10px, 0.09px) scale(0.98)',
      'translate(0.00px, 0.00px) scale(1)',
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
            <motion.path d="M12.0142 22C16.982 22 21.105 18.3826 21.8927 13.6382C22.0029 12.9744 22.058 12.6425 21.9099 12.1809C21.7618 11.7193 21.4596 11.417 20.8551 10.8126L13.1874 3.14488C12.583 2.54042 12.2807 2.23819 11.8191 2.0901C11.3575 1.94201 11.0256 1.99711 10.3618 2.10732C5.61741 2.89501 2 7.01797 2 11.9858C2 17.5165 6.4835 22 12.0142 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sheetVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 2.5C12 7.21405 12 9.07107 13.4645 10.5355C14.9289 12 16.786 12 21.5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cornerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.8px 7.3px' }" />
          </svg>
        </div>
</template>
