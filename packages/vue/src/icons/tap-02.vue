<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tap02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after mouse-left-click-01: the contact point presses, ripples, and releases
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.87px) scaleX(0.9) scaleY(1.04)', 'translateX(2.19px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M16.2494 22.0012C16.2798 20.1362 16.2126 20.5213 16.3651 20.0469C16.5177 19.5724 17.1082 18.7482 17.4736 17.6984C18.4962 14.7597 17.9519 13.5537 16.4377 12.6174C14.8423 11.6308 13.2317 11.2482 11.8206 11.3704V6.73351C11.8206 5.7716 11.275 5.02918 10.3117 5.02918C9.34833 5.02918 8.86228 5.86682 8.86228 6.82872L8.91294 11.6642M8.89472 22.0012V21.3328C8.89472 20.5476 8.63697 20.2124 7.54691 18.6357C6.34528 16.8976 6.35032 16.8151 6.07506 16.0583C6.02633 15.705 5.72775 14.8804 6.83195 13.7301L8.91294 11.6642M8.91294 15.1907V11.6642" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.73px 13.52px' }" />
            <motion.path d="M6.49727 6.0232C6.4315 5.10323 6.99749 3.28328 8.55063 2.52231C9.19108 2.13281 10.949 1.52974 12.6304 2.60432C14.2874 3.66333 14.3992 5.22472 14.5035 6.01284" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.73px 13.52px' }" />
          </svg>
        </div>
</template>
