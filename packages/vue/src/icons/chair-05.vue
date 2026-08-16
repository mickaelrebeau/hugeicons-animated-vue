<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Chair05Icon' })

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
    transform: ['translateY(0px) scaleY(1)', 'translateY(-0.63px) scaleY(1.04)', 'translateY(1.46px) scaleY(0.86)', 'translateY(-0.16px) scaleY(1.02)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.63,
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
            <motion.path d="M8 17L7 22M16 17L17 22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M12 13C10.4783 13 8.86931 13.2925 7.60803 13.6838C6.6583 13.9784 5.89434 15.322 6.01199 16.4128C6.05558 16.8169 6.36877 17 6.69807 17H17.3019C17.6312 17 17.9444 16.8169 17.988 16.4128C18.1057 15.322 17.3417 13.9784 16.392 13.6838C15.1307 13.2925 13.5217 13 12 13Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M15.7733 14C17.0124 12.4321 18 10.3677 18 8.3553C18 4.30537 15.3137 2 12 2C8.68629 2 6 4.30537 6 8.3553C6 10.3677 6.98759 12.4321 8.22668 14" stroke="currentColor" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
            <motion.path d="M13.6698 2C13.8785 3.13257 14 4.56789 14 6.2739C14 8.69303 13.6362 11.178 13.1937 13M10.3302 2C10.1215 3.13257 10 4.56789 10 6.2739C10 8.69303 10.3638 11.178 10.8063 13" stroke="currentColor" stroke-width="1.5" :variants="seatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 14px' }" />
          </svg>
        </div>
</template>
