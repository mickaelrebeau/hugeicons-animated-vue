<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cupcake01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the frosting swells up out of the wrapper
// authored from scripts/authored
const frostingVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) scale(1)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) scale(1)',
      'translate(0.00px, 0.72px) scale(0.88)',
      'translate(0.00px, -0.48px) scale(1.08)',
      'translate(0.00px, 0.06px) scale(0.99)',
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
            <path d="M6 13.5789L7.06237 18.0148C7.42652 19.5353 7.6086 20.2956 8.03895 20.8437C8.3231 21.2057 8.68075 21.4972 9.08605 21.6971C9.69988 22 10.4506 22 11.9521 22C13.5228 22 14.3081 22 14.9399 21.6754C15.3567 21.4613 15.7206 21.1498 16.0035 20.7652C16.4323 20.1822 16.5863 19.3783 16.8944 17.7706L18 12" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 10C8.04103 10.4949 6 9.5 6.48618 7.54383M6.48618 7.54383C5.07413 7.78754 4 9.51833 4 11C4 12.6569 5 14 7 14C9 14 16 13 16 13C18.5 12.5 20 11 20 9.5C20 7.29086 18.2091 6 16 6C16 3.79086 14.2091 2 12 2C13 3 11.5 4.25 10 5C9 5.5 6.97235 5.58766 6.48618 7.54383Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frostingVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
