<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiScanIcon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.43px) scale(1.2)', 'translateY(0.33px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M2.5 16.5C2.5 17.4293 2.5 17.894 2.57686 18.2804C2.89249 19.8671 4.13288 21.1075 5.71964 21.4231C6.10603 21.5 6.57069 21.5 7.5 21.5M21.5 16.5C21.5 17.4293 21.5 17.894 21.4231 18.2804C21.1075 19.8671 19.8671 21.1075 18.2804 21.4231C17.894 21.5 17.4293 21.5 16.5 21.5M21.5 7.5C21.5 6.57069 21.5 6.10603 21.4231 5.71964C21.1075 4.13288 19.8671 2.89249 18.2804 2.57686C17.894 2.5 17.4293 2.5 16.5 2.5M2.5 7.5C2.5 6.57069 2.5 6.10603 2.57686 5.71964C2.89249 4.13288 4.13288 2.89249 5.71964 2.57686C6.10603 2.5 6.57069 2.5 7.5 2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 8.5V6.5M10 11.5V12M14 11.5V12M11 8.5H13C14.8856 8.5 15.8284 8.5 16.4142 9.08579C17 9.67157 17 10.6144 17 12.5C17 14.3856 17 15.3284 16.4142 15.9142C15.8284 16.5 14.8856 16.5 13 16.5H11C9.11438 16.5 8.17157 16.5 7.58579 15.9142C7 15.3284 7 14.3856 7 12.5C7 10.6144 7 9.67157 7.58579 9.08579C8.17157 8.5 9.11438 8.5 11 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
          </svg>
        </div>
</template>
