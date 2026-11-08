<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DeliveredSentIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the van pulls forward as the sent arrow draws
// authored from scripts/authored
const truckVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 0px)',
      'translate(-0.21px, 0px)',
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

const arrowVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.001, 0.001, 1],
    visibility: ['visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 0.66,
      delay: 0.1,
      times: [0, 0.16, 0.24, 1],
      ease: [
        'linear',
        'linear',
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
            <motion.circle cx="17" cy="19.0001" r="2" stroke="currentColor" stroke-width="1.5" :variants="truckVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19px' }" />
            <motion.circle cx="7" cy="19.0001" r="2" stroke="currentColor" stroke-width="1.5" :variants="truckVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 19px' }" />
            <motion.path d="M2 9.00012V13.9471C2 16.3291 2 17.5201 2.73223 18.2601C3.2191 18.7522 3.90328 18.917 5 18.9723M12.4271 5.00012C13.3404 5.30002 14.0564 6.02366 14.3532 6.94666C14.5 7.40334 14.5 7.96765 14.5 9.09625C14.5 9.84865 14.5 10.2249 14.5979 10.5293C14.7957 11.1446 15.2731 11.6271 15.882 11.827C16.1832 11.9259 16.5555 11.9259 17.3 11.9259H22V13.9471C22 16.3291 22 17.5201 21.2678 18.2601C20.7809 18.7522 20.0967 18.917 19 18.9723M9 19.0001H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="truckVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5 7.00012H16.3212C17.7766 7.00012 18.5042 7.00012 19.0964 7.35383C19.6886 7.70754 20.0336 8.34824 20.7236 9.62962L22 12.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="truckVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.3px 9.5px' }" />
            <motion.path d="M7.32653 8.00012L8.81309 6.82595C9.60436 6.20095 10 5.88845 10 5.50012M7.32653 3.00012L8.81309 4.1743C9.60436 4.7993 10 5.1118 10 5.50012M10 5.50012L2 5.50012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
