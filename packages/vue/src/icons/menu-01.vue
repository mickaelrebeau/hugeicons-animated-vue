<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Menu01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

const MENU_LINES = ['M4 5L20 5', 'M4 12L20 12', 'M4 19L20 19'];
const MENU_SCAN_LINES = ['M4 5L17.2 5', 'M4 12L15.8 12', 'M4 19L17.2 19'];
const MENU_OVERSHOOT_LINES = ['M4 5L20.35 5', 'M4 12L20.35 12', 'M4 19L20.35 19'];

// The right edge scans downward while every row stays attached to the same left rail.
const menuLineVariants: Variants = {
  normal: (i: number) => ({
    d: MENU_LINES[i],
    transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
  }),
  animate: (i: number) => ({
    d: [MENU_LINES[i], MENU_SCAN_LINES[i], MENU_OVERSHOOT_LINES[i], MENU_LINES[i]],
    transition: {
      duration: 0.32,
      delay: i * 0.075,
      times: [0, 0.42, 0.76, 1],
      ease: [0.23, 1, 0.32, 1],
    },
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
            <motion.path :d="MENU_LINES[0]" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="menuLineVariants" :custom="0" :animate="controls" initial="normal" />
            <motion.path :d="MENU_LINES[1]" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="menuLineVariants" :custom="1" :animate="controls" initial="normal" />
            <motion.path :d="MENU_LINES[2]" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="menuLineVariants" :custom="2" :animate="controls" initial="normal" />
          </svg>
        </div>
</template>
