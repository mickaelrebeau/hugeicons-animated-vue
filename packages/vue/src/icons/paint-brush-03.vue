<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PaintBrush03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after paint-brush-02: the tool lays down a stroke and collects it on return
// generated from @hugeicons/core-free-icons
const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-7.53deg) translate(-0.38px, 0.56px)', 'rotate(3.77deg) translate(0.28px, -0.28px)', 'rotate(0deg) translate(0px, 0px)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.8px) rotate(-1deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
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
            <motion.path d="M6 12C5.13023 12.7386 1.94713 14.5658 2.00054 15.9012C2.01513 16.2661 2.3205 16.5714 2.93122 17.1822L3.90287 18.1538M12 18C11.2614 18.8698 9.43417 22.0529 8.09878 21.9995C7.73393 21.9849 7.42856 21.6795 6.81784 21.0688L5.84618 20.0971M3.90287 18.1538L6.29464 15.762M3.90287 18.1538L5.84618 20.0971M5.84618 20.0971L7.04207 18.9012" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.97px 17.03px' }" />
            <motion.path d="M13.9389 18.481C13.6199 18.8243 13.4604 18.996 13.2454 18.9999C13.0304 19.0039 12.8585 18.8319 12.5146 18.4881L5.51186 11.4849C5.16804 11.1411 4.99612 10.9692 5.00007 10.7542C5.00401 10.5392 5.17563 10.3797 5.51887 10.0607C5.75113 9.84487 5.93925 9.69256 6.14283 9.56702C7.90764 8.47876 10.1485 9.5093 11.9332 8.49885C13.9897 7.33452 15.7947 5.18592 17.4986 3.25974C18.2273 2.43601 18.5916 2.02414 19.1056 2.00066C20.0323 1.95831 22.0415 3.97332 21.9993 4.89475C21.9758 5.40882 21.5638 5.77316 20.7398 6.50183C18.8135 8.20531 16.6647 10.01 15.5006 12.0664C14.4902 13.8513 15.5207 16.0922 14.4325 17.8571C14.307 18.0607 14.1547 18.2488 13.9389 18.481Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.52px 10.48px' }" />
          </svg>
        </div>
</template>
