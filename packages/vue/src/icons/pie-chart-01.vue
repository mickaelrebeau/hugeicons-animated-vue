<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PieChart01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after dashboard-square-01: the data marks rise in reading order so the chart appears to calculate itself
// generated from @hugeicons/core-free-icons
const tileVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['translateY(1.42px) scale(0.74)', 'translateY(-0.41px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.48, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
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
            <motion.path d="M21 12.502C21 17.7487 16.7467 22.002 11.5 22.002C6.25329 22.002 2 17.7487 2 12.502C2 7.25525 6.25329 3.00195 11.5 3.00195" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.5px' }" />
            <motion.path d="M13.7046 7.38562L14.5805 4.77321C15.1261 3.14611 15.3989 2.33256 16.2494 2.07407C17.0999 1.81558 17.6633 2.25023 18.79 3.11953C19.5732 3.72378 20.2762 4.42682 20.8805 5.21C21.7498 6.33675 22.1844 6.90012 21.9259 7.75059C21.6674 8.60106 20.8539 8.87386 19.2268 9.41946L16.6144 10.2954C14.7053 10.9356 13.7508 11.2557 13.2475 10.7525C12.7443 10.2492 13.0644 9.2947 13.7046 7.38562Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '17.46px 6.54px' }" />
          </svg>
        </div>
</template>
