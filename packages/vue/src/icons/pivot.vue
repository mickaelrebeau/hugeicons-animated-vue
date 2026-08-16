<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PivotIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the pivot take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.91deg)', 'scale(1.1) rotate(1.96deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
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
            <motion.path d="M21.5 11.5C21.5 7.27027 21.5 5.1554 20.302 3.75276C20.1319 3.55358 19.9464 3.36808 19.7472 3.19797C18.3446 2 16.2297 2 12 2C7.77027 2 5.6554 2 4.25276 3.19797C4.05358 3.36808 3.86808 3.55358 3.69797 3.75276C2.5 5.1554 2.5 7.27027 2.5 11.5C2.5 15.7297 2.5 17.8446 3.69797 19.2472C3.86808 19.4464 4.05358 19.6319 4.25276 19.802C5.54022 20.9016 7.42774 20.9919 11 20.9993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <motion.path d="M8.5 2.5L8.5 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '8.5px 11.5px' }" />
            <motion.path d="M21 8L3 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
            <motion.path d="M16.5 17C15.9943 17.4915 14 18.7998 14 19.5C14 20.2002 15.9943 21.5085 16.5 22M14.5 19.5H16.5C18.3692 19.5 19.3038 19.5 20 19.0981C20.4561 18.8348 20.8348 18.4561 21.0981 18C21.5 17.3038 21.5 16.3692 21.5 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '17.75px 18.25px' }" />
          </svg>
        </div>
</template>
