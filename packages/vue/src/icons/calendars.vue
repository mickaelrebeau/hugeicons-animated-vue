<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CalendarsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the back calendar fans out from under the front one
// authored from scripts/authored
const backVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(1.05px, 0.82px) rotate(-8deg)',
      'translate(0.38px, 0.33px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.4, 0.7, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const ringsVariants: Variants = {
  normal: { transform: 'translateY(0px)' },
  animate: {
    transform: ['translateY(0px)', 'translateY(-1.6px)', 'translateY(0px)'],
    transition: {
      duration: 0.56,
      times: [0, 0.4, 1],
      ease: [
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <path d="M8 11.5002V9.50024C8 6.67182 8 5.2576 8.87868 4.37892C9.75736 3.50024 11.1716 3.50024 14 3.50024H16C18.8284 3.50024 20.2426 3.50024 21.1213 4.37892C22 5.2576 22 6.67182 22 9.50024V11.5002C22 14.3287 22 15.7429 21.1213 16.6216C20.2426 17.5002 18.8284 17.5002 16 17.5002H14C11.1716 17.5002 9.75736 17.5002 8.87868 16.6216C8 15.7429 8 14.3287 8 11.5002Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M4.5 8.14136C3.79231 8.25986 3.27972 8.47786 2.87868 8.8789C2 9.75758 2 11.1718 2 14.0002V16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.75736 22.0002 5.17157 22.0002 8 22.0002H10C12.8284 22.0002 14.2426 22.0002 15.1213 21.1215C15.1607 21.0822 15.1982 21.0418 15.2341 21.0002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="backVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.6px 15.1px' }" />
            <path d="M8 9.00024H22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M12 2.00024V5.00024M18 2.00024V5.00024" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="ringsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15px 3.5px' }" />
            <path d="M2 13.5002H4.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
