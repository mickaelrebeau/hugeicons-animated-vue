<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiVoiceGeneratorIcon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.59px) scale(1.2)', 'translateY(0.37px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.43, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M17.4069 13.4036C17.6192 12.8655 18.3808 12.8655 18.5931 13.4036L18.6298 13.4969C19.1482 14.8113 20.1887 15.8518 21.5031 16.3702L21.5964 16.4069C22.1345 16.6192 22.1345 17.3808 21.5964 17.5931L21.5031 17.6298C20.1887 18.1482 19.1482 19.1887 18.6298 20.5031L18.5931 20.5964C18.3808 21.1345 17.6192 21.1345 17.4069 20.5964L17.3702 20.5031C16.8518 19.1887 15.8113 18.1482 14.4969 17.6298L14.4036 17.5931C13.8655 17.3808 13.8655 16.6192 14.4036 16.4069L14.4969 16.3702C15.8113 15.8518 16.8518 14.8113 17.3702 13.4969L17.4069 13.4036Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="6" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 17px' }" />
            <motion.path d="M22 11V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9C2 11.8284 2 13.2426 2.87868 14.1213C3.75736 15 5.17157 15 8 15H11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M6 8V10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '6px 9px' }" />
            <motion.path d="M15 7V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="4" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 9px' }" />
            <motion.path d="M12 8.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 9px' }" />
            <motion.path d="M18 8.5V9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="5" :animate="controls" initial="normal" :style="{ transformOrigin: '18px 9px' }" />
            <motion.path d="M9 7V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '9px 9px' }" />
          </svg>
        </div>
</template>
