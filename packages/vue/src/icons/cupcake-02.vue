<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cupcake02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the cake rises in its wrapper and lands with a soft squash
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.37px) scaleY(0.82)', 'translateY(-3.33px) scaleY(1.08)', 'translateY(0.49px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.66,
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
            <motion.path d="M7.88457 9.17584C6.17716 9.66367 5 11.2243 5 13M14.8267 6.00741C15.5026 4.11086 14.0469 2 12 2C12 6 7.88457 5 7.88457 9.17584C9.85501 8.61285 14.0271 8.25059 14.8267 6.00741ZM15.5 10.119C15.9612 9.85252 16.4109 9.50517 16.6846 9.07847C17.5442 7.73849 16.454 5.8677 14.8267 6.00741M16.6846 9.07847C18.6418 9.5353 19 11.2937 19 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M16 14.9487C16 12.3504 20 12.3504 20 14.9487C20 16.3111 19.2446 17.4779 18.6584 18.659C17.8515 20.2846 17.448 21.0973 16.7231 21.5487C15.9981 22 15.096 22 13.2918 22H10.7082C8.90398 22 8.00186 22 7.27691 21.5487C6.55195 21.0973 6.14852 20.2846 5.34164 18.659C4.7554 17.4779 4 16.3111 4 14.9487C4 12.3504 8 12.3504 8 14.9487C8 12.3504 12 12.3504 12 14.9487C12 12.3504 16 12.3504 16 14.9487Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
