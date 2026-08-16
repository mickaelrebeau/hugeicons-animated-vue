<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Minimize01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after minimize-screen: the corners pull inward toward the smaller frame
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(1.08)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.47,
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
            <motion.path d="M19.9264 22.2502V20.6912C19.9264 20.2886 20.0525 19.8976 20.2639 19.5545C21.7583 17.1282 22.2279 14.5259 21.9002 13.5123C20.857 11.3512 17.3758 10.5009 15.76 10.2983L16.7966 5.13851C16.9705 4.32028 16.3513 3.4966 15.4135 3.29877C14.4758 3.10095 13.5746 3.6039 13.4007 4.42213L11.3462 14.0882L8.77462 12.4508C8.77462 12.4508 7.47969 11.4154 6.44041 12.4508C5.40114 13.4861 6.44041 14.7762 6.44041 14.7762L10.3488 19.7787C10.6003 20.1005 10.7468 20.4912 10.7688 20.8984L10.8401 22.2164" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M6.95693 2.2382C6.95693 2.2382 6.7053 4.50936 6.95693 4.75695M6.95693 4.75695C7.28338 5.07806 9.55878 4.80775 9.55878 4.80775M6.95693 4.75695L10.001 1.74805M5.04502 9.24998C5.04502 9.24998 5.29665 6.97882 5.04502 6.73124M5.04502 6.73124C4.71857 6.41012 2.44317 6.68043 2.44317 6.68043M5.04502 6.73124L2.00098 9.74014" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
