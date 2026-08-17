<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Atom02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the two rings foreshorten like orbits tilting in 3d, opposite ways, then the nucleus pops at the crossing
// authored from scripts/authored
const orbitAVariants: Variants = {
  normal: { transform: 'rotate(0deg) scaleY(1)' },
  animate: {
    transform: [
      'rotate(0deg) scaleY(1)',
      'rotate(22deg) scaleY(0.62)',
      'rotate(-10deg) scaleY(1.08)',
      'rotate(4deg) scaleY(0.96)',
      'rotate(0deg) scaleY(1)',
    ],
    transition: {
      duration: 0.8,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const orbitBVariants: Variants = {
  normal: { transform: 'rotate(0deg) scaleY(1)' },
  animate: {
    transform: [
      'rotate(0deg) scaleY(1)',
      'rotate(-22deg) scaleY(0.62)',
      'rotate(10deg) scaleY(1.08)',
      'rotate(-4deg) scaleY(0.96)',
      'rotate(0deg) scaleY(1)',
    ],
    transition: {
      duration: 0.8,
      delay: 0.08,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const nucleusVariants: Variants = {
  normal: { transform: 'rotate(0deg) scale(1)' },
  animate: {
    transform: [
      'rotate(0deg) scale(1)',
      'rotate(-12deg) scale(0.56)',
      'rotate(4deg) scale(1.14)',
      'rotate(0deg) scale(1)',
    ],
    transition: { duration: 0.42, delay: 0.28, times: [0, 0.32, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

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
            <motion.path d="M20.3541 3.64593C18.5085 1.8004 13.2722 4.04455 8.65837 8.65837C4.04455 13.2722 1.8004 18.5085 3.64593 20.3541C5.49146 22.1996 10.7278 19.9555 15.3416 15.3416C19.9555 10.7278 22.1996 5.49146 20.3541 3.64593Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="orbitAVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M3.64593 3.64593C1.8004 5.49146 4.04455 10.7278 8.65837 15.3416C13.2722 19.9555 18.5085 22.1996 20.3541 20.3541C22.1996 18.5085 19.9555 13.2722 15.3416 8.65837C10.7278 4.04455 5.49146 1.8004 3.64593 3.64593Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="orbitBVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.259 12H12.009M12.509 12C12.509 12.2761 12.2851 12.5 12.009 12.5C11.7328 12.5 11.509 12.2761 11.509 12C11.509 11.7239 11.7328 11.5 12.009 11.5C12.2851 11.5 12.509 11.7239 12.509 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nucleusVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
