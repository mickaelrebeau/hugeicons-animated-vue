<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TabletConnectedBluetoothIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the bluetooth mark pulses beside the tablet
// authored from scripts/authored
const signalVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M17.3559 12.0514L20.1247 13.9617C20.7073 14.3635 20.9986 14.5645 21 14.8311C21.0014 15.0977 20.7123 15.3009 20.1341 15.7072L19.5576 16.1123C18.6051 16.7815 18.1289 17.1162 17.7424 16.9635C17.3559 16.8109 17.3559 16.2882 17.3559 15.2427V12.0514ZM17.3559 12.0514L17.2813 12M17.3559 12.0514V11.9486M17.2813 12L14 9.73627M17.2813 12L17.3559 11.9486M17.2813 12L14 14.2637M17.3559 11.9486L20.1247 10.0383C20.7073 9.63646 20.9986 9.43551 21 9.16889C21.0014 8.90227 20.7123 8.69912 20.1341 8.29281L19.5576 7.88774C18.6051 7.21847 18.1289 6.88383 17.7424 7.03647C17.3559 7.18911 17.3559 7.71182 17.3559 8.75726V11.9486Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="signalVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12px' }" />
            <path d="M21 19.682C19.6595 21 17.5021 21 13.1873 21H11.1532C6.83834 21 4.68091 21 3.34046 19.682C2 18.364 2 16.2426 2 12C2 7.75736 2 5.63604 3.34046 4.31802C4.68091 3 6.83834 3 11.1532 3H13.1873C17.5021 3 19.6595 3 21 4.31802" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M6.5 3.5V20.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
