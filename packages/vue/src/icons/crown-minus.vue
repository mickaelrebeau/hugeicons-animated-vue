<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CrownMinusIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after minus-sign-circle: the remove mark pinches short while the host shape recoils
// generated from @hugeicons/core-free-icons
const minusVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.35)', 'scaleX(1.08)', 'scaleX(1)'],
    transition: {
      duration: 0.42,
      ease: 'easeOut',
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.46,
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
            <motion.path d="M21.5 3L16.5 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="minusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 3px' }" />
            <motion.path d="M5 21H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M16.8717 18H7.1283C6.10017 18 5.58611 18 5.19623 17.7234C4.80634 17.4468 4.63649 16.9616 4.29679 15.9912L2.05123 9.57668C1.93172 9.22325 2.02503 8.8336 2.29225 8.57016C2.62854 8.23864 3.15545 8.1872 3.55117 8.44727L4.78349 9.25718C6.02739 10.0747 6.64935 10.4835 7.27815 10.3349C7.90696 10.1863 8.28019 9.54241 9.02665 8.25461L11.2412 4.43412C11.3968 4.16567 11.6864 4 12 4C12.3136 4 12.6032 4.16567 12.7588 4.43412L14.9733 8.25461C15.7198 9.54241 16.093 10.1863 16.7218 10.3349C17.3507 10.4835 17.9726 10.0747 19.2165 9.25718L20.4488 8.44727C20.8445 8.1872 21.3715 8.23864 21.7078 8.57016C21.975 8.8336 22.0683 9.22325 21.9488 9.57668L19.7032 15.9912C19.3635 16.9616 19.1937 17.4468 18.8038 17.7234C18.4139 18 17.8998 18 16.8717 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11px' }" />
          </svg>
        </div>
</template>
