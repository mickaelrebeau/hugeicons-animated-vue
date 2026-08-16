<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RamadhanIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the ramadhan separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.54px, -1.32px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
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
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.88px) rotate(-1.1deg)', 'translateY(0.49px) rotate(0.55deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M18.1911 3.07767L18.895 4.49715C18.991 4.69475 19.2469 4.88428 19.4629 4.92057L20.7388 5.1343C21.5547 5.27141 21.7467 5.86824 21.1587 6.457L20.1668 7.45709C19.9989 7.62646 19.9069 7.9531 19.9589 8.18699L20.2428 9.425C20.4668 10.4049 19.9509 10.784 19.091 10.2718L17.8951 9.55808C17.6791 9.42903 17.3232 9.42903 17.1032 9.55808L15.9073 10.2718C15.0514 10.784 14.5315 10.4009 14.7554 9.425L15.0394 8.18699C15.0914 7.9531 14.9994 7.62646 14.8314 7.45709L13.8395 6.457C13.2556 5.86824 13.4436 5.27141 14.2595 5.1343L15.5353 4.92057C15.7473 4.88428 16.0033 4.69475 16.0993 4.49715L16.8032 3.07767C17.1872 2.30744 17.8111 2.30744 18.1911 3.07767Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 6.55px' }" />
            <motion.path d="M2.5 11.8049C2.5 17.1594 6.84065 21.5 12.1951 21.5C16.601 21.5 20.3204 18.5611 21.5 14.5367C20.0791 15.5691 18.3306 16.1779 16.44 16.1779C11.6804 16.1779 7.82208 12.3196 7.82208 7.56005C7.82208 5.66937 8.43094 3.9209 9.46326 2.5C5.4389 3.67959 2.5 7.39904 2.5 11.8049Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
