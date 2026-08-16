<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkoutRunIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the load dips, drives up, and comes back under control
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.19px) scaleY(0.94)', 'translateY(-3.02px) scaleY(1.04)', 'translateY(-2.59px) scaleY(1)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.85,
      times: [0, 0.18, 0.5, 0.68, 1],
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
            <motion.path d="M17 4.5C17 5.32843 16.3284 6 15.5 6C14.6716 6 14 5.32843 14 4.5C14 3.67157 14.6716 3 15.5 3C16.3284 3 17 3.67157 17 4.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 21px' }" />
            <motion.path d="M15 21.0008L14.3359 18.3848C14.1161 17.5191 13.6615 16.7284 13.0207 16.0974L11.5 14.5998M6 11.1534C7 9.18366 8.53767 8.0423 12 8.00136M12 8.00136C12.2186 7.99877 12.5444 7.99799 12.8698 7.99805C13.3747 7.99813 13.6271 7.99818 13.8282 8.09214C14.0293 8.18609 14.2356 8.43256 14.6482 8.92548C14.7664 9.06672 14.8878 9.19326 15 9.27743M12 8.00136L10.7309 9.95956C10.0332 11.0362 9.68429 11.5745 9.67069 12.1397C9.66463 12.3914 9.70617 12.642 9.79313 12.8784C9.98834 13.409 10.4922 13.8059 11.5 14.5998M15 9.27743C16.1547 10.1433 17.9627 10.4921 20 8.19913M15 9.27743L11.5 14.5998" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 21px' }" />
            <motion.path d="M4 17.7303L4.67822 17.8916C6.40663 18.3028 8.20324 17.5164 9 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13px 21px' }" />
          </svg>
        </div>
</template>
