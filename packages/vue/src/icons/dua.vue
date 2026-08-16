<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DuaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the dua separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.79px) rotate(-0.99deg)', 'translateY(0.45px) rotate(0.49deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.38px, -1.19px)', 'translate(0.2px, -0.2px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.51,
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
            <motion.path d="M19 13L18.3417 12.3417C17.5896 11.5896 16.3803 11.5578 15.5896 12.2694L12.9931 14.6062C12.361 15.1751 12 15.9856 12 16.8361V21H14.6865C15.5238 21 16.323 20.6501 16.8909 20.0348L21.2044 15.3619C21.7159 14.8077 22 14.0812 22 13.327V6H21C19.8954 6 19 6.89543 19 8V13ZM19 13L16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 13.5px' }" />
            <motion.path d="M5 13L5.65826 12.3417C6.41042 11.5896 7.61975 11.5578 8.41041 12.2694L11.0069 14.6062C11.639 15.1751 12 15.9856 12 16.8361V21H9.31349C8.4762 21 7.677 20.6501 7.10908 20.0348L2.79559 15.3619C2.28405 14.8077 2 14.0812 2 13.327V6H3C4.10457 6 5 6.89543 5 8V13ZM5 13L8 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 13.5px' }" />
            <motion.path d="M15 7.43427C14.4347 8.3725 13.406 9 12.2308 9C10.4465 9 9 7.55354 9 5.76923C9 4.594 9.6275 3.56534 10.5657 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 6px' }" />
            <motion.path d="M14.125 4H14M14.25 4C14.25 4.13807 14.1381 4.25 14 4.25C13.8619 4.25 13.75 4.13807 13.75 4C13.75 3.86193 13.8619 3.75 14 3.75C14.1381 3.75 14.25 3.86193 14.25 4Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '14px 4px' }" />
          </svg>
        </div>
</template>
