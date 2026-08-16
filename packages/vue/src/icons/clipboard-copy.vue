<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClipboardCopyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the front copy separates from the source and returns
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.36px, -1.17px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.78px) rotate(-0.97deg)', 'translateY(0.44px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M11.502 13.0003L20.502 13.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 13px' }" />
            <motion.path d="M13.5019 10.0003C13.5019 10.0003 10.502 12.2097 10.502 13.0003C10.5019 13.7909 13.502 16.0003 13.502 16.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 13px' }" />
            <motion.path d="M13.998 2.00027H8.99805C8.16962 2.00027 7.49805 2.67185 7.49805 3.50027C7.49805 4.3287 8.16962 5.00027 8.99805 5.00027H13.998C14.8265 5.00027 15.498 4.3287 15.498 3.50027C15.498 2.67185 14.8265 2.00027 13.998 2.00027Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 3.5px' }" />
            <motion.path d="M15.4981 3.50027C17.0515 3.54709 17.9781 3.72035 18.6194 4.36164C19.4466 5.18885 19.495 6.49068 19.4979 9.00027M7.49795 3.50027C5.94456 3.54708 5.01802 3.72034 4.37673 4.36163C3.49805 5.24031 3.49805 6.65453 3.49806 9.48296L3.49805 15.9998C3.49805 18.8282 3.49806 20.2424 4.37674 21.1211C5.25541 21.9997 6.66963 21.9997 9.49805 21.9997L13.498 21.9997C16.3265 21.9997 17.7407 21.9997 18.6194 21.1211C19.3877 20.3527 19.4842 19.175 19.4963 17.0003" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 12.75px' }" />
          </svg>
        </div>
</template>
