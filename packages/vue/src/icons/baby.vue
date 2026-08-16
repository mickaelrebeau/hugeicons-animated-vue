<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BabyIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after user: the small head bobs while the body follows softly
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(0.89px)', 'translateY(0px)'],
    transition: {
      duration: 0.29,
      ease: 'easeOut',
      delay: 0.28,
    },
  },
}

const headVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(15.77deg)', 'rotate(-3.94deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: 'easeInOut',
      times: [0, 0.4, 0.7, 1],
    },
  },
}

const frameVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.96)', 'scale(1.025)', 'scale(1)'],
    transition: {
      duration: 0.47,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const personVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-1.62px) scale(1.03)', 'translateY(0.54px) scale(0.98)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M10 16C10.4561 16.6072 11.1822 17 12 17C12.8178 17 13.5439 16.6072 14 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16.5px' }" />
            <motion.path d="M15.625 11.258V11.611M8.375 11.258V11.611M8.75 11.5C8.75 11.2239 8.58211 11 8.375 11C8.16789 11 8 11.2239 8 11.5C8 11.7761 8.16789 12 8.375 12C8.58211 12 8.75 11.7761 8.75 11.5ZM16 11.5C16 11.2239 15.8321 11 15.625 11C15.4179 11 15.25 11.2239 15.25 11.5C15.25 11.7761 15.4179 12 15.625 12C15.8321 12 16 11.7761 16 11.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="headVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.1856 10.1728C2.48694 10.4846 2 11.1855 2 12C2 12.8145 2.48694 13.5154 3.1856 13.8272C4.02998 17.9217 7.6555 21 12 21C16.3445 21 19.97 17.9217 20.8144 13.8272C21.5131 13.5154 22 12.8145 22 12C22 11.1855 21.5131 10.4846 20.8144 10.1728C19.97 6.07831 16.3445 3 12 3C7.6555 3 4.02998 6.07831 3.1856 10.1728Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 3C14 3 15.5 4.26953 15.5 5.71181C15.5 6.64505 15.0282 8 13.5 8C12.6809 8 12.1578 7.39447 12 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="personVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.75px 5.5px' }" />
          </svg>
        </div>
</template>
