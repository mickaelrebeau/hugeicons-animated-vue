<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'SlidersHorizontalIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// each control snaps to a new setting in a quick three-beat mix
const knobVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: (i: number) => ({
    transform: [
      'translateX(0px)',
      i === 0 ? 'translateX(-2.8px)' : i === 1 ? 'translateX(3px)' : 'translateX(-2.4px)',
      i === 0 ? 'translateX(0.45px)' : i === 1 ? 'translateX(-0.45px)' : 'translateX(0.4px)',
      'translateX(0px)',
    ],
    transition: { duration: 0.48, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] },
  }),
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
            <path d="M3.99963 5.00055L9.99963 5.00031" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12.9996 5.00031L19.9996 5.00031" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M15.9996 9.00031L15.9996 15.0003" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knobVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 12px' }" />
            <motion.path d="M9.99963 2.00031L9.99963 8.00031" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knobVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 5px' }" />
            <motion.path d="M11.9996 16.0003L11.9996 22.0003" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="knobVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 19px' }" />
            <path d="M15.9996 12.0001L19.9996 12.0003" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M3.99963 12.0005L12.9996 12.0003" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M11.9996 19.0003L19.9996 19.0003" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M3.99963 19.0005L8.99963 19.0003" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
