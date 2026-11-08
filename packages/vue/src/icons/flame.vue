<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlameIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the flame flickers from its base
// authored from scripts/authored
const flameVariants: Variants = {
  normal: { transform: 'translate(0px, 0.00px) scaleY(1) skewX(0deg)' },
  animate: {
    transform: [
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
      'translate(0px, -0.74px) scaleY(1.08) skewX(-4deg)',
      'translate(0px, 0.56px) scaleY(0.94) skewX(3deg)',
      'translate(0px, -0.47px) scaleY(1.05) skewX(-2deg)',
      'translate(0px, 0.00px) scaleY(1) skewX(0deg)',
    ],
    transition: { duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1], ease: 'easeInOut' },
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
            <motion.path d="M12 21.25C16.1421 21.25 19.5 17.8792 19.5 13.7211C19.5 12.7901 19.5 11.8591 19.1455 10.5722C18.8889 9.64081 18.7606 9.17512 18.4606 9.02556C18.3827 8.98671 18.3338 8.97091 18.248 8.95683C17.9174 8.90258 17.3876 9.33089 16.3279 10.1875C16.0498 10.4123 15.9108 10.5247 15.5493 10.4343C15.4917 10.4199 15.3743 10.3689 15.3244 10.3366C15.0112 10.1341 14.9904 9.86144 14.9488 9.31617C14.7381 6.5538 13.906 4.83702 12.9998 3.75362C12.4279 3.06989 12.1419 2.72802 11.6478 2.75109C11.1536 2.77417 10.755 3.35218 9.9578 4.5082C8.04184 7.28658 4.5 8.88773 4.5 13.7211C4.5 17.8792 7.85786 21.25 12 21.25Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="flameVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
