<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DatesIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the dates move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.81px) rotate(-2.13deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M10.9634 5.99557C11.3365 7.83872 10.127 10.4978 6.95583 9.91143M7.83332 7.06718C8.72631 6.01842 10.8938 5.58672 13.4666 6.46785C14.5794 6.77285 16.9811 7.96207 18.0835 8.84055C19.4289 9.73549 21.3449 11.6344 21.845 13.6086C22.3911 15.4268 21.5448 18.1685 18.8879 19.9665C16.347 21.6859 12.787 21.7306 9.33138 16.37C9.20417 16.37 5.22995 9.90451 7.83332 7.06718Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.81px 21.73px' }" />
            <motion.path d="M1.99951 14.0814C4.0584 13.6671 6.39963 14.9254 5.99795 17.9958M16.9374 7.80658C16.9374 7.61715 16.5264 6.65927 16.1206 6.15985C14.2926 3.52828 11.5813 2.581 9.67688 3.16951C7.7013 3.664 5.81042 5.50484 4.91167 6.84773C3.8491 8.13919 2.79227 10.354 2.48411 11.4659C1.59567 14.0363 2.01008 16.2589 3.05626 17.1549C3.74123 17.7931 5.92049 18.6866 9.15774 17.1549" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.81px 21.73px' }" />
            <motion.path d="M11.0018 13.0212C11.0018 13.0212 11.0011 14.2451 12.2191 14.2446C13.4372 14.2441 13.4366 15.4678 13.4366 15.4678M14.0116 9.99738C14.0116 9.99738 14.0109 11.2213 15.2289 11.2208C16.447 11.2203 16.4464 12.4439 16.4464 12.4439M15.567 14.5509C15.567 14.5509 15.5663 15.7747 16.7843 15.7742C18.0024 15.7737 18.0018 16.9974 18.0018 16.9974" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.81px 21.73px' }" />
          </svg>
        </div>
</template>
