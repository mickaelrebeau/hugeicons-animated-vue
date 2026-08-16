<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Shaka01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the hand rocks once from the wrist and returns
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.64px) rotate(-4.1deg)', 'translateY(0.31px) rotate(1.02deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M12.329 5.95241L10.5 8.14663C11.8897 8.14663 12.5845 8.14663 13.1133 8.36021C14.0353 8.73264 14.7191 9.5491 14.9405 10.542C15.0675 11.1113 14.9644 11.8179 14.7583 13.2311L14 17.4011H19.25C20.2165 17.4011 21 18.2067 21 19.2005C21 20.1943 20.2165 21 19.25 21H11.0505C8.20258 21 6.7786 21 5.69477 20.4208C4.78184 19.9329 4.03745 19.1673 3.56312 18.2282C3 17.1134 3 15.6488 3 12.7195C3 11.1625 3 10.384 3.25654 9.68332C3.33566 9.46725 3.43232 9.25841 3.54552 9.05902C3.91257 8.41248 4.50018 7.92155 5.67536 6.93972L9.91166 3.40042C10.5469 2.86973 11.4559 2.86619 12.095 3.39191C12.8631 4.02379 12.9692 5.18442 12.329 5.95241Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
