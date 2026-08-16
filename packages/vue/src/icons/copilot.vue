<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CopilotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the copilot separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.81px) rotate(-1.02deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.43px, -1.22px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M13.8461 4C14.6683 4 15.3801 4.62364 15.5584 5.50016L15.7715 6.54763C16.0037 7.68837 16.93 8.5 18 8.5H11.3827M11.3827 8.5L10.3116 13.2894C9.98567 14.5945 8.90024 15.5 7.66156 15.5H4.83224C3.62479 15.5 2.74786 14.246 3.06556 12.9738L4.44552 6.94753C4.88008 5.20729 6.32731 4 7.97888 4H13.8461C13.0551 4 12.362 4.57821 12.1539 5.41168L11.3827 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.37px 9.75px' }" />
            <motion.path d="M10.1539 20C9.33175 20 8.61992 19.3764 8.44158 18.4998L8.22845 17.4524C7.99635 16.3116 7.06995 15.5 6 15.5L12.6173 15.5M12.6173 15.5L13.6884 10.7106C14.0143 9.40546 15.0998 8.5 16.3384 8.5L19.1678 8.5C20.3752 8.5 21.2521 9.75395 20.9344 11.0262L19.5545 17.0525C19.1199 18.7927 17.6727 20 16.0211 20L10.1539 20C10.9449 20 11.638 19.4218 11.8461 18.5883L12.6173 15.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.63px 14.25px' }" />
          </svg>
        </div>
</template>
