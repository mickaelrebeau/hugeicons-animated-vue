<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiComputerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the intelligence points answer one another instead of pulsing as a single badge
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.55px) scale(1.2)', 'translateY(0.36px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.42, ease: 'easeOut', delay: i * 0.08 },
  }),
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
            <motion.path d="M10.014 2C6.23617 2 4.34725 2 3.17362 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17362 16.8284C4.34725 18 6.23617 18 10.014 18H14.021C17.7989 18 19.6878 18 20.8614 16.8284C21.671 16.0203 21.9221 14.8723 22 13" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M12 18V22" stroke="currentColor" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 20px' }" />
            <motion.path d="M8 22H16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M11 15H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 15px' }" />
            <motion.path d="M18 4H16C15.0572 4 14.5858 4 14.2929 4.29289C14 4.58579 14 5.05719 14 6V8C14 8.94281 14 9.41421 14.2929 9.70711C14.5858 10 15.0572 10 16 10H18C18.9428 10 19.4142 10 19.7071 9.70711C20 9.41421 20 8.94281 20 8V6C20 5.05719 20 4.58579 19.7071 4.29289C19.4142 4 18.9428 4 18 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 7px' }" />
            <motion.path d="M15.5 10V12M18.5 10V12M15.5 2V4M18.5 2V4M14 5.5H12M14 8.5H12M22 5.5H20M22 8.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 7px' }" />
          </svg>
        </div>
</template>
