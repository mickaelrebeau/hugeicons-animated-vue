<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'TransitionBottomIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the arrow pushes down from the top panel to the bottom edge
// authored from scripts/authored
const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -0.16799999999999998px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const edgeVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.8)', 'scale(1.08)', 'scale(1)'],
    opacity: [1, 0.15, 1, 1],
    transition: { duration: 0.62, delay: 0.24, times: [0, 0.24, 0.56, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M18 1.99994C19.4001 1.99994 20.1002 1.99994 20.635 2.27242C21.1054 2.51211 21.4878 2.89456 21.7275 3.36496C22 3.89974 22 4.59981 22 5.99994C22 7.40007 22 8.10014 21.7275 8.63492C21.4878 9.10532 21.1054 9.48777 20.635 9.72746C20.1002 9.99994 19.4001 9.99994 18 9.99994L6 9.99994C4.59987 9.99994 3.8998 9.99994 3.36502 9.72746C2.89462 9.48777 2.51217 9.10532 2.27248 8.63492C2 8.10014 2 7.40007 2 5.99994C2 4.59981 2 3.89974 2.27248 3.36496C2.51217 2.89456 2.89462 2.51211 3.36502 2.27242C3.8998 1.99994 4.59987 1.99994 6 1.99994L18 1.99994Z" stroke="currentColor" stroke-width="1.5" />
            <motion.path d="M12 17.9999L12 9.99994M12 17.9999C11.2998 17.9999 9.99153 16.0056 9.5 15.4999M12 17.9999C12.7002 17.9999 14.0085 16.0056 14.5 15.4999" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M2 15.9999C2 18.3388 2 19.5083 2.53646 20.3621C2.81621 20.8073 3.19267 21.1837 3.63789 21.4635C4.49167 21.9999 5.66111 21.9999 8 21.9999L16 21.9999C18.3389 21.9999 19.5083 21.9999 20.3621 21.4635C20.8073 21.1837 21.1838 20.8073 21.4635 20.3621C22 19.5083 22 18.3388 22 15.9999" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="edgeVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
          </svg>
        </div>
</template>
