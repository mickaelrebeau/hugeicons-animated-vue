<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoreHorizontalSquare01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after more-horizontal: the dots lift in sequence from their own centers
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
            <motion.path d="M12 11.5V12M18 12V11.5M6 11.5V12M12.5 11L11.5 11C11.2239 11 11 11.2239 11 11.5V12.5C11 12.7761 11.2239 13 11.5 13H12.5C12.7761 13 13 12.7761 13 12.5V11.5C13 11.2239 12.7761 11 12.5 11ZM18.5 11L17.5 11C17.2239 11 17 11.2239 17 11.5V12.5C17 12.7761 17.2239 13 17.5 13H18.5C18.7761 13 19 12.7761 19 12.5V11.5C19 11.2239 18.7761 11 18.5 11ZM6.50001 11L5.50001 11C5.22386 11 5 11.2239 5 11.5V12.5C5 12.7761 5.22386 13 5.5 13H6.5C6.77614 13 7 12.7761 7 12.5V11.5C7 11.2239 6.77615 11 6.50001 11Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
