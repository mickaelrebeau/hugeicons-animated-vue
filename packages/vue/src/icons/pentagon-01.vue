<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pentagon01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the pentagon turns one fifth onto its next side
// authored from scripts/authored
const shapeVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(14.4deg)', 'rotate(50.4deg)', 'rotate(74.16deg)', 'rotate(72deg)'],
    transition: {
      duration: 0.7,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M8.43816 3.93226C10.1564 2.64409 11.0155 2 12 2C12.9845 2 13.8436 2.64409 15.5618 3.93226L19.004 6.51285C20.7222 7.80103 21.5814 8.44512 21.8856 9.41125C22.1898 10.3774 21.8616 11.4195 21.2053 13.5038L19.8905 17.6793C19.2342 19.7636 18.9061 20.8058 18.1096 21.4029C17.3132 22 16.2512 22 14.1274 22H9.87263C7.74876 22 6.68682 22 5.89037 21.4029C5.09392 20.8058 4.76576 19.7636 4.10945 17.6793L2.79467 13.5038C2.13835 11.4195 1.8102 10.3774 2.11441 9.41125C2.41863 8.44512 3.27776 7.80103 4.99601 6.51285L8.43816 3.93226Z" stroke="currentColor" stroke-width="1.5" :variants="shapeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
