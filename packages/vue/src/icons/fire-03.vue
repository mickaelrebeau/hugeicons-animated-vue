<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Fire03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after fire: the flame leans, splits, and recovers from its base
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'scale(1) rotate(0deg)',
  },
  animate: {
    transform: ['scale(1) rotate(0deg)', 'scale(1.08) rotate(-3.27deg)', 'scale(0.96) rotate(2.18deg)', 'scale(1.04) rotate(-1.09deg)', 'scale(1) rotate(0deg)'],
    transition: {
      duration: 0.59,
      ease: [0.77, 0, 0.175, 1],
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.path d="M12 21.5008C16.4183 21.5008 20 17.9191 20 13.5008C20 10.5397 18.3912 6.60684 16 4.33478L14 6.99915L10.5 2.49915C7 4.99915 4 9.59526 4 13.5008C4 17.9191 7.58172 21.5008 12 21.5008Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M12 18.4991C14.2091 18.4991 16 16.4844 16 13.9991C16 13.2081 15.8186 12.4648 15.5 11.8189L13.5 13.4991L10.5 9.49811C9.5 10.4981 8 12.1106 8 13.9991C8 16.4844 9.79086 18.4991 12 18.4991Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
          </svg>
        </div>
</template>
