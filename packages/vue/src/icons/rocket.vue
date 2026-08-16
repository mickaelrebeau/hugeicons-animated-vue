<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RocketIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after rocket-01: the rocket stretches, clears the pad, and a new one rises into the same slot
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
    visibility: 'visible',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.21px) scaleY(0.9)', 'translateY(-8.04px) scaleY(1.12)', 'translateY(-22.11px) scaleY(1.05)', 'translateY(16.08px) scaleY(0.92)', 'translateY(0px) scaleY(1)'],
    visibility: ['visible', 'visible', 'visible', 'hidden', 'hidden', 'visible'],
    transition: {
      duration: 1.04,
      times: [0, 0.16, 0.4, 0.52, 0.58, 1],
      ease: [
        'easeIn',
        'easeIn',
        'linear',
        'linear',
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
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="hidden">
            <motion.path d="M8 10.1667L12.1232 6.04344C13.2481 4.91858 13.8105 4.35614 14.4312 3.90314C15.7047 2.9737 17.1818 2.36187 18.7395 2.11858C19.4988 2 20.2942 2 21.885 2C21.9681 2 22 2.03812 22 2.11504C22 3.70584 22 4.50125 21.8814 5.26046C21.6381 6.81818 21.0263 8.29527 20.0969 9.56878C19.6439 10.1895 19.0814 10.7519 17.9566 11.8768L13.8333 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 16px' }" />
            <motion.path d="M10.341 8.09838C8.63808 8.09838 6.49778 7.73765 4.9043 8.39769C3.73671 8.88132 2.87754 10.0012 2 10.8787L5.30597 12.2955C6.18208 12.671 5.64651 13.7766 5.50147 14.5018C5.33985 15.3099 5.34886 15.3397 5.93158 15.9224L8.07758 18.0684C8.6603 18.6511 8.69008 18.6602 9.49816 18.4985C10.2234 18.3535 11.329 17.8179 11.7044 18.694L13.1213 22C13.9988 21.1225 15.1187 20.2633 15.6023 19.0957C16.2624 17.5022 15.9016 15.3619 15.9016 13.659" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9.13px 22px' }" />
            <motion.path d="M12 20L11 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 21px' }" />
            <motion.path d="M4 12L3 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3.5px 13px' }" />
            <motion.path d="M15 4.07996C16.2 4.25996 17.46 4.73996 18.1614 5.45996C19.0576 6.25211 19.68 7.31996 19.92 8.99996" stroke="currentColor" stroke-linecap="square" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.46px 9px' }" />
            <motion.path d="M17.94 6.06006L16.5 7.50006" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.22px 7.5px' }" />
          </svg>
        </div>
</template>
