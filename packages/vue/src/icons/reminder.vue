<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ReminderIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the reminder separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.46px, -1.25px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.84px) rotate(-1.04deg)', 'translateY(0.47px) rotate(0.52deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M13 18.9891C12.9216 20.0138 12.727 20.6842 12.2435 21.1757C11.4342 21.9984 10.1316 21.9984 7.5264 21.9984C4.92123 21.9984 3.61865 21.9984 2.80932 21.1757C2 20.3531 2 19.0291 2 16.381V11.5661C2 8.9181 2 7.59408 2.80932 6.77144C3.30138 6.27128 3.97578 6.07521 5.0144 5.99835" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 14px' }" />
            <motion.path d="M16.0785 2.00226H13.9215C11.0208 2.00226 9.57048 2.00226 8.70959 2.90551C7.8487 3.80876 7.93917 5.23554 8.12011 8.08909L8.24595 10.0738C8.28754 10.7296 8.30833 11.0575 8.38194 11.331C8.66622 12.3872 9.53533 13.192 10.6225 13.4058C10.904 13.4611 11.2373 13.4611 11.904 13.4611C12.8328 13.4611 12.8202 14.2283 12.8202 14.9877C12.8202 15.5767 12.8202 15.8713 13.0121 15.9725C13.204 16.0737 13.4526 15.9103 13.9499 15.5836L16.9093 13.6389C17.1029 13.5116 17.2769 13.4611 17.5048 13.4611C18.727 13.4611 19.3381 13.4611 19.8333 13.2773C21.5492 12.6402 21.6918 11.0548 21.7909 9.49221L21.8799 8.08909C22.0608 5.23554 22.1513 3.80876 21.2904 2.90551C20.4295 2.00226 18.9792 2.00226 16.0785 2.00226Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 9.04px' }" />
            <motion.path d="M13.8342 8.43083C11.4258 6.71654 14.9993 5.00226 14.9993 5.00226C14.9993 5.00226 18.5746 6.71654 16.1663 8.43083M13.8342 8.43083H16.1663M13.8342 8.43083L13.2507 11.0023M16.1663 8.43083L16.9821 11.0023" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 8px' }" />
            <motion.path d="M7.625 19.0023H7.5M7.75 19.0023C7.75 19.1403 7.63807 19.2523 7.5 19.2523C7.36193 19.2523 7.25 19.1403 7.25 19.0023C7.25 18.8642 7.36193 18.7523 7.5 18.7523C7.63807 18.7523 7.75 18.8642 7.75 19.0023Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 19px' }" />
          </svg>
        </div>
</template>
