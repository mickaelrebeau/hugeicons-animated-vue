<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SharedWifiIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the signal expands physically from its source to its outer arc
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.86px) rotate(-2.19deg)', 'translateY(0.44px) rotate(0.77deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.8px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.94, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M6.48311 3.65819C6.11715 3.25395 5.58823 3 5 3C3.89543 3 3 3.89543 3 5C3 5.58823 3.25395 6.11716 3.65819 6.48311C4.01303 6.80434 4.48366 7 5 7C6.10457 7 7 6.10457 7 5C7 4.48366 6.80434 4.01303 6.48311 3.65819ZM6.48311 3.65819C8.0644 2.6103 9.96093 2 12 2C12.6849 2 13.3538 2.06886 14 2.20004M20.353 6.5C21.394 8.0779 22 9.96818 22 12C22 12.6849 21.9311 13.3538 21.8 14M17.5169 20.3418C15.9356 21.3897 14.0391 22 12 22C11.3151 22 10.6462 21.9311 10 21.8M17.5169 20.3418C17.8828 20.7461 18.4118 21 19 21C20.1046 21 21 20.1046 21 19C21 18.4118 20.7461 17.8828 20.3418 17.5169C19.987 17.1957 19.5163 17 19 17C17.8954 17 17 17.8954 17 19C17 19.5163 17.1957 19.987 17.5169 20.3418ZM3.65819 17.5169C2.6103 15.9356 2 14.0391 2 12C2 11.3151 2.06886 10.6462 2.20004 10M3.65819 17.5169C3.25395 17.8828 3 18.4118 3 19C3 20.1046 3.89543 21 5 21C5.58823 21 6.11715 20.7461 6.48311 20.3418C6.80434 19.987 7 19.5163 7 19C7 17.8954 6.10457 17 5 17C4.48366 17 4.01303 17.1957 3.65819 17.5169ZM21 5C21 6.10457 20.1046 7 19 7C17.8954 7 17 6.10457 17 5C17 4.48366 17.1957 4.01303 17.5169 3.65819C17.8828 3.25395 18.4118 3 19 3C20.1046 3 21 3.89543 21 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 10.4778C9.14883 9.54314 10.5209 9 11.9946 9C13.4729 9 14.849 9.54657 16 10.4866M14.1743 13C13.5182 12.5909 12.7779 12.3607 11.9946 12.3607C11.2152 12.3607 10.4784 12.5886 9.82477 12.9938" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18px' }" />
            <motion.path d="M12 16H12.0064" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
