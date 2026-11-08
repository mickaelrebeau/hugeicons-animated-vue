<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Underpants02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the waistband snaps and the leg lines kick out
// authored from scripts/authored
const legsVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1)',
      'translate(0px, 0.48px) scaleY(1.12)',
      'translate(0px, -0.16px) scaleY(0.96)',
      'translate(0px, 0.00px) scaleY(1)',
    ],
    transition: {
      duration: 0.66,
      delay: 0.1,
      times: [0, 0.26, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const bandVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(1.12)', 'scaleX(0.96)', 'scaleX(1)'],
    transition: { duration: 0.5, times: [0, 0.3, 0.64, 1], ease: [0.23, 1, 0.32, 1] },
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
            <path d="M21.9359 12.8119L20.9746 8.18614C20.6575 6.66014 20.4989 5.89714 19.9475 5.44857C19.3962 5 18.6169 5 17.0583 5H6.94174C5.38314 5 4.60384 5 4.05247 5.44857C3.50109 5.89714 3.34253 6.66014 3.02541 8.18614L2.06412 12.8119C1.86911 13.7503 2.08272 14.7586 3.20996 14.9718C3.87746 15.0981 4.5865 14.9574 5.26274 15.0369C6.77164 15.2142 8.12412 16.0187 8.96376 17.2382C9.69923 18.5906 10.405 19 12 19C13.595 19 14.3008 18.5906 15.0362 17.2382C15.8759 16.0187 17.2284 15.2142 18.7373 15.0369C19.4135 14.9574 20.1225 15.0981 20.79 14.9718C21.9173 14.7586 22.1309 13.7503 21.9359 12.8119Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M16 16L13.8914 8M8 16L10.1086 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="legsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.5 8H20.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bandVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8px' }" />
          </svg>
        </div>
</template>
