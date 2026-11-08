<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Cone02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the sprinkles pop on the scoop and the scoop answers
// authored from scripts/authored
const scoopVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.972)', 'scale(1.022)', 'scale(1)'],
    transition: { duration: 0.48, delay: 0.26, times: [0, 0.3, 0.66, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const sprinkleVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.4)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const sprinkle2Variants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(2.4)', 'scale(0.92)', 'scale(1)'],
    transition: {
      duration: 0.5,
      delay: 0.12,
      times: [0, 0.34, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

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
            <path d="M12 19H15M15 19C15 18.2322 14.7071 17.4645 14.1213 16.8787C12.9497 15.7071 11.0503 15.7071 9.87868 16.8787C8.70711 18.0503 8.70711 19.9497 9.87868 21.1213C11.0503 22.2929 12.9497 22.2929 14.1213 21.1213C14.7071 20.5355 15 19.7678 15 19Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 3L12 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M2.94867 11.4964C4.92231 14.2156 8.24 16 12 16C15.76 16 19.0777 14.2156 21.0513 11.4964C21.7599 10.5203 22.1141 10.0322 21.9672 9.18232C21.8203 8.33248 21.1837 7.89241 19.9104 7.01228L14.3985 3.20228C13.239 2.40076 12.6592 2 12 2C11.3408 2 10.761 2.40076 9.60147 3.20228L4.08961 7.01228C2.81635 7.89241 2.17971 8.33248 2.03278 9.18232C1.88585 10.0322 2.24013 10.5203 2.94867 11.4964Z" stroke="currentColor" stroke-width="1.5" :variants="scoopVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M12.125 9H12M12.25 9C12.25 9.13807 12.1381 9.25 12 9.25C11.8619 9.25 11.75 9.13807 11.75 9C11.75 8.86193 11.8619 8.75 12 8.75C12.1381 8.75 12.25 8.86193 12.25 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sprinkleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M12.125 12H12M12.25 12C12.25 12.1381 12.1381 12.25 12 12.25C11.8619 12.25 11.75 12.1381 11.75 12C11.75 11.8619 11.8619 11.75 12 11.75C12.1381 11.75 12.25 11.8619 12.25 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sprinkle2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
