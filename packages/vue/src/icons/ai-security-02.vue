<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiSecurity02Icon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.51px) scale(1.2)', 'translateY(0.35px) scale(0.95)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.41, ease: 'easeOut', delay: i * 0.08 },
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
            <motion.path d="M7.5 14.5L9.34189 8.97434C9.43631 8.69107 9.7014 8.5 10 8.5C10.2986 8.5 10.5637 8.69107 10.6581 8.97434L12.5 14.5M15.5 8.5V14.5M8.5 12.5H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 11.5px' }" />
            <motion.path d="M21 11.1832V8.28014C21 6.64013 21 5.82013 20.5959 5.28514C20.1918 4.75014 19.2781 4.49041 17.4507 3.97095C16.2022 3.61604 15.1016 3.18848 14.2223 2.79814C13.0234 2.26594 12.424 1.99985 12 1.99985C11.576 1.99985 10.9766 2.26594 9.77771 2.79814C8.89839 3.18847 7.79784 3.61604 6.54933 3.97095C4.72193 4.49041 3.80822 4.75014 3.40411 5.28514C3 5.82013 3 6.64013 3 8.28014V11.1832C3 16.8083 8.06277 20.1834 10.594 21.5192C11.2011 21.8396 11.5046 21.9998 12 21.9998C12.4954 21.9998 12.7989 21.8396 13.406 21.5192C15.9372 20.1834 21 16.8083 21 11.1832Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
