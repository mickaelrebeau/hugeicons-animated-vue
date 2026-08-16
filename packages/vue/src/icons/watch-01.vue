<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Watch01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after wifi-01: the arcs of the watch propagate outward from their geometric source
// generated from @hugeicons/core-free-icons
const sourceVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: {
    transform: ['scale(1)', 'scale(0.86)', 'scale(1.18)', 'scale(1)'],
    transition: {
      duration: 0.9,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const arcVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: (i: number) => ({
    transform: ['translateY(0.83px) scale(0.82)', 'translateY(0px) scale(1.06)', 'translateY(0px) scale(1)'],
    transition: { duration: 0.96, ease: [0.23, 1, 0.32, 1], delay: i * 0.12 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.62px) rotate(-1.91deg)', 'translateY(0.38px) rotate(0.67deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.53,
      ease: [0.23, 1, 0.32, 1],
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
            <motion.circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="1.5" :variants="sourceVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M16 6L15.7276 4.91043C15.3931 3.5724 15.2258 2.90339 14.7499 2.49004C14.6973 2.44433 14.6423 2.40141 14.5852 2.36145C14.0688 2 13.3792 2 12 2C10.6208 2 9.93119 2 9.41476 2.36145C9.35765 2.40141 9.30268 2.44433 9.25006 2.49004C8.77415 2.90339 8.6069 3.5724 8.27239 4.91043L8 6" stroke="currentColor" stroke-width="1.5" :variants="arcVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M8 18L8.27239 19.0896C8.6069 20.4276 8.77415 21.0966 9.25006 21.51C9.30268 21.5557 9.35765 21.5986 9.41476 21.6386C9.93119 22 10.6208 22 12 22C13.3792 22 14.0688 22 14.5852 21.6386C14.6423 21.5986 14.6973 21.5557 14.7499 21.51C15.2258 21.0966 15.3931 20.4276 15.7276 19.0896L16 18" stroke="currentColor" stroke-width="1.5" :variants="arcVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 10V12.005L13 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
