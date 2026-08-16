<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ServerStack02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after database: the rack rows wake from top to bottom like a health check
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.44, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
  }),
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.09deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
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
            <motion.path d="M18.5 3H5.5C5.03534 3 4.80302 3 4.60982 3.03843C3.81644 3.19624 3.19624 3.81644 3.03843 4.60982C3 4.80302 3 5.03534 3 5.5C3 5.96466 3 6.19698 3.03843 6.39018C3.19624 7.18356 3.81644 7.80376 4.60982 7.96157C4.80302 8 5.03534 8 5.5 8H18.5C18.9647 8 19.197 8 19.3902 7.96157C20.1836 7.80376 20.8038 7.18356 20.9616 6.39018C21 6.19698 21 5.96466 21 5.5C21 5.03534 21 4.80302 20.9616 4.60982C20.8038 3.81644 20.1836 3.19624 19.3902 3.03843C19.197 3 18.9647 3 18.5 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 5.5px' }" />
            <motion.path d="M18.5 11H5.5C5.03534 11 4.80302 11 4.60982 11.0384C3.81644 11.1962 3.19624 11.8164 3.03843 12.6098C3 12.803 3 13.0353 3 13.5C3 13.9647 3 14.197 3.03843 14.3902C3.19624 15.1836 3.81644 15.8038 4.60982 15.9616C4.80302 16 5.03534 16 5.5 16H18.5C18.9647 16 19.197 16 19.3902 15.9616C20.1836 15.8038 20.8038 15.1836 20.9616 14.3902C21 14.197 21 13.9647 21 13.5C21 13.0353 21 12.803 20.9616 12.6098C20.8038 11.8164 20.1836 11.1962 19.3902 11.0384C19.197 11 18.9647 11 18.5 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '21px 13.5px' }" />
            <motion.path d="M12 19V21M5 21H19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M6.05039 5.49844H6.00039M6.10039 5.49844C6.10039 5.55367 6.05562 5.59844 6.00039 5.59844C5.94516 5.59844 5.90039 5.55367 5.90039 5.49844C5.90039 5.44321 5.94516 5.39844 6.00039 5.39844C6.05562 5.39844 6.10039 5.44321 6.10039 5.49844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 5.5px' }" />
            <motion.path d="M9.05039 5.49844H9.00039M9.10039 5.49844C9.10039 5.55367 9.05562 5.59844 9.00039 5.59844C8.94516 5.59844 8.90039 5.55367 8.90039 5.49844C8.90039 5.44321 8.94516 5.39844 9.00039 5.39844C9.05562 5.39844 9.10039 5.44321 9.10039 5.49844Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 5.5px' }" />
            <motion.path d="M6.05039 13.4984H6.00039M6.10039 13.4984C6.10039 13.5537 6.05562 13.5984 6.00039 13.5984C5.94516 13.5984 5.90039 13.5537 5.90039 13.4984C5.90039 13.4432 5.94516 13.3984 6.00039 13.3984C6.05562 13.3984 6.10039 13.4432 6.10039 13.4984Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 13.5px' }" />
            <motion.path d="M9.05039 13.4984H9.00039M9.10039 13.4984C9.10039 13.5537 9.05562 13.5984 9.00039 13.5984C8.94516 13.5984 8.90039 13.5537 8.90039 13.4984C8.90039 13.4432 8.94516 13.3984 9.00039 13.3984C9.05562 13.3984 9.10039 13.4432 9.10039 13.4984Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 13.5px' }" />
          </svg>
        </div>
</template>
