<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PackageOpenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the box opens and the sparkle bursts out of the top
// authored from scripts/authored
const boxVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.1, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sparkleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.18px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <motion.path d="M12 22C11.1818 22 10.4002 21.6646 8.83693 20.9939C4.94564 19.3243 3 18.4895 3 17.0853L3 7.7475M12 22C12.8182 22 13.5998 21.6646 15.1631 20.9939C19.0544 19.3243 21 18.4895 21 17.0853V7.7475M12 22L12 12.1707M21 7.7475C21 8.35125 20.1984 8.7325 18.5953 9.495L15.6741 10.8844C13.8712 11.7419 12.9697 12.1707 12 12.1707M21 7.7475C21 7.14376 20.1984 6.7625 18.5953 6M3 7.7475C3 8.35125 3.80157 8.7325 5.40472 9.495L8.32592 10.8844C10.1288 11.7419 11.0303 12.1707 12 12.1707M3 7.7475C3 7.14376 3.80157 6.7625 5.40472 6M6.33203 13.311L8.32591 14.2594" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="boxVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M12 2V4M16 3L14.5 5M8 3L9.5 5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="sparkleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 3.5px' }" />
          </svg>
        </div>
</template>
