<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PieChart02Icon' })

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
    transform: ['translateY(1.39px) scale(0.74)', 'translateY(-0.4px) scale(1.1)', 'translateY(0px) scale(1)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.06 },
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
            <motion.path d="M11.024 22C15.3242 22 18.9218 18.9922 19.8279 14.9657C20.0135 14.141 20.1063 13.7286 19.8052 13.3523C19.5042 12.976 19.017 12.976 18.0427 12.976H11.024M11.024 22C6.04018 22 2 17.9598 2 12.976C2 8.67584 5.00779 5.07818 9.03431 4.17208C9.85901 3.9865 10.2714 3.89371 10.6477 4.19475C11.024 4.4958 11.024 4.98298 11.024 5.95734V12.976M11.024 22V12.976" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.05px 12.95px' }" />
            <motion.path d="M21.5541 7.02647C20.7305 4.93588 19.0641 3.26953 16.9735 2.44595C15.8783 2.01448 15.3307 1.79874 14.6653 2.25173C14 2.70472 14 3.44563 14 4.92747V6.95648C14 8.39121 14 9.10857 14.4457 9.55429C14.8914 10 15.6088 10 17.0435 10H19.0725C20.5544 10 21.2953 10 21.7483 9.33467C22.2013 8.66935 21.9855 8.12172 21.5541 7.02647Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="tileVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '18.1px 5.9px' }" />
          </svg>
        </div>
</template>
