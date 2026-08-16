<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TextKerningIcon' })

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
            <motion.path d="M22 13.5L20.2857 9M20.2857 9L18.7816 5.0518C18.7399 4.9422 18.719 4.8874 18.6926 4.84085C18.5914 4.66247 18.4186 4.5405 18.2216 4.50838C18.1702 4.5 18.1135 4.5 18 4.5C17.8865 4.5 17.8298 4.5 17.7784 4.50838C17.5814 4.5405 17.4086 4.66247 17.3074 4.84085C17.281 4.8874 17.2601 4.9422 17.2184 5.0518L15.7143 9M20.2857 9L15.7143 9M15.7143 9L14 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 9px' }" />
            <motion.path d="M2 4.5L5.21836 12.9482C5.26012 13.0578 5.28099 13.1126 5.3074 13.1591C5.40861 13.3375 5.5814 13.4595 5.77836 13.4916C5.82975 13.5 5.8865 13.5 6 13.5C6.1135 13.5 6.17025 13.5 6.22164 13.4916C6.4186 13.4595 6.59138 13.3375 6.6926 13.1591C6.71901 13.1126 6.73988 13.0578 6.78164 12.9482L10 4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 9px' }" />
            <motion.path d="M12 19.5H22M22 19.5C22 19.8314 21.6667 20.098 21 20.6314L19.9142 21.5M22 19.5C22 19.1686 21.6667 18.902 21 18.3686L19.9142 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 19.5px' }" />
            <motion.path d="M14.5 2.5L9.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 9px' }" />
          </svg>
        </div>
</template>
