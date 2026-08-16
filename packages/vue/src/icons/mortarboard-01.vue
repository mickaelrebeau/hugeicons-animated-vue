<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Mortarboard01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the mortarboard separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.77px) rotate(-0.96deg)', 'translateY(0.43px) rotate(0.48deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.34px, -1.15px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M1.99805 7.99928C1.99805 9.34126 10.0943 13 11.9857 13C13.8772 13 21.9734 9.34126 21.9734 7.99928C21.9734 6.6573 13.8772 2.99854 11.9857 2.99854C10.0943 2.99854 1.99805 6.6573 1.99805 7.99928Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.99px 8px' }" />
            <motion.path d="M5.99219 11L7.24348 16.8002C7.32919 17.1975 7.52703 17.5687 7.85696 17.8054C10.0787 19.3998 13.8908 19.3998 16.1126 17.8054C16.4426 17.5687 16.6404 17.1975 16.7261 16.8002L17.9774 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.98px 15.2px' }" />
            <motion.path d="M20.4774 9.49951V16.5006M20.4774 16.5006C19.6864 17.9471 19.3366 18.7221 18.9813 20.0011C18.9042 20.4562 18.9654 20.6855 19.2786 20.8891C19.4059 20.9718 19.5588 21.0012 19.7104 21.0012H21.229C21.3904 21.0012 21.5533 20.9675 21.6863 20.8757C21.9774 20.6747 22.0523 20.4541 21.9734 20.0011C21.662 18.8135 21.2653 18.0016 20.4774 16.5006Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '20.48px 15.25px' }" />
          </svg>
        </div>
</template>
