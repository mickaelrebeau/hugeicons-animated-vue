<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FastForwardIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the fast forward separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.85px) rotate(-1.06deg)', 'translateY(0.48px) rotate(0.53deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.49px, -1.27px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M12 16.0351V7.9649C12 6.0377 12 5.0741 12.5918 4.80895C13.1837 4.54379 13.9003 5.18631 15.3336 6.47136L19.8342 10.5065C20.6116 11.2035 21.0003 11.552 21.0003 12C21.0003 12.448 20.6116 12.7965 19.8342 13.4935L15.3336 17.5286C13.9003 18.8137 13.1837 19.4562 12.5918 19.1911C12 18.9259 12 17.9623 12 16.0351Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
            <motion.path d="M3 16.0351V7.9649C3 6.0377 3 5.0741 3.59183 4.80895C4.18366 4.54379 4.9003 5.18631 6.33359 6.47136L10.8342 10.5065C11.6116 11.2035 12.0003 11.552 12.0003 12C12.0003 12.448 11.6116 12.7965 10.8342 13.4935L6.33359 17.5286C4.9003 18.8137 4.18366 19.4562 3.59183 19.1911C3 18.9259 3 17.9623 3 16.0351Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
          </svg>
        </div>
</template>
