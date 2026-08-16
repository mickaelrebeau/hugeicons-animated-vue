<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BirdIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: the wings beat once and the body lifts with them
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateY(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateY(0px)', 'rotate(-8.61deg) translateY(-1.15px)', 'rotate(6.69deg) translateY(-0.38px)', 'rotate(-2.87deg) translateY(-0.96px)', 'rotate(0deg) translateY(0px)'],
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
            <motion.path d="M17 3C18.6568 3 20 4.34314 20 6V10C20 14.4183 16.4183 18 12 18H3.05869C2.47399 18 2 17.526 2 16.9413C2 16.6589 2.11285 16.3882 2.31345 16.1894L14.4966 4.11494C15.1353 3.40525 16.0452 3 17 3Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M12 18L14 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M11 21H16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M22 8L20 6V8H22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M13 6V8C13 13.5228 8.52285 18 3 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
            <motion.path d="M16.875 6.5H16.75M17 6.5C17 6.63807 16.8881 6.75 16.75 6.75C16.6119 6.75 16.5 6.63807 16.5 6.5C16.5 6.36193 16.6119 6.25 16.75 6.25C16.8881 6.25 17 6.36193 17 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 18px' }" />
          </svg>
        </div>
</template>
