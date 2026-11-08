<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GnomeIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the gnome tips his hat and the beard wags
// authored from scripts/authored
const hatVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-1.33px, 0.16px) rotate(-14deg)',
      'translate(0.77px, 0.05px) rotate(8deg)',
      'translate(-0.29px, 0.01px) rotate(-3deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const beardVariants: Variants = {
  normal: { transform: 'translate(0.00px, 0.00px) rotate(0deg)' },
  animate: {
    transform: [
      'translate(0.00px, 0.00px) rotate(0deg)',
      'translate(-0.47px, -0.02px) rotate(6deg)',
      'translate(0.31px, -0.01px) rotate(-4deg)',
      'translate(-0.08px, -0.00px) rotate(1deg)',
      'translate(0.00px, 0.00px) rotate(0deg)',
    ],
    transition: {
      duration: 0.7,
      delay: 0.1,
      times: [0, 0.18, 0.46, 0.74, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
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
            <motion.path d="M12 12C14.5827 12 16.9032 12.3863 18.5 13C18.5 12.0201 18.2223 11.0603 17.699 10.2318L12.767 2.42274C12.6008 2.15958 12.3113 2 12 2C11.6887 2 11.3992 2.15958 11.233 2.42274L6.30099 10.2318C5.77773 11.0603 5.5 12.0201 5.5 13C7.09679 12.3863 9.41727 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="hatVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 7.5px' }" />
            <path d="M16 12.5C16 12.5 16.5 13.3 16.5 14.5C16.5 14.5 16.5 16.5 15 16.5C13.5 16.5 13.5 15 12 15C10.5 15 10.5 16.5 9 16.5C7.5 16.5 7.5 14.5 7.5 14.5C7.5 13.3 8 12.5 8 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M18.5 13C18.5 13 19 13.9 19 15.5C19 17.5 17.7385 18.6308 16 19.5C14.5895 20.2053 13.4277 21.1592 12.8653 21.6603C12.6263 21.8733 12.3201 22 12 22C11.6799 22 11.3737 21.8733 11.1347 21.6603C10.5723 21.1592 9.41051 20.2053 8 19.5C6.26155 18.6308 5 17.5 5 15.5C5 13.9 5.5 13 5.5 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="beardVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17.5px' }" />
          </svg>
        </div>
</template>
