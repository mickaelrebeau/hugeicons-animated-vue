<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ThermometerColdIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after snow: it stiffens and a little frost turns on the surface
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.42px, 2.23px) rotate(18.21deg)', 'translate(-0.81px, 3.64px) rotate(-8.09deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.94,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M17.5 22C19.7091 22 21.5 20.2091 21.5 18C21.5 16.9335 21.0827 15.9646 20.4024 15.2475C19.8957 14.7134 19.6423 14.4463 19.5712 14.2679C19.5 14.0895 19.5 13.8535 19.5 13.3815V4C19.5 2.89543 18.6046 2 17.5 2C16.3954 2 15.5 2.89543 15.5 4V13.3815C15.5 13.8535 15.5 14.0895 15.4288 14.2679C15.3577 14.4463 15.1043 14.7134 14.5976 15.2475C13.9173 15.9646 13.5 16.9335 13.5 18C13.5 20.2091 15.2909 22 17.5 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12px' }" />
            <motion.path d="M9.04545 5V8.65625M9.04545 8.65625V14.3438M9.04545 8.65625L11.0909 6.625M9.04545 8.65625L7 6.625M9.04545 14.3438L9.04546 18M9.04545 14.3438L7 16.375M9.04545 14.3438L11.0909 16.375M4.13636 9.46875L6.18182 11.5M6.18182 11.5L4.13636 13.5312M6.18182 11.5H11.5M6.18182 11.5H2.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12px' }" />
          </svg>
        </div>
</template>
