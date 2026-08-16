<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'OvenIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after fire: heat builds inside the cavity and shimmers out
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(1.08) rotate(-3.28deg)', 'scale(0.96) rotate(2.19deg)', 'scale(1.04) rotate(-1.09deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M3 16V8C3 5.17157 3 3.75736 3.87868 2.87868C4.75736 2 6.17157 2 9 2H15C17.8284 2 19.2426 2 20.1213 2.87868C21 3.75736 21 5.17157 21 8V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H9C6.17157 22 4.75736 22 3.87868 21.1213C3 20.2426 3 18.8284 3 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M6 16V11C6 9.58579 6 8.87868 6.43934 8.43934C6.87868 8 7.58579 8 9 8H15C16.4142 8 17.1213 8 17.5607 8.43934C18 8.87868 18 9.58579 18 11V16C18 17.4142 18 18.1213 17.5607 18.5607C17.1213 19 16.4142 19 15 19H9C7.58579 19 6.87868 19 6.43934 18.5607C6 18.1213 6 17.4142 6 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M9 11H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M12.0504 5.00234H12.0004M12.1004 5.00234C12.1004 5.05757 12.0556 5.10234 12.0004 5.10234C11.9452 5.10234 11.9004 5.05757 11.9004 5.00234C11.9004 4.94712 11.9452 4.90234 12.0004 4.90234C12.0556 4.90234 12.1004 4.94712 12.1004 5.00234Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M16.0504 5.00234H16.0004M16.1004 5.00234C16.1004 5.05757 16.0556 5.10234 16.0004 5.10234C15.9452 5.10234 15.9004 5.05757 15.9004 5.00234C15.9004 4.94712 15.9452 4.90234 16.0004 4.90234C16.0556 4.90234 16.1004 4.94712 16.1004 5.00234Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M8.05039 5.00234H8.00039M8.10039 5.00234C8.10039 5.05757 8.05562 5.10234 8.00039 5.10234C7.94516 5.10234 7.90039 5.05757 7.90039 5.00234C7.90039 4.94712 7.94516 4.90234 8.00039 4.90234C8.05562 4.90234 8.10039 4.94712 8.10039 5.00234Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
