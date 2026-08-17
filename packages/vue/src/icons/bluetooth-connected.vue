<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BluetoothConnectedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two ticks grow out from the still rune
// authored from scripts/authored
const tickRVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.22)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.48,
      times: [0, 0.14, 0.62, 1],
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
            <path d="M12.25 11.9996L15.8601 8.56141C16.6245 7.83346 17.0066 7.46948 16.9897 7.01881C16.9728 6.56813 16.5643 6.23388 15.7475 5.56538L15.2681 5.17304C13.8527 4.01474 13.1451 3.43559 12.5732 3.70653C12.0014 3.97746 12.0014 4.89191 12.0014 6.7208V11.7629M12.25 11.9996L12.0014 12.2364M12.25 11.9996L15.8601 15.4379C16.6245 16.1658 17.0066 16.5298 16.9897 16.9805C16.9728 17.4311 16.5643 17.7654 15.7475 18.4339L15.2681 18.8262C13.8527 19.9845 13.1451 20.5637 12.5732 20.2928C12.0014 20.0218 12.0014 19.1074 12.0014 17.2785V12.2364M12.25 11.9996L12.0014 11.7629M12.0014 12.2364L7 16.9996M12.0014 12.2364V11.7629M12.0014 11.7629L7 6.99962" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M17 12H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 12px' }" />
            <motion.path d="M7 12H6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tickRVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 12px' }" />
          </svg>
        </div>
</template>
