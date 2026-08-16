<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiLaptopIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the intelligence points answer one another instead of pulsing as a single badge
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.47px) scale(1.2)', 'translateY(0.34px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.41, ease: 'easeOut', delay: i * 0.08 },
  }),
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
            <motion.path d="M3.99261 14.999V6.96505C3.99261 5.07142 3.99261 4.12461 4.57622 3.53633C4.90158 3.20835 5.33751 3.06323 5.98514 2.99902H10.9664" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7.48px 9px' }" />
            <motion.path d="M3.49208 16.0144L4.01204 14.999H19.8848L20.4332 16.0144C21.8707 18.676 22.2288 20.0067 21.6823 21.0029C21.136 21.999 19.6873 21.999 16.79 21.999H7.13541C4.23808 21.999 2.78941 21.999 2.24302 21.0029C1.69663 20.0067 2.0546 18.676 3.49208 16.0144Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11.96px 18.5px' }" />
            <motion.path d="M15.4367 2.00098V3.98M11.9627 5.50136H14.007M19.9558 5.50136H22.0001M19.9558 8.47458H22.0001M11.9627 8.47458H14.007M15.4367 10.0202V11.9992M18.4508 10.0202V11.9992M18.4402 2.00098V3.98M15.0033 9.96854H18.9595C19.5097 9.96854 19.9558 9.52082 19.9558 8.96854V4.98C19.9558 4.42771 19.5097 3.98 18.9595 3.98H15.0033C14.4531 3.98 14.007 4.42771 14.007 4.98V8.96854C14.007 9.52082 14.4531 9.96854 15.0033 9.96854Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '16.98px 7px' }" />
          </svg>
        </div>
</template>
