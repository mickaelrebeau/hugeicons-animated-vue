<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MenuRestaurantIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after menu-01: the menu rows scan downward without losing their shared rail
// generated from @hugeicons/core-free-icons
const rowVariants: Variants = {
  normal: {
    transform: 'scaleX(1)',
  },
  animate: (i: number) => ({
    transform: ['scaleX(1)', 'scaleX(0.68)', 'scaleX(1.04)', 'scaleX(0.98)', 'scaleX(1)'],
    transition: { duration: 0.46, ease: [0.77, 0, 0.175, 1], times: [0, 0.28, 0.56, 0.76, 1], delay: i * 0.06 },
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
            <motion.path d="M20 17.9998V9.99976C20 8.11414 20 7.17133 19.4142 6.58554C18.8284 5.99976 17.8856 5.99976 16 5.99976H4V17.9998C4 19.8854 4 20.8282 4.58579 21.414C5.17157 21.9998 6.11438 21.9998 8 21.9998H16C17.8856 21.9998 18.8284 21.9998 19.4142 21.414C20 20.8282 20 19.8854 20 17.9998Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 14px' }" />
            <motion.path d="M12 10.9998C13.6569 10.9998 15 12.3429 15 13.9998M12 10.9998C10.3431 10.9998 9 12.3429 9 13.9998M12 10.9998V9.99976M15 13.9998H9M15 13.9998H16M9 13.9998H8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
            <motion.path d="M8 17.9998H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 18px' }" />
            <motion.path d="M4 5.99976L11.3846 2.90562C13.0337 2.21467 13.8582 1.8692 14.5149 2.04518C14.9408 2.1593 15.3173 2.41168 15.5859 2.76312C16 3.30508 16 4.2033 16 5.99976" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="rowVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '4px 3.93px' }" />
          </svg>
        </div>
</template>
