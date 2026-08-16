<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseLightningIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after database: a read head scans each platter from top to bottom
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.42, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M10 8.00024C13.866 8.00024 17 6.6571 17 5.00024C17 3.34339 13.866 2.00024 10 2.00024C6.13401 2.00024 3 3.34339 3 5.00024C3 6.6571 6.13401 8.00024 10 8.00024Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 5px' }" />
            <motion.path d="M10 14.0002C6.13401 14.0002 3 12.6571 3 11.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 12.5px' }" />
            <motion.path d="M10 20.0002C6.13401 20.0002 3 18.6571 3 17.0002V5.00024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 12.5px' }" />
            <motion.path d="M18 15.0001V10.6516C18 10.2918 17.7083 10.0001 17.3485 10.0002C17.1308 10.0003 16.9275 10.1091 16.8067 10.2903L13.1289 15.807C13.0449 15.9331 13 16.0812 13 16.2327C13 16.6567 13.3437 17.0003 13.7676 17.0003L16 17.0003L16 21.3488C16 21.7086 16.2917 22.0003 16.6515 22.0002C16.8692 22.0001 17.0725 21.8913 17.1933 21.7101L20.8711 16.1934C20.9551 16.0673 21 15.9192 21 15.7677C21 15.3437 20.6563 15.0001 20.2324 15.0001H18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 16px' }" />
            <motion.path d="M6 10.4896V10.4996" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 10.49px' }" />
            <motion.path d="M6 16.4899V16.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 16.49px' }" />
          </svg>
        </div>
</template>
