<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiPhone02Icon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.64px) scale(1.2)', 'translateY(0.38px) scale(0.95)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M19 15L19 9C19 5.70018 19 4.05025 17.9749 3.02513C16.9498 2 15.2998 2 12 2C8.70017 2 7.05025 2 6.02513 3.02513C5 4.05025 5 5.70017 5 9V15C5 18.2998 5 19.9497 6.02513 20.9749C7.05025 22 8.70017 22 12 22C15.2998 22 16.9497 22 17.9749 20.9749C19 19.9497 19 18.2998 19 15Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M11.9737 7.02148C11.9795 6.99284 12.0205 6.99284 12.0263 7.02148C12.3302 8.50808 13.4919 9.66984 14.9785 9.97368C15.0072 9.97954 15.0072 10.0205 14.9785 10.0263C13.4919 10.3302 12.3302 11.4919 12.0263 12.9785C12.0205 13.0072 11.9795 13.0072 11.9737 12.9785C11.6698 11.4919 10.5081 10.3302 9.02148 10.0263C8.99284 10.0205 8.99284 9.97954 9.02148 9.97368C10.5081 9.66984 11.6698 8.50808 11.9737 7.02148Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 10px' }" />
            <motion.path d="M12.125 18.75H12M12.25 18.75C12.25 18.8881 12.1381 19 12 19C11.8619 19 11.75 18.8881 11.75 18.75C11.75 18.6119 11.8619 18.5 12 18.5C12.1381 18.5 12.25 18.6119 12.25 18.75Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.75px' }" />
          </svg>
        </div>
</template>
