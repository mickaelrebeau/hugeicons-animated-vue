<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DragRightIcon' })

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
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3px) rotate(3.74deg)', 'translateX(-0.37px) rotate(-0.94deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.66,
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
            <motion.path d="M8.66725 8.48697C7.6477 7.87575 6.96582 6.76359 6.96582 5.49298C6.96582 3.56386 8.53764 2 10.4766 2C12.4155 2 13.9874 3.56386 13.9874 5.49298C13.9874 6.76359 13.3055 7.87575 12.2859 8.48697" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.91px 22px' }" />
            <motion.path d="M18.0118 2.99023L19.7588 4.43095C20.0144 4.70291 20.0571 4.90799 19.9311 5.20934C19.8854 5.31849 19.8078 5.41067 19.7191 5.48911L18.0118 6.99909M14.4141 4.97515H18.8302" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.91px 22px' }" />
            <motion.path d="M8.5598 21.9322L8.58528 21.3026C8.6102 20.6871 8.44792 20.0747 8.10427 19.56C6.75224 17.5352 5.71906 16.382 4.30307 14.407C4.19092 14.2505 4.08602 14.0849 4.04183 13.898C3.70037 12.4547 5.46469 10.5763 7.09891 12.7397L8.69426 14.3703L8.69426 6.33819C8.90581 4.69236 11.5052 4.36589 11.9435 6.33817L11.9435 10.0762C13.5649 9.9291 20.1184 11.0532 18.8815 15.5352C18.8235 15.7452 18.7681 15.9597 18.7109 16.17C18.5026 16.9358 17.9931 18.0539 17.5025 19.007C16.9569 20.0667 17.1005 21.5638 17.0081 21.9984" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.91px 22px' }" />
          </svg>
        </div>
</template>
