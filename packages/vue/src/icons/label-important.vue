<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LabelImportantIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the silhouette of the label important loads onto its base and settles with weight
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.3px) scaleY(0.82)', 'translateY(-3.16px) scaleY(1.08)', 'translateY(0.46px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.72,
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
            <motion.path d="M13 4H6.23456C3.79424 4 2.57407 4 2.14438 4.76649C2.13129 4.78984 2.11883 4.81353 2.10701 4.83754C1.71893 5.62592 2.41032 6.63129 3.7931 8.64204C4.89612 10.246 5.44763 11.048 5.4611 11.9555C5.46154 11.9852 5.46154 12.0148 5.4611 12.0445C5.44763 12.952 4.89612 13.754 3.7931 15.358C2.41032 17.3687 1.71893 18.3741 2.10701 19.1625C2.11883 19.1865 2.13129 19.2102 2.14438 19.2335C2.57407 20 3.79424 20 6.23456 20H13C14.9628 20 15.9443 20 16.7889 19.5777C17.6334 19.1554 18.2223 18.3703 19.4 16.8C21.1333 14.4889 22 13.3333 22 12C22 10.6667 21.1333 9.51111 19.4 7.2C18.2223 5.62972 17.6334 4.84458 16.7889 4.42229C15.9443 4 14.9628 4 13 4Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.86px 20px' }" />
          </svg>
        </div>
</template>
