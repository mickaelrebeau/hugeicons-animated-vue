<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiMail02Icon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-1.49px) scale(1.2)', 'translateY(0.35px) scale(0.95)', 'translateY(0px) scale(1)'],
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
            <motion.path d="M2 5.5L8.91302 9.41697C11.4616 10.861 12.5384 10.861 15.087 9.41697L22 5.5" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.18px' }" />
            <motion.path d="M21.9842 12.9756C22.0053 11.9899 22.0053 11.0101 21.9842 10.0244C21.9189 6.95886 21.8862 5.42609 20.7551 4.29066C19.6239 3.15523 18.0497 3.11568 14.9012 3.03657C12.9607 2.98781 11.0393 2.98781 9.09882 3.03656C5.95033 3.11566 4.37608 3.15521 3.24495 4.29065C2.11382 5.42608 2.08114 6.95885 2.01576 10.0244C1.99474 11.0101 1.99475 11.9899 2.01577 12.9756C2.08114 16.0412 2.11383 17.5739 3.24496 18.7094C4.37608 19.8448 5.95033 19.8843 9.09883 19.9634C10.404 19.9962 11.7005 20.007 13 19.9957" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 11.5px' }" />
            <motion.path d="M18.5 14L18.7579 14.697C19.0961 15.611 19.2652 16.068 19.5986 16.4014C19.932 16.7348 20.389 16.9039 21.303 17.2421L22 17.5L21.303 17.7579C20.389 18.0961 19.932 18.2652 19.5986 18.5986C19.2652 18.932 19.0961 19.389 18.7579 20.303L18.5 21L18.2421 20.303C17.9039 19.389 17.7348 18.932 17.4014 18.5986C17.068 18.2652 16.611 18.0961 15.697 17.7579L15 17.5L15.697 17.2421C16.611 16.9039 17.068 16.7348 17.4014 16.4014C17.7348 16.068 17.9039 15.611 18.2421 14.697L18.5 14Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="dotVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17.5px' }" />
          </svg>
        </div>
</template>
