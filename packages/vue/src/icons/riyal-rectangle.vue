<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'RiyalRectangleIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the riyal rectangle separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.74px) rotate(-0.93deg)', 'translateY(0.42px) rotate(0.46deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.62,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.3px, -1.11px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M12.5 2.5H11.5C7.25736 2.5 5.13604 2.5 3.81802 3.81802C2.5 5.13604 2.5 7.25736 2.5 11.5V12.5C2.5 16.7426 2.5 18.864 3.81802 20.182C5.13604 21.5 7.25736 21.5 11.5 21.5H12.5C16.7426 21.5 18.864 21.5 20.182 20.182C21.5 18.864 21.5 16.7426 21.5 12.5V11.5C21.5 7.25736 21.5 5.13604 20.182 3.81802C18.864 2.5 16.7426 2.5 12.5 2.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 10.5V11.5C19 13.1569 17.6569 14.5 16 14.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 12.5px' }" />
            <motion.path d="M11 8.5V12.5C11 13.0523 11.4477 13.5 12 13.5H13C13.5523 13.5 14 13.0523 14 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 11px' }" />
            <motion.path d="M8 8.5V12.5C8 13.0523 7.55228 13.5 7 13.5H6C5.44772 13.5 5 13.0523 5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.5px 11px' }" />
            <motion.path d="M11.15 16.1H11.1M13.9484 16.1H13.8984M11.2 16.1C11.2 16.1552 11.1552 16.2 11.1 16.2C11.0448 16.2 11 16.1552 11 16.1C11 16.0448 11.0448 16 11.1 16C11.1552 16 11.2 16.0448 11.2 16.1ZM13.9984 16.1C13.9984 16.1552 13.9537 16.2 13.8984 16.2C13.8432 16.2 13.7984 16.1552 13.7984 16.1C13.7984 16.0448 13.8432 16 13.8984 16C13.9537 16 13.9984 16.0448 13.9984 16.1Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 16.1px' }" />
          </svg>
        </div>
</template>
