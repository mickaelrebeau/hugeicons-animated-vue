<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PatioIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the umbrella spins on its pole
// authored from scripts/authored
const umbrellaVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.6)', 'scaleX(1)', 'scaleX(0.6)', 'scaleX(1)'],
    transition: { duration: 0.9, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <path d="M22 16C21.6936 15.3871 21.0672 15 20.382 15H3.61803C2.93283 15 2.30643 15.3871 2 16" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M3 22H21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M5 15V22M9.5 15V22M14.5 15V22M19 15V22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <path d="M12 7L15 3M12 7H6.5M12 7H17.5M12 7L9 3" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8V15H6V8Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="umbrellaVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 8.5px' }" />
          </svg>
        </div>
</template>
