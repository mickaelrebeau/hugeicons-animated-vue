<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CursorLoading02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the pointer leans into its tip and clicks
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleX(1) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleX(1) scaleY(1)', 'translateX(-0.78px) scaleX(0.9) scaleY(1.04)', 'translateX(1.94px) scaleX(1.1) scaleY(0.97)', 'translateX(0px) scaleX(1) scaleY(1)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M8.5469 3.44865L13.9101 5.54728L13.9101 5.54728C17.0034 6.75771 18.55 7.36293 18.4988 8.32296C18.4475 9.28299 16.8334 9.7232 13.6051 10.6036C12.6439 10.8658 12.1633 10.9969 11.8301 11.3301C11.4969 11.6633 11.3658 12.1439 11.1036 13.1051C10.2232 16.3334 9.78299 17.9475 8.82296 17.9988C7.86293 18.05 7.25771 16.5034 6.04728 13.4101L6.04728 13.4101L3.94865 8.0469C2.68138 4.80831 2.04774 3.18901 2.86837 2.36837C3.68901 1.54774 5.30831 2.18138 8.5469 3.44865Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.05px 9.8px' }" />
            <motion.path d="M17.9999 17.5C19.9329 17.5 21.4999 15.989 21.4999 14.125C21.4999 13.5037 20.9776 13 20.3333 13H15.6666C15.0223 13 14.4999 13.5037 14.4999 14.125C14.4999 15.989 16.0669 17.5 17.9999 17.5ZM17.9999 17.5C19.9329 17.5 21.4999 19.011 21.4999 20.875C21.4999 21.4963 20.9776 22 20.3333 22H15.6666C15.0223 22 14.4999 21.4963 14.4999 20.875C14.4999 19.011 16.0669 17.5 17.9999 17.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '2.05px 9.8px' }" />
          </svg>
        </div>
</template>
