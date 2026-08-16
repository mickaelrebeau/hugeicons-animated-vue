<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiBrowserIcon' })

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
            <motion.path d="M18.4737 15.5215C18.4795 15.4928 18.5205 15.4928 18.5263 15.5215C18.8302 17.0081 19.9919 18.1698 21.4785 18.4737C21.5072 18.4795 21.5072 18.5205 21.4785 18.5263C19.9919 18.8302 18.8302 19.9919 18.5263 21.4785C18.5205 21.5072 18.4795 21.5072 18.4737 21.4785C18.1698 19.9919 17.0081 18.8302 15.5215 18.5263C15.4928 18.5205 15.4928 18.4795 15.5215 18.4737C17.0081 18.1698 18.1698 17.0081 18.4737 15.5215Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 18.5px' }" />
            <motion.path d="M3 7.5H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 7.5px' }" />
            <motion.path d="M12.5 20.5H10.5C6.72876 20.5 4.84315 20.5 3.67157 19.3284C2.5 18.1569 2.5 16.2712 2.5 12.5V10.5C2.5 6.72876 2.5 4.84315 3.67157 3.67157C4.84315 2.5 6.72876 2.5 10.5 2.5H12.5C16.2712 2.5 18.1569 2.5 19.3284 3.67157C20.5 4.84315 20.5 6.72876 20.5 10.5V12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 11.5px' }" />
          </svg>
        </div>
</template>
