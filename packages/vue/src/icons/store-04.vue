<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Store04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the storefront opens from its awning and settles on its foundation
// generated from @hugeicons/core-free-icons
const markVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: ['hidden', 'visible'],
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      delay: 0.2,
    },
  },
}

const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px)',
  },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.95px)', 'translateY(0px)'],
    transition: {
      duration: 0.48,
      ease: 'easeInOut',
      times: [0, 0.35, 1],
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
            <motion.path d="M3.00006 10.9866V15.4932C3.00006 18.3257 3.00006 19.742 3.87874 20.622C4.75742 21.502 6.17163 21.502 9.00006 21.502H15.0001C17.8285 21.502 19.2427 21.502 20.1214 20.622C21.0001 19.742 21.0001 18.3257 21.0001 15.4932V10.9866" stroke="currentColor" stroke-width="1.5" :variants="markVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '3px 16.24px' }" />
            <motion.path d="M7.00006 17.9741H11.0001" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.09px 12.41px' }" />
            <motion.path d="M17.7957 2.50049L6.14989 2.52954C4.41172 2.44011 3.96606 3.77859 3.96606 4.4329C3.96606 5.01809 3.89061 5.8712 2.8253 7.47462C1.75999 9.07804 1.84004 9.55437 2.44077 10.6644C2.93934 11.5857 4.20747 11.9455 4.86868 12.0061C6.96889 12.0538 7.99072 10.2398 7.99072 8.96495C9.03257 12.1683 11.9956 12.1683 13.3159 11.802C14.6386 11.435 15.7718 10.1214 16.0391 8.96495C16.1951 10.4021 16.6682 11.2408 18.0663 11.817C19.5145 12.4139 20.76 11.5016 21.3848 10.9168C22.0097 10.332 22.4107 9.03364 21.2968 7.60666C20.5286 6.62257 20.2085 5.69548 20.1033 4.73462C20.0424 4.17787 19.9888 3.57961 19.5972 3.1989C19.0248 2.64253 18.2036 2.47372 17.7957 2.50049Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.09px 12.41px' }" />
          </svg>
        </div>
</template>
