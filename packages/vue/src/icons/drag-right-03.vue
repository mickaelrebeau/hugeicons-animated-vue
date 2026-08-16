<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DragRight03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the grabbed object pulls away, carries momentum, and returns
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.45px) rotate(4.31deg)', 'translateX(-0.43px) rotate(-1.08deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.64,
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
            <motion.path d="M11.2957 9.72218H12.235C13.2726 9.72218 14.1138 10.5679 14.1138 11.6111M14.1138 11.6111V12.5555M14.1138 11.6111C14.1138 11.0895 14.5343 10.6666 15.0531 10.6666C16.0907 10.6666 16.9319 11.5123 16.9319 12.5555M16.9319 12.5555V13.4999M16.9319 12.5555C16.9319 12.0611 17.3734 11.685 17.8585 11.7663L18.1801 11.8202C19.086 11.972 19.75 12.76 19.75 13.6834L19.7496 14.1297C19.7496 16.1823 19.7496 17.2086 19.4386 18.0257C19.2582 18.4996 18.7823 19.1041 18.4018 19.5409C18.0726 19.9187 17.8709 20.3979 17.8709 20.9001V22M11.2955 11.6111V6.41665C11.2955 5.63426 10.6646 5 9.8864 5C9.1082 5 8.47736 5.63426 8.47736 6.41665L8.47717 13.9367L6.9551 12.4016C6.28728 11.728 5.18723 11.7895 4.59724 12.5333C4.1458 13.1024 4.13333 13.9075 4.56692 14.4906L7.94837 18.8333C8.59533 19.6641 8.9469 20.9448 8.9469 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.94px 22px' }" />
            <motion.path d="M11.688 9.5C12.9177 8.81764 13.75 7.50601 13.75 6C13.75 3.79086 11.9591 2 9.75 2C7.54086 2 5.75 3.79086 5.75 6C5.75 7.50601 6.58229 8.81764 7.812 9.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.94px 22px' }" />
            <motion.path d="M16.7187 3.99609L18.4622 5.43681C18.7172 5.70877 18.7598 5.91385 18.6341 6.2152C18.5885 6.32435 18.5111 6.41653 18.4226 6.49497L16.7187 8.00495M13.7988 5.98101H17.5355" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.94px 22px' }" />
          </svg>
        </div>
</template>
