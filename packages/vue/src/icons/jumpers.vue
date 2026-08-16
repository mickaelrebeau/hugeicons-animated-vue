<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'JumpersIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the jumpers take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.49deg)', 'scale(1.1) rotate(2.2deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.49, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.87px) rotate(-2.2deg)', 'translateY(0.44px) rotate(0.77deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.59,
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
            <motion.path d="M17 8V18.382C17 18.527 17 18.5995 16.9949 18.671C16.9796 18.8845 16.9301 19.0942 16.8483 19.292C16.6833 19.622 16.4761 20.0478 16.3744 20.1859C16.0683 20.6017 15.6132 20.8829 15.1044 20.9708C14.9354 21 14.7509 21 14.382 21H9.61803C9.24907 21 9.06459 21 8.89561 20.9708C8.38682 20.8829 7.93173 20.6017 7.62558 20.1859C7.5239 20.0478 7.31672 19.622 7.15171 19.292C7.06994 19.0942 7.02045 18.8845 7.00513 18.671C7 18.5995 7 18.527 7 18.382V8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14.5px' }" />
            <motion.path d="M9 3.00008L7.34318 3.83563C6.18862 4.4179 5.61133 4.70903 5.20998 5.19408C4.80862 5.67914 4.6279 6.30409 4.26647 7.55399L1.65002 16.602L1.52542 17.0884L1.5 17.6612C1.5 17.9517 1.5 18.4809 1.53286 18.607C1.60261 18.8746 1.7783 19.1015 2.01878 19.2347C2.13207 19.2974 2.27182 19.3327 2.5512 19.4031C2.8053 19.4672 2.93235 19.4992 3.05194 19.5001C3.30547 19.5018 3.55021 19.4064 3.73664 19.2331C3.82457 19.1513 4.21056 18.5673 4.21056 18.5673L4.4585 18.1675L4.65564 17.6271L7 10.0001" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '5.25px 11.25px' }" />
            <motion.path d="M15 3.00002L16.6568 3.83557C17.8114 4.41783 18.3887 4.70897 18.79 5.19402C19.1914 5.67908 19.3721 6.30403 19.7335 7.55393L22.35 16.6019L22.4746 17.0884L22.5 17.6612C22.5 17.9517 22.5 18.4808 22.4671 18.6069C22.3974 18.8745 22.2217 19.1015 21.9812 19.2346C21.8679 19.2974 21.7282 19.3326 21.4488 19.4031C21.1947 19.4671 21.0677 19.4992 20.9481 19.5C20.6945 19.5018 20.4498 19.4063 20.2634 19.233C20.1754 19.1513 19.7894 18.5673 19.7894 18.5673L19.5415 18.1675L19.3444 17.627L17 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18.75px 11.25px' }" />
            <motion.path d="M11.1425 6.52124L10.5018 6.91109L11.1425 6.52124ZM9 3V2.25C8.72897 2.25 8.47902 2.39623 8.34621 2.6325C8.2134 2.86876 8.2184 3.1583 8.35928 3.38985L9 3ZM15 3L15.6407 3.38985C15.7816 3.1583 15.7866 2.86876 15.6538 2.6325C15.521 2.39623 15.271 2.25 15 2.25V3ZM12.8575 6.52124L13.4982 6.91109L12.8575 6.52124ZM11.7832 6.13139L9.64072 2.61015L8.35928 3.38985L10.5018 6.91109L11.7832 6.13139ZM9 3.75H15V2.25H9V3.75ZM14.3593 2.61015L12.2168 6.13139L13.4982 6.91109L15.6407 3.38985L14.3593 2.61015ZM10.5018 6.91109C11.1824 8.02964 12.8176 8.02964 13.4982 6.91109L12.2168 6.13139C12.1206 6.28954 11.8794 6.28953 11.7832 6.13139L10.5018 6.91109Z" fill="currentColor" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
