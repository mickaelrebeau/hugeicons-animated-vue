<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarFavorite01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after calendar-03: the bound page flips from its rings and settles flat
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateX(0deg) scaleY(1)',
  },
  animate: {
    transform: ['rotateX(0deg) scaleY(1)', 'rotateX(-55deg) scaleY(0.72)', 'rotateX(8.19deg) scaleY(1.04)', 'rotateX(0deg) scaleY(1)'],
    transition: {
      duration: 0.64,
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
            <motion.path d="M16 2V6M8 2V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M21 14V12C21 8.22876 21 6.34315 19.8284 5.17157C18.6569 4 16.7712 4 13 4H11C7.22876 4 5.34315 4 4.17157 5.17157C3 6.34315 3 8.22876 3 12V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M3 10H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
            <motion.path d="M18.1047 15.5055L18.7206 16.7475C18.8046 16.9204 19.0286 17.0862 19.2175 17.118L20.3339 17.305C21.0478 17.425 21.2158 17.9472 20.7014 18.4624L19.8335 19.3374C19.6865 19.4856 19.606 19.7715 19.6515 19.9761L19.9 21.0594C20.096 21.9168 19.6445 22.2485 18.8921 21.8004L17.8457 21.1758C17.6567 21.0629 17.3453 21.0629 17.1528 21.1758L16.1064 21.8004C15.3575 22.2485 14.9025 21.9133 15.0985 21.0594L15.347 19.9761C15.3925 19.7715 15.312 19.4856 15.165 19.3374L14.2971 18.4624C13.7861 17.9472 13.9506 17.425 14.6646 17.305L15.7809 17.118C15.9664 17.0862 16.1904 16.9204 16.2744 16.7475L16.8903 15.5055C17.2263 14.8315 17.7722 14.8315 18.1047 15.5055Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 4px' }" />
          </svg>
        </div>
</template>
