<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'MapPinPenIcon' })

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
    transform: ['translateY(0px) scale(1)', 'translateY(-2.18px) scale(0.96)', 'translateY(0.4px) scale(1.04)', 'translateY(0px) scale(1)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M14 10.5C14 12.1569 12.6569 13.5 11 13.5C9.34315 13.5 8 12.1569 8 10.5C8 8.84315 9.34315 7.5 11 7.5C12.6569 7.5 14 8.84315 14 10.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 21.5px' }" />
            <motion.path d="M14 20.5V19.3284C14 18.798 14.2107 18.2893 14.5858 17.9142L18.6464 13.8536C18.8728 13.6272 19.1799 13.5 19.5 13.5C19.8201 13.5 20.1272 13.6272 20.3536 13.8536L20.6464 14.1464C20.8728 14.3728 21 14.6799 21 15C21 15.3201 20.8728 15.6272 20.6464 15.8536L16.5858 19.9142C16.2107 20.2893 15.702 20.5 15.1716 20.5H14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 21.5px' }" />
            <motion.path d="M19 10.5352C18.9998 6.09743 15.4182 2.5 11 2.5C6.58184 2.5 3.00019 6.09743 3 10.5352C3 13.0728 4 15.0462 6 16.8086C7.07535 17.7562 8.82325 19.5313 10.0469 21.0625C10.2798 21.354 10.6397 21.5 11 21.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 21.5px' }" />
          </svg>
        </div>
</template>
