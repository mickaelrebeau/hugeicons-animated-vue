<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ChatUnlock01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after square-lock-01: the shackle swings open on its hinge, hangs, then clicks shut
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-1.07deg) scale(0.985)', 'rotate(1.5deg) scale(1.018)', 'rotate(-0.37deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.74,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const shackleVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-17.58deg)', 'rotate(-15.63deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.79,
      ease: [0.77, 0, 0.175, 1],
    },
  },
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
  loops: false,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M22 12.5C21.9941 12.7527 21.9696 13.0027 21.9609 13.2497C21.8772 15.6232 21.8353 16.8099 20.8699 17.7826C19.9046 18.7552 18.6843 18.8074 16.2437 18.9118C15.5098 18.9432 14.7498 18.9667 13.9693 18.9815C13.2282 18.9955 12.8576 19.0026 12.532 19.1266C12.2064 19.2506 11.9325 19.4855 11.3845 19.9553L9.20503 21.8242C9.07273 21.9376 8.90419 22 8.72991 22C8.32679 22 8 21.6732 8 21.2701V18.9219C7.91842 18.9186 7.83715 18.9153 7.75619 18.9118C5.31569 18.8074 4.09545 18.7552 3.13007 17.7825C2.16469 16.8099 2.12282 15.6232 2.03909 13.2497C2.01346 12.5232 2 11.7708 2 11C2 10.2292 2.01346 9.47679 2.03909 8.7503C2.12282 6.37683 2.16469 5.19009 3.13007 4.21745C4.09545 3.24481 5.3157 3.1926 7.7562 3.08819C9.09517 3.0309 10.5209 3 12 3C12.5067 3 13.0072 3.00363 13.5 3.0107" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M17.5 5V3.5C17.5 2.67157 18.1716 2 19 2C19.5552 2 20.0399 2.30159 20.2993 2.74988M17.5 5H20.5C21.3284 5 22 5.67157 22 6.5V8C22 8.82843 21.3284 9.5 20.5 9.5H17.5C16.6716 9.5 16 8.82843 16 8V6.5C16 5.67157 16.6716 5 17.5 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="shackleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 5.75px' }" />
            <motion.path d="M12.1257 11H12.0007M8.125 11H8M12.2507 11C12.2507 11.1381 12.1388 11.25 12.0007 11.25C11.8627 11.25 11.7507 11.1381 11.7507 11C11.7507 10.8619 11.8627 10.75 12.0007 10.75C12.1388 10.75 12.2507 10.8619 12.2507 11ZM8.25 11C8.25 11.1381 8.13807 11.25 8 11.25C7.86193 11.25 7.75 11.1381 7.75 11C7.75 10.8619 7.86193 10.75 8 10.75C8.13807 10.75 8.25 10.8619 8.25 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
