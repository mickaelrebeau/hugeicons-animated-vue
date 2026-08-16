<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpeechToTextIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after list-view: the text rows write and settle from their reading edge
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.46, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M16 17H10" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 17px' }" />
            <motion.path d="M8 4V8M5 2V10M2 5L2 7M11 5V7" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 6px' }" />
            <motion.path d="M4.00006 13C4.00172 17.1517 4.04756 19.2749 5.31802 20.6124C6.63604 22 8.75736 22 13 22H13.45C17.2568 22 19.1601 22 20.4225 20.8649C20.6018 20.7038 20.7687 20.528 20.9218 20.3393C22 19.0103 22 17.0065 22 12.9989C22 8.99125 22 6.98744 20.9218 5.65845C20.7687 5.46974 20.6018 5.29398 20.4225 5.1328C19.3191 4.14066 17.7259 4.01573 14.8 4H14" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 13px' }" />
          </svg>
        </div>
</template>
