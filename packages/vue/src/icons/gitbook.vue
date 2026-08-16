<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GitbookIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the gitbook loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.41px) scaleY(0.82)', 'translateY(-3.42px) scaleY(1.08)', 'translateY(0.5px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.67,
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
            <motion.path d="M5.68421 13.143L12.5263 16.6063L22 11.6587V14.4523C22 15.1711 21.5855 15.8333 20.9171 16.1823L14.5609 19.5019C13.2948 20.1631 11.756 20.1662 10.4869 19.51L4.77515 16.5569C3.06346 15.6719 2 13.9811 2 12.1447M2 12.1447C2 10.1029 4.28574 8.77492 6.22844 9.68804L12.5263 12.6482L22 7.70056L15.7196 4.57498C14.0678 3.75288 12.076 3.81601 10.4868 4.74084L4.22963 8.38212C2.84349 9.18877 2 10.6122 2 12.1447Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.17px' }" />
          </svg>
        </div>
</template>
