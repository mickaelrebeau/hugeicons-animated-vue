<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SafeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after square-lock-01: the dial turns and the door breaks its seal
// generated from @hugeicons/core-free-icons
const shackleVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-18.29deg)', 'rotate(-16.25deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.82,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-0.93deg) scale(0.985)', 'rotate(1.3deg) scale(1.018)', 'rotate(-0.32deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.77,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M16 17L16.2099 17.2099C16.5786 17.5786 16.763 17.763 16.9862 17.7506C17.2094 17.7383 17.3722 17.5346 17.6979 17.1274L18.9996 15.5M13 15.4543V15.8403C13 17.0422 13 17.6431 13.1484 18.1931C13.3316 18.8723 13.6791 19.4986 14.1616 20.0197C14.5522 20.4416 15.0678 20.7701 16.0988 21.4271C16.5604 21.7212 16.7912 21.8683 17.0365 21.9367C17.3395 22.0211 17.6605 22.0211 17.9635 21.9367C18.2088 21.8683 18.4396 21.7212 18.9012 21.4271C19.9322 20.7701 20.4478 20.4416 20.8384 20.0197C21.3209 19.4986 21.6684 18.8723 21.8516 18.1931C22 17.6431 22 17.0422 22 15.8403V15.4543C22 14.7059 22 14.3317 21.8582 14.0157C21.7707 13.8208 21.6454 13.6443 21.4892 13.496C21.2359 13.2555 20.877 13.1241 20.159 12.8613L18.685 12.3218C18.099 12.1073 17.806 12 17.5 12C17.194 12 16.901 12.1073 16.315 12.3218L14.841 12.8613C14.123 13.1241 13.7641 13.2555 13.5108 13.496C13.3546 13.6443 13.2293 13.8208 13.1418 14.0157C13 14.3317 13 14.7059 13 15.4543Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 17.01px' }" />
            <motion.path d="M16.1712 7.9091V9.5M16.1712 7.9091C16.1712 7.15599 16.8045 6.54546 17.5856 6.54546C18.3668 6.54546 19 7.15599 19 7.9091V9.5M16.1712 7.9091V5.18183C16.1712 4.42871 15.538 3.81819 14.7568 3.81819C13.9757 3.81819 13.3424 4.42871 13.3424 5.18183M13.3424 5.18183V9.5M13.3424 5.18183V3.36364C13.3424 2.61052 12.7092 2 11.928 2C11.1469 2 10.5136 2.61052 10.5136 3.36364V6.09092M10.5136 6.09092C10.5136 5.3378 9.8804 4.72728 9.09925 4.72728C8.3181 4.72728 7.68485 5.3378 7.68485 6.09092V12.638C7.68485 13.054 7.15233 13.2514 6.8624 12.9429L4.57112 10.5043C4.18153 10.0442 3.52308 9.88846 2.95688 10.1224C1.94855 10.539 1.71198 12.0103 2.36735 12.8584C3.48877 14.3098 4.63778 16.2915 5.56538 18.0388C6.82424 20.4102 9.30884 22 12.0719 22M10.5136 6.09092V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.36px 12px' }" />
          </svg>
        </div>
</template>
