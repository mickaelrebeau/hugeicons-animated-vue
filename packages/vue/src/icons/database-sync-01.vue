<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatabaseSync01Icon' })

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
    transition: { duration: 0.43, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.ellipse cx="10" cy="4.99982" rx="8" ry="3" stroke="currentColor" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 5px' }" />
            <motion.path d="M5 10.8419C5.60158 11.0227 6.27434 11.1716 7 11.2818" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 11.06px' }" />
            <motion.path d="M5 17.8419C5.60158 18.0227 6.27434 18.1716 7 18.2818" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18.06px' }" />
            <motion.path d="M12 15.4996L13.1363 16.965C13.708 14.8316 15.9014 13.5656 18.0352 14.1373C19.1275 14.4299 19.9925 15.1473 20.5 16.064M22 20.4984L20.8637 19.035C20.2919 21.1684 18.0986 22.4344 15.9647 21.8627C14.8978 21.5769 14.0477 20.8858 13.5359 19.9995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M18 4.99982V11.008M2 4.99982V19.019C2 20.5509 5.05369 21.815 9 21.9998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 13.5px' }" />
            <motion.path d="M2 11.9998C2 13.5416 5.05369 14.8138 9 14.9998" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 13.5px' }" />
          </svg>
        </div>
</template>
