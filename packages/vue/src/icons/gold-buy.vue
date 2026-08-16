<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GoldBuyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the gold buy take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.67deg)', 'scale(1.1) rotate(1.87deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.49, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.69px) rotate(-1.99deg)', 'translateY(0.4px) rotate(0.7deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M20 13.8475C20.6814 13.0147 21.0166 12.3661 20.9994 11.6409C20.9706 10.432 19.9738 9.48267 17.9802 7.58405L16.0235 5.7206C14.119 3.90687 13.1668 3 12 3C10.8332 3 9.88095 3.90687 7.9765 5.7206L6.01983 7.58405C4.02623 9.48267 3.02944 10.432 3.00064 11.6409C2.97184 12.8497 3.9223 13.8454 5.82322 15.8368L7.77989 17.8866C9.76116 19.9622 10.7518 21 12 21C12.7074 21 13.3321 20.6667 14.1013 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 12px' }" />
            <motion.path d="M20.1016 14C20.7005 13.2683 21 12.6705 21 12C21 10.7919 20.0278 9.81971 18.0834 7.87531L16.1247 5.9166C14.1803 3.9722 13.2081 3 12 3C10.7919 3 9.81971 3.9722 7.87531 5.9166L5.9166 7.87531C3.9722 9.81971 3 10.7919 3 12C3 13.2081 3.9722 14.1803 5.9166 16.1247L7.87531 18.0834C9.81971 20.0278 10.7919 21 12 21C12.7074 21 13.3339 20.6667 14.1221 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19 21.5V17M21 20L20.5617 20.5769C19.841 21.5256 19.4806 22 19 22C18.5194 22 18.159 21.5256 17.4383 20.5769L17 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.circle cx="12" cy="12" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
