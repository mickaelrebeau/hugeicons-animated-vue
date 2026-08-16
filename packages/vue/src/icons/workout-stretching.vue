<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'WorkoutStretchingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after thumbs-up: the load dips, drives up, and comes back under control
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.15px) scaleY(0.94)', 'translateY(-2.92px) scaleY(1.04)', 'translateY(-2.51px) scaleY(1)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.83,
      times: [0, 0.18, 0.5, 0.68, 1],
      ease: [0.23, 1, 0.32, 1],
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
            <motion.path d="M16 5.5C16 6.32843 15.3284 7 14.5 7C13.6716 7 13 6.32843 13 5.5C13 4.67157 13.6716 4 14.5 4C15.3284 4 16 4.67157 16 5.5Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M14.3602 15L15.3039 14.454C16.3786 13.8323 16.9159 13.5214 16.9885 13.0784C16.9999 13.0092 17.0028 12.9391 16.9973 12.8694C16.9622 12.4229 16.4524 12.0789 15.4329 11.3907L10.7259 8.21359C8.87718 6.96577 8.45184 4.69114 9.75097 3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M10.7259 8.21359C8.22588 10.7136 7 17.6324 7 21.0003M10.7259 8.21359C8.87718 6.96577 8.45184 4.69114 9.75097 3M10.7259 8.21359L13.3725 10M14.3602 15L15.3039 14.454C16.3786 13.8323 16.9159 13.5214 16.9885 13.0784C16.9999 13.0092 17.0028 12.9391 16.9973 12.8694C16.9622 12.4229 16.4524 12.0789 15.4329 11.3907L13.3725 10M15.0002 21.0003C14.0268 19.8647 13.0257 18.3 12.0502 16.8578C11.3666 15.8474 11.0249 15.3422 10.9845 14.8132M13.3725 10C12.5697 11.0391 12.0164 12.0207 11.6026 12.8942C11.1636 13.8209 10.9441 14.2843 10.9845 14.8132M10.9845 14.8132L8 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
