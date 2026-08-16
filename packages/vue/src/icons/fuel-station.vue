<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FuelStationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after battery-charging-01: the fuel level grows from empty toward the inlet
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.72)', 'scaleX(1.06)', 'scaleX(1)'],
    transition: {
      duration: 0.48,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M10.4626 13L9.06858 14.8124C8.91919 15.0066 9.02626 15.2861 9.26987 15.3378L10.7301 15.6477C10.9899 15.7028 11.0889 16.0122 10.9073 16.2011L9.17773 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M4 10H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M4 21L4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3C12.8284 3 14.2426 3 15.1213 3.87868C16 4.75736 16 6.17157 16 9L16 21H4Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M2 21H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
            <motion.path d="M16 14H17.6667C17.9767 14 18.1317 14 18.2588 14.0341C18.6039 14.1265 18.8735 14.3961 18.9659 14.7412C19 14.8683 19 15.0233 19 15.3333V16.5C19 17.3284 19.6716 18 20.5 18C21.3284 18 22 17.3284 22 16.5V10.2111C22 9.60998 22 9.30941 21.9142 9.02598C21.8284 8.74255 21.6616 8.49247 21.3282 7.9923L20.5547 6.83205C20.2082 6.31223 19.6247 6 19 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 12px' }" />
          </svg>
        </div>
</template>
