<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mouse05Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the tilted mouse rocks and the cable swings
// authored from scripts/authored
const mouseVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.84px, 0.04px) rotate(-6deg)',
      'translate(0.56px, 0.02px) rotate(4deg)',
      'translate(-0.14px, 0.00px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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

const cableVariants: Variants = {
  normal: { transform: 'skewX(0deg)' },
  animate: {
    transform: ['skewX(0deg)', 'skewX(-14deg)', 'skewX(10deg)', 'skewX(-4deg)', 'skewX(0deg)'],
    transition: { duration: 0.7, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
  },
};

const mouse2Variants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.05px, -0.07px) rotate(-6deg)',
      'translate(0.69px, 0.11px) rotate(4deg)',
      'translate(-0.17px, -0.02px) rotate(-1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
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
            <motion.path d="M2.33308 12.3211C1.56295 13.9784 2.15878 16.1103 3.80545 17.3297C4.41103 17.778 5.03988 18.2109 5.707 18.5977C6.37411 18.9846 7.06189 19.315 7.75129 19.6175C9.62623 20.44 11.7624 19.8922 12.8065 18.3938C13.53 17.3555 14.2534 16.2797 14.9104 15.137C15.5673 13.9943 16.1333 12.8273 16.6669 11.6789C17.437 10.0216 16.8413 7.88974 15.1945 6.67036C14.589 6.22198 13.9601 5.78906 13.293 5.40226C12.6259 5.01545 11.9381 4.68496 11.2487 4.38249C9.37386 3.55998 7.23754 4.10773 6.19347 5.60619C5.47 6.64449 4.74664 7.72033 4.08971 8.86302C3.43278 10.0057 2.86672 11.1728 2.33308 12.3211Z" stroke="currentColor" stroke-width="1.5" :variants="mouseVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.5px 12px' }" />
            <motion.path d="M12 8L12.7192 6.70551C13.6233 5.07824 14.0753 4.26461 14.8427 4.05095C15.61 3.83729 16.393 4.30704 17.9589 5.24654L20.0351 6.49216C20.7231 6.90492 21.6028 6.65997 22 5.94505" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cableVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 5.9px' }" />
            <motion.path d="M12.25 10.299C12.483 9.89552 12.5995 9.69376 12.6254 9.49655C12.66 9.2336 12.5888 8.96767 12.4273 8.75726C12.3062 8.59946 12.1045 8.48297 11.701 8.25C11.2974 8.01703 11.0957 7.90054 10.8985 7.87458C10.6355 7.83996 10.3696 7.91122 10.1592 8.07267C10.0014 8.19376 9.88489 8.39552 9.65192 8.79904L9.15192 9.66506C8.91895 10.0686 8.80247 10.2703 8.7765 10.4675C8.74189 10.7305 8.81314 10.9964 8.9746 11.2068C9.09569 11.3646 9.29744 11.4811 9.70096 11.7141C10.1045 11.9471 10.3062 12.0636 10.5034 12.0895C10.7664 12.1241 11.0323 12.0529 11.2427 11.8914C11.4005 11.7703 11.517 11.5686 11.75 11.1651L12.25 10.299Z" stroke="currentColor" stroke-width="1.5" :variants="mouse2Variants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.7px 10px' }" />
          </svg>
        </div>
</template>
