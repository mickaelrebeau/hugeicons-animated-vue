<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DessertIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the arcs of the dessert propagate outward from their geometric source
// generated from @hugeicons/core-free-icons
const sourceVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.83px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.96, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.62px) rotate(-1.9deg)', 'translateY(0.38px) rotate(0.67deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.circle cx="11" cy="6.00195" r="2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="sourceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6px' }" />
            <motion.path d="M11 18.002C6.02944 18.002 2 16.2111 2 14.002C2 13.2734 2.43827 12.5903 3.20404 12.002M16.9531 17.002C16.0977 17.3375 15.0977 17.6019 14 17.7743" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6px' }" />
            <motion.path d="M19.9304 17.502C19.9763 17.6658 20 17.8326 20 18.002C20 20.2111 15.9706 22.002 11 22.002C6.02944 22.002 2 20.2111 2 18.002C2 17.2734 2.43827 16.5903 3.20404 16.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 6px' }" />
            <motion.path d="M13 6.10156C17.008 6.50577 20 9.00293 20 12.0029V16.5024C20 17.3309 19.3284 18.0024 18.5 18.0024C17.6716 18.0024 17 17.3309 17 16.5024V15.0024C17 14.174 16.3284 13.5024 15.5 13.5024C14.6716 13.5024 14 14.174 14 15.0024V17.5024C14 18.3309 13.3284 19.0024 12.5 19.0024C11.6716 19.0024 11 18.3309 11 17.5024V16.5024C11 15.9978 11 15.7454 10.9675 15.5674C10.8224 14.7717 10.3766 14.2653 9.60572 14.0203C9.43328 13.9655 9.12404 13.9259 8.50557 13.8468C4.74843 13.3661 2 11.8269 2 10.0024C2 8.09881 4.99202 6.50577 9 6.10156" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 2.00195C11.6667 2.16862 11 2.80195 11 4.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
