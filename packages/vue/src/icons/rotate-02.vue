<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Rotate02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after refresh: the glyph winds back and completes the named turn
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg)',
  },
  animate: {
    transform: ['rotate(0deg)', 'rotate(-26.37deg)', 'rotate(360deg)'],
    transition: {
      duration: 0.92,
      times: [0, 0.2, 1],
      ease: ['easeIn', 'easeOut'],
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
            <motion.path d="M20 2V5.13219C20 5.42605 19.6328 5.55908 19.4447 5.33333C17.6146 3.2875 14.955 2 11.9949 2C6.47485 2 2 6.47715 2 12C2 15.9582 4.29852 19.3793 7.63298 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M12.2653 22.0001C11.7984 22.0001 11.3389 21.9688 10.8889 21.9084M21.7346 8.66675C21.847 9.06394 21.9352 9.46536 22 9.86901M21.9654 13.5381C21.8951 13.9381 21.8036 14.3343 21.6915 14.7245M20.1671 17.9963C19.9288 18.3497 19.6704 18.69 19.3929 19.0147M16.5714 21.3607C16.2177 21.5632 15.8496 21.7464 15.4677 21.9084" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
