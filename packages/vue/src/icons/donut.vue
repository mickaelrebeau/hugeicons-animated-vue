<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DonutIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the donut separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.53px, -1.31px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.88px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
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
            <motion.circle cx="12" cy="12.002" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 2.00195C17.5228 2.00195 22 6.47911 22 12.002C22 17.5248 17.5228 22.002 12 22.002C6.47715 22.002 2 17.5248 2 12.002C2 11.3409 2.06448 10.6949 2.18717 10.0698C2.23327 9.83495 2.25632 9.71751 2.29108 9.63061C2.45182 9.22868 2.60865 9.09965 3.03401 9.01932C3.12598 9.00195 3.41732 9.00195 4 9.00195C5.31297 9.00195 6.42895 8.15849 6.83563 6.98385C7.00941 6.4819 7.0963 6.23093 7.19132 6.14492C7.28634 6.05892 7.52149 6.00292 7.99178 5.89092C9.16127 5.6124 10 4.81124 10 3.50195C10 3.14893 10 2.97242 10.0133 2.8917C10.0842 2.46114 10.3323 2.1913 10.7555 2.08458C10.8348 2.06458 10.9439 2.05541 11.1622 2.03707C11.4384 2.01387 11.7178 2.00195 12 2.00195Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
