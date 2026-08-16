<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoreVerticalSquareIcon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.41px) scale(1.2)', 'translateY(0.33px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.39, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M12 11.5V12M12 5.49999V5.99999M12 17.5V18M12.5 11L11.5 11C11.2239 11 11 11.2239 11 11.5V12.5C11 12.7761 11.2239 13 11.5 13H12.5C12.7761 13 13 12.7761 13 12.5V11.5C13 11.2239 12.7761 11 12.5 11ZM12.5 5.00001L11.5 5C11.2239 5 11 5.22386 11 5.5V6.49999C11 6.77614 11.2239 6.99999 11.5 6.99999H12.5C12.7761 6.99999 13 6.77614 13 6.49999V5.50001C13 5.22387 12.7761 5.00001 12.5 5.00001ZM12.5 17L11.5 17C11.2239 17 11 17.2239 11 17.5V18.5C11 18.7761 11.2239 19 11.5 19H12.5C12.7761 19 13 18.7761 13 18.5V17.5C13 17.2239 12.7761 17 12.5 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
