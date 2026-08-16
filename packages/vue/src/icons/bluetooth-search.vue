<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BluetoothSearchIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after search-01: the lens leans in, scans, and settles back
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg) scale(1)', 'translate(1.37px, -0.6px) rotate(15.33deg) scale(0.78)', 'translate(0.44px, -0.88px) rotate(6.57deg) scale(0.76)', 'translate(-0.71px, 0.27px) rotate(-8.76deg) scale(0.8)', 'translate(-0.16px, 0.11px) rotate(-2.74deg) scale(1.08)', 'translate(0px, 0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 1.31,
      times: [0, 0.32, 0.48, 0.64, 0.84, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
        'linear',
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
}

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
            <motion.path d="M8.77349 11.5C8.8749 7.08726 8.48911 3.78672 9.15201 3.18692C9.21537 3.12959 9.28932 3.08325 9.36678 3.04779C10.2369 2.64938 12.688 4.83294 14.2923 6.22156C14.5558 6.44968 14.5742 6.85339 14.3152 7.08672C13.1694 8.11876 10.8318 9.95773 8.77349 11.5ZM8.77349 11.5L2.51051 16.2903M8.77349 11.5C8.8749 15.9127 8.48911 19.2133 9.15201 19.8131C9.21537 19.8704 9.28942 19.9168 9.36688 19.9523C9.74875 20.127 10.435 19.8046 11.2205 19.2705M2.5 6.72564L11.4146 13.5528" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.54px 11.39px' }" />
            <motion.path d="M19.6322 19.1589L21.5 21M20.7074 16.5964C20.7074 18.5826 19.094 20.1928 17.1037 20.1928C15.1134 20.1928 13.5 18.5826 13.5 16.5964C13.5 14.6102 15.1134 13 17.1037 13C19.094 13 20.7074 14.6102 20.7074 16.5964Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.54px 11.39px' }" />
          </svg>
        </div>
</template>
