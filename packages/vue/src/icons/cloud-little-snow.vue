<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CloudLittleSnowIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the snowflakes drift down, wavering side to side
// authored from scripts/authored
const snowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0.6px, 0.6px)',
      'translate(-0.6px, 1.2px)',
      'translate(0.3px, 0.4px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 1,
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
            <path d="M17.4776 8.7803L17.5 8.78025C19.9853 8.78025 22 10.7212 22 13.1154C22 14.8176 20.9817 16.2906 19.5 17M17.4776 8.7803C17.4924 8.62164 17.5 8.46095 17.5 8.29856C17.5 5.37225 15.0376 3 12 3C9.12324 3 6.76233 5.12773 6.52042 7.83875M17.4776 8.7803C17.3753 9.8732 16.9286 10.8704 16.2428 11.6704M6.52042 7.83875C3.98398 8.07128 2 10.1293 2 12.6338C2 14.566 3.18102 16.2326 4.88559 17M6.52042 7.83875C6.67826 7.82428 6.83823 7.81688 7 7.81688C8.12582 7.81688 9.16474 8.17534 10.0005 8.78025" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M11 14L12 15M12 15L13 16M12 15L13 14M12 15L11 16M15 19L16 20M16 20L17 21M16 20L17 19M16 20L15 21M7 19L8 20M8 20L9 21M8 20L9 19M8 20L7 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="snowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
          </svg>
        </div>
</template>
