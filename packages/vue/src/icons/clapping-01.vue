<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Clapping01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: both hands drive together and rebound from the contact
// generated from @hugeicons/core-free-icons
const rightVehicleVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(-1.09px) rotate(0deg)', 'translateX(-3.37px) rotate(-1.63deg)', 'translateX(-2.07px) rotate(3.26deg)', 'translateX(0.87px) rotate(1.09deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.82,
      times: [0, 0.18, 0.38, 0.48, 0.72, 1],
      ease: [
        'easeIn',
        'easeIn',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
}

const leftVehicleVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(1.06px) rotate(0deg)', 'translateX(3.28px) rotate(1.59deg)', 'translateX(2.01px) rotate(-3.17deg)', 'translateX(-0.85px) rotate(-1.06deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.8,
      times: [0, 0.18, 0.38, 0.48, 0.72, 1],
      ease: [
        'easeIn',
        'easeIn',
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
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
            <motion.path d="M19.3961 10.8669C19.8629 10.417 20.6197 10.417 21.0865 10.8669C21.5532 11.3168 21.5532 12.0463 21.0865 12.4961L19.9595 13.5823M19.3961 10.8669L20.523 9.78079C20.9898 9.33089 20.9898 8.60146 20.523 8.15157C20.0562 7.70167 19.2994 7.70167 18.8326 8.15157L17.9876 8.96629M19.3961 10.8669L16.2971 13.8538M17.9876 8.96629C18.454 8.51637 18.4539 7.7872 17.9872 7.33742C17.5204 6.88753 16.7636 6.88753 16.2969 7.33742L11.5289 11.9327L11.5318 10.17C11.533 9.39664 10.8365 8.79601 10.0389 8.88262C9.42857 8.9489 8.94078 9.40462 8.85299 9.99057L8.29037 14.4426C8.18273 15.2944 7.62953 16.2341 7 16.8408M17.9876 8.96629L15.1703 11.6817M12.3528 22L13.009 21.3676C13.3086 21.0788 13.7156 20.9198 14.1384 20.8929C14.6272 20.8617 15.2733 20.7893 15.6643 20.621C16.3383 20.331 16.9506 19.7408 18.1752 18.5605L21.6499 15.2115C22.1167 14.7616 22.1167 14.0322 21.6499 13.5823C21.1831 13.1324 20.4263 13.1324 19.9595 13.5823M17.424 16.0261L19.9595 13.5823" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rightVehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 14.44px' }" />
            <motion.path d="M13.4843 4.09738C13.9717 3.61746 13.9716 2.83968 13.4839 2.35992C12.996 1.88003 12.2051 1.88003 11.7172 2.35992L6.73328 7.26465L6.73711 5.38136C6.73842 4.55642 6.0105 3.91575 5.17686 4.00813C4.53899 4.07882 4.02919 4.56493 3.93744 5.18994L3.34861 9.94193C3.23611 10.8505 2.65795 11.8528 2 12.5M13.4843 4.09738L14.3675 3.22834C14.8553 2.74845 15.6463 2.74845 16.1341 3.22834C16.3781 3.46832 16.5 3.78285 16.5 4.09738M13.4843 4.09738L11 6.54112" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="leftVehicleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 7.19px' }" />
          </svg>
        </div>
</template>
