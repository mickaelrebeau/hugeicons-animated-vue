<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CircleFadingArrowUpIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-up-02: the mark commits upward along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleX(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleX(1)', 'translateY(-2.83px) scaleX(0.94)', 'translateY(0.33px) scaleX(1.02)', 'translateY(-0.49px) scaleX(0.99)', 'translateY(0px) scaleX(1)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M5.43823 19.5496C6.54888 20.5162 7.89133 21.2512 9.40963 21.6576C10.2751 21.8893 11.1446 22 12 22M16.5374 20.906C17.6966 20.3145 18.7389 19.4992 19.5953 18.5M21.6561 14.5847C21.9352 13.5441 22.0395 12.4978 21.9868 11.4771M20.9103 7.46053C20.699 7.04586 20.4591 6.64615 20.1924 6.26456M16.4698 3.05251C15.8798 2.7588 15.2517 2.51942 14.5904 2.34238C9.25745 0.914877 3.77452 4.08152 2.3439 9.41528C1.78336 11.5051 1.92809 13.6176 2.63227 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 9V16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 12C16 12 13.054 8.00001 12 8C10.9459 7.99999 8 12 8 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
