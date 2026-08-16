<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tap05Icon' })

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
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.75px) scaleX(0.9) scaleY(1.04)', 'translateX(1.88px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.49,
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
            <motion.path d="M13.9841 6.01233C13.9841 3.79746 12.2051 2.00195 10.0106 2.00195C7.81611 2.00195 6.03711 3.79746 6.03711 6.01233" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.13px 12.93px' }" />
            <motion.path d="M9.37635 21.9925L9.27193 20.8967C8.78437 18.8793 8.11805 18.6134 7.03331 17.1675C6.54359 16.5147 5.5203 15.5898 4.68367 14.3404C4.12621 13.5078 4.87008 11.6153 6.56595 12.1923C6.84825 12.2883 7.08555 12.4807 7.29594 12.692L8.94241 14.3457C8.92894 12.0081 8.95893 7.24935 8.92261 5.78903C8.88628 4.32871 11.4204 3.85879 11.5697 5.85539V10.3468M11.5697 10.3468V11.2124M11.5697 10.3468C12.3984 9.24878 13.9664 9.21013 14.1946 11.0483M14.1946 11.0483C14.2317 11.3476 14.2346 11.6972 14.1946 12.1008M14.1946 11.0483C14.6133 9.7641 16.4526 10.274 16.8186 11.7687M16.8186 11.7687C16.9054 12.123 16.8186 12.533 16.8535 13.0064M16.8186 11.7687C17.0563 11.0483 19.6844 10.9951 19.4345 13.778L19.5 16.3019C19.3995 17.8089 19.1783 18.4403 18.6368 19.1687C18.3562 19.5463 17.9881 19.8788 17.8475 20.3278C17.7297 20.704 17.6555 21.2547 17.7367 22.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.13px 12.93px' }" />
          </svg>
        </div>
</template>
