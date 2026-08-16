<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the cushion compresses under the weight and recovers
// generated from @hugeicons/core-free-icons
const seatVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(-0.58px) scaleY(1.04)', 'translateY(1.35px) scaleY(0.86)', 'translateY(-0.14px) scaleY(1.02)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M2 3.5V20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 18.5px' }" />
            <motion.path d="M22 8.5L22 20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 18.5px' }" />
            <motion.path d="M2 8.5L6 10.5H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 18.5px' }" />
            <motion.path d="M2 15.5H6M22 15.5H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 18.5px' }" />
            <motion.path d="M6 10.5V16.5C6 18.1547 6.34533 18.5 8 18.5H17C18.6547 18.5 19 18.1547 19 16.5V10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 18.5px' }" />
            <motion.path d="M6.81362 10.5C6.89385 10.076 7.0202 9.63248 6.99567 9.19713C6.95941 8.5536 6.63697 7.96625 6.1264 7.61368C5.92478 7.47446 5.48 7.33239 5.01268 7.21093C4.3308 7.0337 3.98986 6.94508 3.59142 7.03644C3.30841 7.10133 3.06258 7.25187 2.71115 7.52079C2.67243 7.55042 2.65307 7.56523 2.62289 7.59026C2.3843 7.78812 2.17276 8.07424 2.05352 8.36034C2.03844 8.39653 2.02562 8.43102 2 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 18.5px' }" />
          </svg>
        </div>
</template>
