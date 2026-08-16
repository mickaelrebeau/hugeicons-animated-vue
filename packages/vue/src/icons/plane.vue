<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PlaneIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after airplane-take-off-01: the plane banks, glides forward, and levels out
// generated from @hugeicons/core-free-icons
const planeVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(1.72px, -1.51px) rotate(-7.53deg)', 'translate(3.44px, -0.54px) rotate(-2.15deg)', 'translate(0.43px, 0.38px) rotate(1.29deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.96,
      times: [0, 0.28, 0.55, 0.8, 1],
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
            <motion.path d="M10.637 16.8238L20.3868 7.07406C20.7794 6.68143 21 6.1489 21 5.59363C21 4.43735 20.0626 3.5 18.9064 3.5C18.3511 3.5 17.8186 3.72058 17.4259 4.11321L7.67619 13.863H5.63905C5.2648 13.863 5.07768 13.863 4.89646 13.8971C4.7879 13.9176 4.68124 13.9471 4.57761 13.9854C4.40465 14.0494 4.24419 14.1457 3.92328 14.3382C3.34739 14.6837 3.05945 14.8565 3.01249 15.0613C2.98553 15.1788 3.00255 15.3021 3.06032 15.408C3.16096 15.5924 3.48493 15.6807 4.13286 15.8574L7.67619 16.8238L8.64256 20.3671C8.81926 21.0151 8.90762 21.339 9.09202 21.4397C9.19787 21.4975 9.3212 21.5145 9.43874 21.4875C9.6435 21.4406 9.81626 21.1526 10.1618 20.5767C10.3543 20.2558 10.4506 20.0954 10.5146 19.9224C10.5529 19.8188 10.5824 19.7121 10.6029 19.6035C10.637 19.4223 10.637 19.2352 10.637 18.861V16.8238Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 12.51px' }" />
            <motion.path d="M17.5 10V17.9457C17.5 18.6356 17.3125 19.3125 16.9575 19.9041C16.5581 20.5698 15.5727 20.5029 15.2669 19.7893L13 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.25px 15.28px' }" />
            <motion.path d="M14.5 7H6.55434C5.86444 7 5.18751 7.1875 4.59592 7.54245C3.93025 7.94186 3.99713 8.92734 4.71066 9.23314L10 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="planeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.22px 9.25px' }" />
          </svg>
        </div>
</template>
