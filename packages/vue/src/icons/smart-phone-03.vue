<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SmartPhone03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after sparkles: the smart accents answer one another around the primary object
// generated from @hugeicons/core-free-icons
const dotVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0px) scale(1)', 'translateY(-1.53px) scale(1.2)', 'translateY(0.36px) scale(0.95)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M5.5 6C5.51447 4.29344 5.60926 3.35264 6.22992 2.73223C6.96244 2 8.14143 2 10.4994 2H13.5006C15.8586 2 17.0376 2 17.7701 2.73223C18.3907 3.35264 18.4855 4.29344 18.5 6M18.5 18.0001C18.4855 19.7066 18.3907 20.6474 17.7701 21.2678C17.0376 22 15.8586 22 13.5006 22H10.4994C8.14143 22 6.96244 22 6.22992 21.2678C5.60926 20.6474 5.51447 19.7066 5.5 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M19.5 8.5C19.5 8.5 18.5 8.846 18.5 9.8125C18.5 10.779 19.5 11.0335 19.5 12C19.5 12.9665 18.5 13.221 18.5 14.1875C18.5 15.154 19.5 15.5 19.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="3" :animate="controls" initial="normal" :style="{ transformOrigin: '19px 12px' }" />
            <motion.path d="M4.5 8.5C4.5 8.5 5.5 8.846 5.5 9.8125C5.5 10.779 4.5 11.0335 4.5 12C4.5 12.9665 5.5 13.221 5.5 14.1875C5.5 15.154 4.5 15.5 4.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 12px' }" />
            <motion.path d="M14 2H10L10.5 3H13.5L14 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 2.5px' }" />
          </svg>
        </div>
</template>
