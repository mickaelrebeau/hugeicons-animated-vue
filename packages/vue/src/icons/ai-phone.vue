<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiPhoneIcon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.54px) scale(1.2)', 'translateY(0.36px) scale(0.95)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M18 11.5V15C18 18.2998 18 19.9497 16.9749 20.9749C15.9497 22 14.2998 22 11 22C7.70017 22 6.05025 22 5.02513 20.9749C4 19.9497 4 18.2998 4 15V9C4 5.70017 4 4.05025 5.02513 3.02513C6.05025 2 7.70017 2 11 2C11.7473 2 11.41 2 12 2.01191" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M11.125 18.75H11M11.25 18.75C11.25 18.8881 11.1381 19 11 19C10.8619 19 10.75 18.8881 10.75 18.75C10.75 18.6119 10.8619 18.5 11 18.5C11.1381 18.5 11.25 18.6119 11.25 18.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18.75px' }" />
            <motion.path d="M16.9737 2.02148C16.9795 1.99284 17.0205 1.99284 17.0263 2.02148C17.3302 3.50808 18.4919 4.66984 19.9785 4.97368C20.0072 4.97954 20.0072 5.02046 19.9785 5.02632C18.4919 5.33016 17.3302 6.49192 17.0263 7.97852C17.0205 8.00716 16.9795 8.00716 16.9737 7.97852C16.6698 6.49192 15.5081 5.33016 14.0215 5.02632C13.9928 5.02046 13.9928 4.97954 14.0215 4.97368C15.5081 4.66984 16.6698 3.50808 16.9737 2.02148Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '17px 5px' }" />
          </svg>
        </div>
</template>
