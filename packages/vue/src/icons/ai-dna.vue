<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiDnaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after refresh: the strands rotate around the shared axis
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scaleX(1)',
  },
  animate: {
    transform: ['rotate(0deg) scaleX(1)', 'rotate(5.85deg) scaleX(0.82)', 'rotate(-4.88deg) scaleX(0.9)', 'rotate(0deg) scaleX(1)'],
    transition: {
      duration: 0.89,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M7.49114 14.0015C3.00094 11.6015 3.00094 10.4015 3.00094 10.0015C3.00094 9.60146 3.00094 8.40146 7.49114 6.00146M7.49114 14.0015C3.00094 16.4015 3.00006 17.2015 3.00006 18.0015M7.49114 14.0015C11.9804 11.602 11.9804 10.402 11.9804 10.0017C11.9804 9.60147 11.9804 8.40099 7.49114 6.00146M7.49114 6.00146C11.9813 3.60146 11.9813 2.80146 11.9813 2.00146M7.49114 6.00146L5.30787 4.74576C3.00063 3.28295 3.00006 2.64221 3.00006 2.00146" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.4119 12.0005V13.9795M10.9249 15.5009H12.9768M18.9479 15.5009H20.9999M18.9479 18.4741H20.9999M10.9249 18.4741H12.9768M14.4119 20.0197V21.9987M17.4373 20.0197V21.9987M17.4266 12.0005V13.9795M13.9768 19.968H17.9479C18.5002 19.968 18.9479 19.5203 18.9479 18.968V14.9795C18.9479 14.4272 18.5002 13.9795 17.9479 13.9795H13.9768C13.4246 13.9795 12.9768 14.4272 12.9768 14.9795V18.968C12.9768 19.5203 13.4246 19.968 13.9768 19.968Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
