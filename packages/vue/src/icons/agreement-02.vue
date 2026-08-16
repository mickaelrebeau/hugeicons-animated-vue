<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Agreement02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the clasp pumps down twice and both cuffs take up the slack
// authored from scripts/authored
const claspVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: [
      'translateY(0px)',
      'translateY(0.8px)',
      'translateY(-0.3px)',
      'translateY(0.45px)',
      'translateY(0px)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.28, 0.46, 0.66, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const cuffVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.82)', 'scaleX(1)'],
    transition: { duration: 0.6, delay: 0.06, times: [0, 0.36, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M22 6.75003H19.2111C18.61 6.75003 18.3094 6.75003 18.026 6.66421C17.7426 6.5784 17.4925 6.41168 16.9923 6.07823C16.2421 5.57806 15.3862 5.00748 14.961 4.87875C14.5359 4.75003 14.085 4.75003 13.1833 4.75003C11.9571 4.75003 11.1667 4.75003 10.6154 4.97839C10.0641 5.20675 9.63056 5.6403 8.76347 6.50739L8.00039 7.27047C7.80498 7.46588 7.70727 7.56359 7.64695 7.66005C7.42335 8.01764 7.44813 8.47708 7.70889 8.80854C7.77924 8.89796 7.88689 8.98459 8.10218 9.15785C8.89796 9.79827 10.0452 9.73435 10.7658 9.00945L12 7.76789H13L19 13.8036C19.5523 14.3592 19.5523 15.2599 19 15.8155C18.4477 16.3711 17.5523 16.3711 17 15.8155L16.5 15.3125M13.5 12.2947L16.5 15.3125M16.5 15.3125C17.0523 15.8681 17.0523 16.7689 16.5 17.3244C15.9477 17.88 15.0523 17.88 14.5 17.3244L13.5 16.3185M13.5 16.3185C14.0523 16.874 14.0523 17.7748 13.5 18.3304C12.9477 18.8859 12.0523 18.8859 11.5 18.3304L10 16.8214M13.5 16.3185L11.5 14.3185M9.5 16.3185L10 16.8214M10 16.8214C10.5523 17.377 10.5523 18.2778 10 18.8334C9.44772 19.3889 8.55229 19.3889 8 18.8334L5.17637 15.9509C4.59615 15.3586 4.30604 15.0625 3.93435 14.9062C3.56266 14.75 3.14808 14.75 2.31894 14.75H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="claspVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M22 14.75H19.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cuffVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '22px 14.8px' }" />
            <motion.path d="M8.5 6.75003L2 6.75003" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="cuffVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 6.8px' }" />
          </svg>
        </div>
</template>
