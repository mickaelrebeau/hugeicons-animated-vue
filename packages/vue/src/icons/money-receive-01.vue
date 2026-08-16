<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoneyReceive01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wallet-01: the value rises from the wallet and settles back into place
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px)',
  },
  animate: {
    transform: ['translateX(0px)', 'translateX(1.83px)', 'translateX(-0.25px)', 'translateX(0px)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M2.01733 17.4993C4.2169 17.4993 6.00001 19.2824 6.00001 21.4819" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
            <motion.path d="M18 21.4819V21.39C18 19.2412 19.742 17.4993 21.8908 17.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
            <motion.path d="M6.00001 7.5166C6.00001 9.71617 4.2169 11.4993 2.01733 11.4993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
            <motion.path d="M18 7.5166C18 9.69692 19.769 11.468 21.9423 11.4989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
            <motion.path d="M17 7.50098C19.175 7.51308 20.3529 7.60953 21.1213 8.37792C22 9.2566 22 10.6708 22 13.4992V15.4992C22 18.3277 22 19.7419 21.1213 20.6206C20.2426 21.4992 18.8284 21.4992 16 21.4992H8C5.17157 21.4992 3.75736 21.4992 2.87868 20.6206C2 19.7419 2 18.3277 2 15.4992V13.4992C2 10.6708 2 9.2566 2.87868 8.37792C3.64706 7.60953 4.82497 7.51308 7 7.50098" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
            <motion.path d="M15 14.4993C15 16.1561 13.6569 17.4993 12 17.4993C10.3431 17.4993 9 16.1561 9 14.4993C9 12.8424 10.3431 11.4993 12 11.4993C13.6569 11.4993 15 12.8424 15 14.4993Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
            <motion.path d="M14.5 5.50195C14.5 5.50195 12.7002 8.00195 12 8.00195C11.2998 8.00195 9.5 5.50195 9.5 5.50195M12 7.50195V2.50195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2px 14.5px' }" />
          </svg>
        </div>
</template>
