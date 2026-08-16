<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoreVerticalSquare02Icon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.62px) scale(1.2)', 'translateY(0.38px) scale(0.95)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M2.48438 12C2.48438 7.52166 2.48438 5.28249 3.87562 3.89124C5.26686 2.5 7.50603 2.5 11.9844 2.5C16.4627 2.5 18.7019 2.5 20.0931 3.89124C21.4844 5.28249 21.4844 7.52166 21.4844 12C21.4844 16.4783 21.4844 18.7175 20.0931 20.1088C18.7019 21.5 16.4627 21.5 11.9844 21.5C7.50603 21.5 5.26686 21.5 3.87562 20.1088C2.48438 18.7175 2.48438 16.4783 2.48438 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.98px 12px' }" />
            <motion.path d="M11.9844 11.75V12M11.9844 6.75V7M11.9844 16.75V17M11.9844 11.5C12.2605 11.5 12.4844 11.7239 12.4844 12C12.4844 12.2761 12.2605 12.5 11.9844 12.5C11.7082 12.5 11.4844 12.2761 11.4844 12C11.4844 11.7239 11.7082 11.5 11.9844 11.5ZM11.9844 6.5C12.2605 6.5 12.4844 6.72386 12.4844 7C12.4844 7.27614 12.2605 7.5 11.9844 7.5C11.7082 7.5 11.4844 7.27614 11.4844 7C11.4844 6.72386 11.7082 6.5 11.9844 6.5ZM11.9844 16.5C12.2605 16.5 12.4844 16.7239 12.4844 17C12.4844 17.2761 12.2605 17.5 11.9844 17.5C11.7082 17.5 11.4844 17.2761 11.4844 17C11.4844 16.7239 11.7082 16.5 11.9844 16.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11.98px 12px' }" />
          </svg>
        </div>
</template>
