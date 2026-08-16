<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiBrain05Icon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.63px) scale(1.2)', 'translateY(0.38px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.44, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M7.5 4.50012C5.84315 4.50012 4.5 5.84327 4.5 7.50012C4.5 8.06878 4.65822 8.60049 4.93304 9.05362C3.54727 9.31868 2.5 10.5371 2.5 12.0001C2.5 13.4631 3.54727 14.6816 4.93304 14.9466M7.5 4.50012C7.5 3.11941 8.61929 2.00012 10 2.00012C11.3807 2.00012 12.5 3.11941 12.5 4.50012V6.00012M7.5 4.50012C7.5 5.31803 7.89278 6.0442 8.5 6.50031M4.93304 14.9466C4.65822 15.3998 4.5 15.9315 4.5 16.5001C4.5 18.157 5.84315 19.5001 7.5 19.5001C7.5 20.8808 8.61929 22.0001 10 22.0001C11.3807 22.0001 12.5 20.8808 12.5 19.5001V18.0001M4.93304 14.9466C5.28948 14.3589 5.84207 13.9034 6.5 13.6708" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 12px' }" />
            <motion.path d="M17.5 9H15.5C14.5572 9 14.0858 9 13.7929 9.29289C13.5 9.58579 13.5 10.0572 13.5 11V13C13.5 13.9428 13.5 14.4142 13.7929 14.7071C14.0858 15 14.5572 15 15.5 15H17.5C18.4428 15 18.9142 15 19.2071 14.7071C19.5 14.4142 19.5 13.9428 19.5 13V11C19.5 10.0572 19.5 9.58579 19.2071 9.29289C18.9142 9 18.4428 9 17.5 9Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
            <motion.path d="M15 15V17M18 15V17M15 7V9M18 7V9M13.5 10.5H11.5M13.5 13.5H11.5M21.5 10.5H19.5M21.5 13.5H19.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 12px' }" />
          </svg>
        </div>
</template>
