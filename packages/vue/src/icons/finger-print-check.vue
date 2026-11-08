<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FingerPrintCheckIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the check badge pops beside the print
// authored from scripts/authored
const badgeVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.2)', 'scale(0.92)', 'scale(1)'],
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
            <path d="M5.92683 20.5968C3.85533 19.1894 2.5 16.8511 2.5 14.2044V9.75383C2.5 8.56968 2.7713 7.44725 3.25666 6.4423M9.35367 21.914C10.255 22.0396 11.145 22.007 11.9952 21.8397M17.7224 6.4159C15.6293 2.12426 9.8958 0.664733 5.92683 3.36135M18.4919 10.3293V11.4954M10.4959 5.99807C12.7039 5.99807 14.4939 7.87756 14.4939 10.196M6.88271 8.39691C6.63601 8.9422 6.49797 9.55219 6.49797 10.196V13.7943C6.49797 16.1128 8.28793 17.9923 10.4959 17.9923C10.6652 17.9923 10.832 17.9813 10.9957 17.9598M10.4959 10.4959V13.4945" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16.1702 18.447C16.4706 18.5912 16.8432 18.9639 17.0235 19.2643C17.0836 19.685 17.3841 18.0624 18.8505 17.1008M21.5 18C21.5 20.2091 19.7091 22 17.5 22C15.2909 22 13.5 20.2091 13.5 18C13.5 15.7909 15.2909 14 17.5 14C19.7091 14 21.5 15.7909 21.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="badgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 18px' }" />
          </svg>
        </div>
</template>
