<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MapPinXInsideIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after location-01: the marker drops onto the mapped position
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) scale(1)', 'translateY(-2.08px) scale(0.96)', 'translateY(0.38px) scale(1.04)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.53,
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
            <motion.path d="M14.5 8L12.0083 10.4958M12.0083 10.4958L9.50832 13M12.0083 10.4958L14.5083 13M12.0083 10.4958L9.51664 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
            <motion.path d="M20 10.5352C19.9998 6.09743 16.4182 2.5 12 2.5C7.58184 2.5 4.00019 6.09743 4 10.5352C4 13.0728 5 15.0462 7 16.8086C8.07535 17.7562 9.82325 19.5313 11.0469 21.0625C11.2798 21.354 11.6397 21.5 12 21.5C12.3603 21.5 12.7202 21.354 12.9531 21.0625C14.1767 19.5313 15.9247 17.7562 17 16.8086C19 15.0462 20 13.0728 20 10.5352Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.5px' }" />
          </svg>
        </div>
</template>
