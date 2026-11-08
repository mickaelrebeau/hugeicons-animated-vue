<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TowTruckIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the truck tows forward and the hook swings
// authored from scripts/authored
const vehicleVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.2px, 0px)',
      'translate(-0.18px, 0px)',
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

const hookVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(0.19px, -0.61px) rotate(-4deg)',
      'translate(-0.16px, 0.42px) rotate(2.8deg)',
      'translate(0.06px, -0.18px) rotate(-1.2deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
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
            <motion.path d="M17.0021 21C18.1063 21 19.0014 20.1046 19.0014 19C19.0014 17.8954 18.1063 17 17.0021 17C15.898 17 15.0029 17.8954 15.0029 19C15.0029 20.1046 15.898 21 17.0021 21Z" stroke="currentColor" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 19px' }" />
            <motion.path d="M7.00605 21C8.11019 21 9.00527 20.1046 9.00527 19C9.00527 17.8954 8.11019 17 7.00605 17C5.90192 17 5.00684 17.8954 5.00684 19C5.00684 20.1046 5.90192 21 7.00605 21Z" stroke="currentColor" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 19px' }" />
            <motion.path d="M2.00781 8.14286C2.16217 8.64223 2.64307 9 3.13264 9C3.75363 9 4.25704 8.42437 4.25704 7.71429C4.25704 7.00421 3.75363 6.42857 3.13264 6.42857L3.46601 3.37547C3.48943 3.16098 3.64888 3 3.83792 3H6.00625L12.0039 12M6.00625 3L8.00547 13M19.0012 19C21.6834 19 22 18.072 22 15.5125C22 14.2875 22 13.675 21.76 13.1578C21.5094 12.6178 21.0578 12.2814 20.108 11.5931C19.1647 10.9095 18.494 10.141 17.8549 9.08239C16.9435 7.57263 16.4878 6.81775 15.8043 6.40888C15.1209 6 14.3148 6 12.7026 6H12.0039V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="vehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
            <motion.path d="M5.00651 18.996C5.00651 18.996 3.84703 19.0063 3.48717 18.96C3.18729 18.84 2.82289 18.5585 2.58753 18.402C1.86781 17.9235 2.01175 18.12 2.01175 17.688C2.01175 17.0126 2.00768 14.0063 2.00768 14.0063L2.00768 13.0463C2.00768 12.9863 1.946 12.9991 2.40752 13.0063L21.4801 13.0063M9.00508 19.002H15.0027" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="hookVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.7px 16px' }" />
          </svg>
        </div>
</template>
