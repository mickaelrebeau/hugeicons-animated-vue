<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chair01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the cushion compresses under the weight and recovers
// generated from @hugeicons/core-free-icons
const seatVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(-0.64px) scaleY(1.04)', 'translateY(1.5px) scaleY(0.86)', 'translateY(-0.16px) scaleY(1.02)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.64,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M8 15L6 22M16 15L18 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12 11C10.4783 11 8.86931 11.2925 7.60803 11.6838C6.6583 11.9784 5.89434 13.322 6.01199 14.4128C6.05558 14.8169 6.36877 15 6.69807 15H17.3019C17.6312 15 17.9444 14.8169 17.988 14.4128C18.1057 13.322 17.3417 11.9784 16.392 11.6838C15.1307 11.2925 13.5217 11 12 11Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M7 12L7.6398 5.60199C7.81099 3.89012 7.89658 3.03419 8.46796 2.51709C9.03935 2 9.89955 2 11.62 2H12.38C14.1005 2 14.9607 2 15.532 2.51709C16.1034 3.03419 16.189 3.89012 16.3602 5.60199L17 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
