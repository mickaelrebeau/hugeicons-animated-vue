<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MoreVerticalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const dotVariants: Variants = {
  normal: { translateX: 0, scale: 1 },
  animate: (i: number) => ({
    translateX: [0, 1.5, -0.35, 0],
    scale: [1, 1.2, 0.95, 1],
    transition: { duration: 0.42, ease: 'easeOut', delay: i * 0.08 },
  }),
};

const DOT_CENTERS = [6, 12, 18];

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: false,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" v-bind="$attrs" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
      <motion.circle
        v-for="(cy, index) in DOT_CENTERS"
        :key="cy"
        cx="12"
        :cy="cy"
        r="1.25"
        fill="currentColor"
        :variants="dotVariants"
        :custom="index"
        :animate="controls"
        initial="normal"
        :style="{ transformOrigin: `12px ${cy}px` }"
      />
    </svg>
  </div>
</template>
