<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NotepadTextDashedIcon' })

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
    transition: { duration: 0.47, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M13 22.0005H11M16.5 3.58926C17.6376 3.70116 18.4033 3.95405 18.9749 4.52558C19.6998 5.25055 19.9121 6.28798 19.9743 8.00046M7.5 3.58926C6.3624 3.70116 5.59666 3.95405 5.02513 4.52558C4.30016 5.25055 4.08789 6.28798 4.02573 8.00046M20 12.0005V14.0005M4 12.0005V14.0005M19.9504 18.0005C19.8638 19.4199 19.6264 20.3238 18.9749 20.9753C18.4914 21.4588 17.869 21.7143 17 21.8492M4.04962 18.0005C4.13616 19.4199 4.3736 20.3238 5.02513 20.9753C5.5086 21.4588 6.13105 21.7143 7 21.8492" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '20px 12.79px' }" />
            <motion.path d="M16.5 2.00046V5.00046M7.5 2.00046V5.00046M12 2.00046V5.00046" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 3.5px' }" />
            <motion.path d="M8 15.0005H12M8 11.0005H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 13px' }" />
          </svg>
        </div>
</template>
