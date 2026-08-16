<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CssThreeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-right-02: the css three follows the right direction already encoded by its geometry
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.53px) scaleY(0.94)', 'translateX(-0.29px) scaleY(1.02)', 'translateX(0.44px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.48,
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
            <motion.path d="M19.75 2.50024H4.75C4.19772 2.50024 3.75 2.94796 3.75 3.50024L5.60753 17.8961C5.69611 18.5826 6.13335 19.1745 6.76348 19.4609L10.7598 21.2774C11.0829 21.4243 11.4336 21.5002 11.7884 21.5002C12.0935 21.5002 12.396 21.4441 12.6808 21.3346L17.637 19.4283C18.3227 19.1646 18.8086 18.5462 18.9026 17.8176L20.75 3.50024C20.75 2.94796 20.3023 2.50024 19.75 2.50024Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7.5 6.5H16.5L8 11H16L15.5 16L12 17L8.5 16L8.3 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
