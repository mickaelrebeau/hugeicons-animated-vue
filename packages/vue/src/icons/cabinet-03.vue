<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cabinet03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the lower drawer slides down on its handle
// authored from scripts/authored
const drawerVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(0px, 1.6px)', 'translate(0px, 1.6px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.64,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <path d="M5.5 18V21M18.5 18V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M21 2.99994H3V12.9999C3 15.357 3 16.5355 3.82376 17.2677C4.64752 17.9999 5.97335 17.9999 8.625 17.9999H15.375C18.0267 17.9999 19.3525 17.9999 20.1762 17.2677C21 16.5355 21 15.357 21 12.9999V2.99994Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 3H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 10.5L21 10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M10 13.5L10.1554 13.5777C10.5758 13.7879 10.786 13.893 11.0126 13.9465C11.2393 14 11.4743 14 11.9443 14H12.0557C12.5257 14 12.7607 14 12.9874 13.9465C13.214 13.893 13.4242 13.7879 13.8446 13.5777L14 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="drawerVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13.8px' }" />
            <path d="M10 6.5L10.1554 6.57771C10.5758 6.7879 10.786 6.893 11.0126 6.9465C11.2393 7 11.4743 7 11.9443 7H12.0557C12.5257 7 12.7607 7 12.9874 6.9465C13.214 6.893 13.4242 6.7879 13.8446 6.57771L14 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
