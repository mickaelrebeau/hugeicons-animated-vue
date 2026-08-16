<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ShellIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after edit-02: the open stroke of the shell writes along the direction of its path
// generated from @hugeicons/core-free-icons
const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-8.58deg) translate(-0.43px, 0.64px)', 'rotate(4.29deg) translate(0.32px, -0.32px)', 'rotate(0deg) translate(0px, 0px)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M11.5 12C11.0439 11.3928 10.3179 11 9.49995 11C8.11924 11 6.99995 12.1193 6.99995 13.5C6.99995 14.8807 8 17 10.5 17C13.5 17 15 14.5 15 12.5C15 9.5 12.9999 7 9.49995 7C6 7 3 9.5 3 14C3 17.3137 5.5 22 12 22C16.9706 22 21 16.9706 21 12C21 7.02944 17 2 13 2C11.8955 2 11 2.89543 11 4V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
