<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WavingHand01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the wrist leads one readable hand gesture
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.74px) rotate(-4.36deg)', 'translateY(0.33px) rotate(1.09deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M14.1245 5.74923C14.3983 4.99948 15.2302 4.6129 15.9825 4.88579C16.7348 5.15868 17.1227 5.98769 16.8489 6.73744L16.1878 8.5475M14.1245 5.74923L14.7855 3.93917C15.0594 3.18942 14.6715 2.3604 13.9192 2.08752C13.1668 1.81463 12.335 2.20121 12.0612 2.95096L11.5656 4.30857M14.1245 5.74923L12.3066 10.7269M11.5656 4.30857C11.839 3.55897 11.4511 2.73032 10.699 2.4575C9.94664 2.18461 9.11479 2.57119 8.84097 3.32094L6.04389 10.9791L5.1097 8.97429C4.69981 8.09467 3.61484 7.7678 2.78416 8.27368C2.14856 8.66075 1.85475 9.42786 2.06986 10.1386L3.81898 15.4859C4.15364 16.509 4.04527 17.8595 3.67597 18.8707M11.5656 4.30857L9.91291 8.83372M12.3032 22L12.6881 20.946C12.8639 20.4648 13.2266 20.0763 13.677 19.8297C14.1978 19.5445 14.8694 19.1322 15.2097 18.7412C15.7963 18.0673 16.1555 17.0838 16.8739 15.1169L18.9122 9.53572C19.186 8.78596 18.7981 7.95695 18.0458 7.68406C17.2935 7.41118 16.4616 7.79775 16.1878 8.5475M14.7004 12.6201L16.1878 8.5475" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.52px 22px' }" />
            <motion.path d="M20.8307 13C21.377 14.6354 20.5574 16.4263 19 17" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.52px 22px' }" />
          </svg>
        </div>
</template>
