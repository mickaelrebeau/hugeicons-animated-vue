<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Bitcoin04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after credit-card: the coin turns over on its own axis and lands flat
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateY(0deg)',
  },
  animate: {
    transform: ['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(270deg)', 'rotateY(360deg)'],
    transition: {
      duration: 0.66,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M13.9447 18.1667V12.8333M15.5072 12.8333V11.5M15.5072 19.5V18.1667M13.9447 15.5H17.0697M17.0697 15.5C17.5875 15.5 18.0072 15.9477 18.0072 16.5V17.1667C18.0072 17.719 17.5875 18.1667 17.0697 18.1667H13.0072M17.0697 15.5C17.5875 15.5 18.0072 15.0523 18.0072 14.5V13.8333C18.0072 13.281 17.5875 12.8333 17.0697 12.8333H13.0072" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5024 9C11.9139 9 9.00476 11.9101 9.00476 15.5C9.00476 19.0898 11.9139 22 15.5024 22C19.0909 22 22.0001 19.0899 22.0001 15.5C22.0001 11.9101 19.0909 9 15.5024 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8.00503 6C11.3175 6 14.0029 5.10457 14.0029 4C14.0029 2.89543 11.3175 2 8.00503 2C4.69252 2 2.0072 2.89543 2.0072 4C2.0072 5.10457 4.69252 6 8.00503 6Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M1.99988 4V8.02171V12.0434C1.99988 12.7473 3.17893 13.6328 6.13218 14M2.10721 8.54768C3.31228 9.60965 5.46077 10.0602 7.75693 10.0602M13.9955 4.12134V6.13597" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
