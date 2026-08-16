<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GarageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-open: it swings open from the hinge, then closes on the same arc
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateX(0deg) scaleY(1)',
  },
  animate: {
    transform: ['rotateX(0deg) scaleY(1)', 'rotateX(-55deg) scaleY(0.72)', 'rotateX(7.37deg) scaleY(1.04)', 'rotateX(0deg) scaleY(1)'],
    transition: {
      duration: 0.68,
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
            <motion.path d="M9.7812 3.09766L5.6718 5.89369C4.3639 6.78359 3.70995 7.22854 3.35498 7.90548C3 8.58242 3 9.38456 3 10.9888V17.9176C3 19.8421 3 20.8043 3.58579 21.4021C4.17157 22 5.11438 22 7 22H17C18.8856 22 19.8284 22 20.4142 21.4021C21 20.8043 21 19.8421 21 17.9176V10.9888C21 9.38456 21 8.58242 20.645 7.90548C20.29 7.22854 19.6361 6.78359 18.3282 5.89369L14.2188 3.09766C13.1433 2.36589 12.6056 2 12 2C11.3944 2 10.8567 2.36589 9.7812 3.09766Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M7 22V17C7 15.1144 7 14.1716 7.58579 13.5858C8.17157 13 9.11438 13 11 13H13C14.8856 13 15.8284 13 16.4142 13.5858C17 14.1716 17 15.1144 17 17V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M7 16H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M7 19H17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
            <motion.path d="M12.125 7H12M12.25 7C12.25 7.13807 12.1381 7.25 12 7.25C11.8619 7.25 11.75 7.13807 11.75 7C11.75 6.86193 11.8619 6.75 12 6.75C12.1381 6.75 12.25 6.86193 12.25 7Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2px' }" />
          </svg>
        </div>
</template>
