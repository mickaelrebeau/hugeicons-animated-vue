<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DumbbellIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the load dips, drives up, and comes back under control
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.04px) scaleY(0.94)', 'translateY(-2.65px) scaleY(1.04)', 'translateY(-2.27px) scaleY(1)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.77,
      times: [0, 0.18, 0.5, 0.68, 1],
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
            <motion.path d="M7.73438 13.7323C7.73438 13.7323 8.63984 12.5102 9.23438 12.2319C11.0292 11.3915 11.3943 11.0263 12.2344 9.23091C12.5127 8.63618 13.7344 7.73044 13.7344 7.73044M10.2344 16.2331C10.2344 16.2331 11.4561 15.3273 11.7344 14.7326C12.5745 12.9373 12.9396 12.5721 14.7344 11.7317C15.3289 11.4533 16.2344 10.2312 16.2344 10.2312" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.07px 23.16px' }" />
            <motion.path d="M14.4311 2.89207C14.938 2.38343 15.7611 2.38212 16.2696 2.88916L21.0814 7.68726C21.5899 8.1943 21.5912 9.01767 21.0843 9.52632L19.5557 11.0603C19.0488 11.5689 18.2257 11.5702 17.7172 11.0632L12.9054 6.26507C12.397 5.75803 12.3957 4.93466 12.9025 4.42601L14.4311 2.89207Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.07px 23.16px' }" />
            <motion.path d="M4.41377 12.9022C4.92065 12.3936 5.74376 12.3923 6.25225 12.8993L11.0641 17.6974C11.5725 18.2045 11.5738 19.0278 11.067 19.5365L9.53836 21.0704C9.03148 21.5791 8.20837 21.5804 7.69988 21.0733L2.88808 16.2752C2.37959 15.7682 2.37829 14.9448 2.88517 14.4362L4.41377 12.9022Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.07px 23.16px' }" />
            <motion.path d="M17.9377 3.45254C19.8201 0.985467 23.14 3.8401 20.5431 6.02872M3.37811 17.9773C0.998473 19.9687 3.99782 23.1586 6.06742 20.4657" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.07px 23.16px' }" />
          </svg>
        </div>
</template>
