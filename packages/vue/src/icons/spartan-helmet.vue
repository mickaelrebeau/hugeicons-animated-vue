<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SpartanHelmetIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the body of the spartan helmet lifts while its detail lines follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.82px) rotate(-1.02deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const lineVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.5)', 'scaleX(1.1)', 'scaleX(1)'],
    transition: {
      duration: 0.47,
      delay: 0.12,
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
            <motion.path d="M4.53767 15.0937C2.8878 8.60966 5.99612 4.5631 12.0003 2C18.0046 4.5631 21.1122 8.60966 19.4623 15.0937C19.3427 15.5637 19.3575 16.063 19.5336 16.514L20.9095 20.038C21.4448 21.409 19.4664 21.7351 18.6252 21.9121C16.3106 22.3991 14.0668 20.8106 13.693 18.4203C13.4291 16.7328 14.3833 16.4559 15.6306 15.817C15.6306 15.817 17.1867 15.2855 17.1867 13.6913C17.1867 12.5173 16.2578 11.5656 15.1119 11.5656C14.3943 11.5656 13.7621 11.774 13.135 12.4517C12.5272 13.1086 12.2234 13.437 12.0004 13.437C11.7774 13.437 11.4734 13.1086 10.8656 12.4518C10.2382 11.774 9.60571 11.5656 8.88813 11.5656C7.74224 11.5656 6.81332 12.5173 6.81332 13.6913C6.81332 15.2855 8.36942 15.817 8.36942 15.817C9.61674 16.4559 10.5709 16.7328 10.307 18.4203C9.93315 20.8106 7.6894 22.3991 5.37484 21.9121C4.53362 21.7351 2.55521 21.409 3.09051 20.038L4.46636 16.514C4.64246 16.063 4.65729 15.5637 4.53767 15.0937Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.2px' }" />
            <motion.path d="M10 20H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="lineVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 20px' }" />
            <motion.path d="M12.125 8H12M12.25 8C12.25 8.13807 12.1381 8.25 12 8.25C11.8619 8.25 11.75 8.13807 11.75 8C11.75 7.86193 11.8619 7.75 12 7.75C12.1381 7.75 12.25 7.86193 12.25 8Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
