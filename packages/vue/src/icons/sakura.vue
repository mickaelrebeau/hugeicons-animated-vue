<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SakuraIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the blossom turns one petal around its pistil
// authored from scripts/authored
const pistilVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(1.3)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.2,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const petalsVariants: Variants = {
  normal: { transform: 'rotate(0deg)' },
  animate: {
    transform: ['rotate(0deg)', 'rotate(14.4deg)', 'rotate(50.4deg)', 'rotate(74.16deg)', 'rotate(72deg)'],
    transition: {
      duration: 0.8,
      times: [0, 0.2, 0.6, 0.86, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        'linear',
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
            <motion.path d="M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5C10 11.3954 10.8954 10.5 12 10.5C13.1046 10.5 14 11.3954 14 12.5Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="pistilVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M12 18.0876C11.8851 18.2748 11.7593 18.4624 11.6225 18.6497C10.309 20.4472 8.49591 21.5041 7 21.5L6.69824 19.4251L4.62034 19.781C4.15412 18.3677 4.64876 16.267 5.96228 14.4694C3.93504 13.7655 2.44173 12.3965 2 11.0004L3.85945 10.0686L2.89359 8.20296C4.08097 7.32031 6.42003 7.2136 8.50944 7.90417C8.50944 5.5 9.33594 3.36961 10.5399 2.5L12 4L13.4601 2.5C14.6641 3.36961 15.502 5.5 15.4906 7.90417C17.58 7.2136 19.919 7.32031 21.1064 8.20296L20.1406 10.0686L22 11.0004C21.5583 12.3965 20.065 13.7655 18.0377 14.4694C19.3512 16.267 19.8459 18.3677 19.3797 19.781L17.3018 19.4251L17 21.5C15.5041 21.5041 13.691 20.4472 12.3775 18.6497C12.2407 18.4624 12.1149 18.2748 12 18.0876Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="petalsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
