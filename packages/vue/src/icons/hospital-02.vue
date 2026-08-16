<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Hospital02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the building holds while the cross on the facade pulses like an on-call sign
// generated from @hugeicons/core-free-icons
const beaconVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    opacity: 1,
  },
  animate: {
    transform: ['scale(1)', 'scale(1.25)', 'scale(0.9)', 'scale(1.2)', 'scale(1)'],
    opacity: [1, 0.45, 1, 0.5, 1],
    transition: {
      duration: 0.59,
      ease: 'easeInOut',
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
            <path d="M6 9V21H18V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3C9.17157 3 7.75736 3 6.87868 3.87868C6 4.75736 6 6.17157 6 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M2 13V17C2 18.8856 2 19.8284 2.58579 20.4142C3.17157 21 4.11438 21 6 21V9C4.11438 9 3.17157 9 2.58579 9.58579C2 10.1716 2 11.1144 2 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M18 9V21C19.8856 21 20.8284 21 21.4142 20.4142C22 19.8284 22 18.8856 22 17V13C22 11.1144 22 10.1716 21.4142 9.58579C20.8284 9 19.8856 9 18 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M10 18V21H14V18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12.0009 7V11M14.0059 8.995L10.0059 8.995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beaconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.01px 9px' }" />
          </svg>
        </div>
</template>
