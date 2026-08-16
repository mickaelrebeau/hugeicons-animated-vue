<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ComplaintIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the complaint separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.44px, -1.24px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.52,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.82px) rotate(-1.03deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M17.0004 7L17.0049 5.50488M17.0504 9.90037H17.0004M17.1004 9.90037C17.1004 9.9556 17.0556 10.0004 17.0004 10.0004C16.9452 10.0004 16.9004 9.9556 16.9004 9.90037C16.9004 9.84514 16.9452 9.80037 17.0004 9.80037C17.0556 9.80037 17.1004 9.84514 17.1004 9.90037Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 7.75px' }" />
            <motion.path d="M17 12.5667C19.7611 12.5667 22 10.4249 22 7.78336C22 5.14178 19.7611 3 17 3C14.2389 3 12 5.14178 12 7.78336C12 9.05254 12.5167 10.2058 13.3594 11.0616C13.545 11.25 13.6689 11.5074 13.6189 11.7724C13.5364 12.2056 13.3494 12.6097 13.0756 12.9465C13.796 13.0805 14.5451 12.9598 15.1875 12.6182L15.1881 12.6179C15.4148 12.4973 15.5282 12.437 15.6083 12.4248C15.6884 12.4126 15.8032 12.4341 16.0327 12.4772C16.3516 12.5371 16.6753 12.5671 17 12.5667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 8.04px' }" />
            <motion.path d="M10 13C10 14.6569 8.65685 16 7 16C5.34315 16 4 14.6569 4 13C4 11.3431 5.34315 10 7 10C8.65685 10 10 11.3431 10 13Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 13px' }" />
            <motion.path d="M12 21C12 18.2386 9.76142 16 7 16C4.23858 16 2 18.2386 2 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18.5px' }" />
          </svg>
        </div>
</template>
