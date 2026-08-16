<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CupSodaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after coffee-02: it tips, pours, and rights itself
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(19.42deg)', 'rotate(23.74deg)', 'rotate(-2.16deg)', 'rotate(0deg)'],
    transition: {
      duration: 0.81,
      times: [0, 0.28, 0.55, 0.82, 1],
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M16 6.00195H6C4.89543 6.00195 4 6.89738 4 8.00195C4 8.55424 4.44772 9.00195 5 9.00195H17C17.5523 9.00195 18 8.55424 18 8.00195C18 6.89738 17.1046 6.00195 16 6.00195Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 22px' }" />
            <motion.path d="M17 9.00195L16.3835 17.0167C16.2226 19.1077 16.1422 20.1532 15.5655 20.8748C15.3784 21.1089 15.1573 21.3137 14.9095 21.4823C14.1457 22.002 13.0972 22.002 11 22.002C8.90284 22.002 7.85426 22.002 7.09047 21.4823C6.84271 21.3137 6.62161 21.1089 6.43453 20.8748C5.85778 20.1532 5.77736 19.1077 5.61652 17.0167L5 9.00195H17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 22px' }" />
            <motion.path d="M12 6.00195L12.2724 4.91238C12.6069 3.57436 12.7742 2.90534 13.2501 2.49199C13.3027 2.44629 13.3577 2.40336 13.4148 2.3634C13.9312 2.00195 14.6208 2.00195 16 2.00195" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 22px' }" />
          </svg>
        </div>
</template>
