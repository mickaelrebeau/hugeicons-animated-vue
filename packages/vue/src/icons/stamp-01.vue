<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Stamp01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the stamp presses down onto its pad and lifts
// authored from scripts/authored
const padVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(1)'],
    transition: { duration: 0.6, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const stampVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, 1.4px)',
      'translate(0px, -0.3px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.6,
      times: [0, 0.36, 0.64, 0.88, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M4.98572 19.1814C5.00154 20.4212 5.08263 20.9434 5.49849 21.4149C6.0151 22.0007 6.84657 22.0007 8.50951 22.0007H15.4619C17.1248 22.0007 17.9563 22.0007 18.4729 21.4149C18.8888 20.9434 18.9699 20.4212 18.9857 19.1814" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="padVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20.6px' }" />
            <motion.path d="M11.9887 19.0706L4.75696 19.0706C4.03899 19.0706 3.4179 18.485 3.50814 17.7727C3.6672 16.5171 4.30558 14.9994 6.83602 14.066C7.72556 13.7378 8.70501 13.4538 9.18761 12.6377C9.86497 11.4922 10.1635 10.2384 8.90009 8.0882C6.83602 4.0204 9.92439 1.99932 12.0114 1.99932C14.0983 1.99932 17.1489 4.1488 15.0643 8.0882C13.7986 10.2209 14.135 11.4922 14.8124 12.6377C15.295 13.4538 16.2744 13.7378 17.164 14.066C19.6944 14.9994 20.3328 16.5171 20.4918 17.7727C20.5821 18.485 19.961 19.0706 19.243 19.0706L12.0113 19.0706" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="stampVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10.5px' }" />
          </svg>
        </div>
</template>
