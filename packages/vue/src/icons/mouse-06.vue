<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse06Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tilted mouse glides forward
// authored from scripts/authored
const cableVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(-14deg)', 'skewX(10deg)', 'skewX(-4deg)', 'skewX(0deg)'],
    transition: { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const mouseVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, -1px)',
      'translate(0.15px, 0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
      times: [0, 0.18, 0.46, 0.74, 1],
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
            <motion.path d="M22 6.16705C21.5974 6.96357 20.7056 7.23648 20.0082 6.77661L17.9036 5.38882C16.3163 4.34208 15.5226 3.81871 14.7447 4.05676C14.2697 4.20215 13.9138 4.59687 13.5 5.29516" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.8px 5.5px' }" />
            <motion.path d="M2.33308 12.3211C1.56295 13.9784 2.15878 16.1103 3.80545 17.3297C4.41103 17.778 5.03988 18.2109 5.707 18.5977C6.37411 18.9846 7.06189 19.315 7.75129 19.6175C9.62623 20.44 11.7624 19.8922 12.8065 18.3938C13.53 17.3555 14.2534 16.2797 14.9104 15.137C15.5673 13.9943 16.1333 12.8273 16.6669 11.6789C17.437 10.0216 16.8413 7.88974 15.1945 6.67036C14.589 6.22198 13.9601 5.78906 13.293 5.40226C12.6259 5.01545 11.9381 4.68496 11.2487 4.38249C9.37386 3.55998 7.23754 4.10773 6.19347 5.60619C5.47 6.64449 4.74664 7.72033 4.08971 8.86302C3.43278 10.0057 2.86672 11.1728 2.33308 12.3211Z" stroke="currentColor" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12px' }" />
            <motion.path d="M11.6328 7.90234L10.6328 9.63439" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.1px 8.8px' }" />
          </svg>
        </div>
</template>
