<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ThreeFingerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the three fingers tap down together
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translateY(0px) scale(1)' },
  animate: {
    transform: [
      'translateY(0px) scale(1)',
      'translateY(1px) scale(0.94)',
      'translateY(-0.2px) scale(1.02)',
      'translateY(0px) scale(1)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.3, 0.62, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M14.1816 5.49997C14.1816 4.67155 14.8328 3.99998 15.6361 3.99998C16.4394 3.99998 17.0906 4.67155 17.0906 5.49997L17.091 10.9999M14.1816 10.9999V3.49999C14.1816 2.67157 13.5304 2 12.7271 2C11.9237 2 11.2725 2.67157 11.2725 3.49999L11.2727 4.99998M17.0906 11.9999L17.091 10.9999M17.091 10.9999C17.091 10.4765 17.5468 10.0783 18.0475 10.1643L18.3795 10.2214C19.3146 10.3821 20 11.2165 20 12.1942L19.9996 13.6667C19.9996 15.84 19.9996 16.9267 19.6786 17.7919C19.4924 18.2937 19.0011 18.9337 18.6083 19.3962C18.2685 19.7963 18.0603 20.3037 18.0603 20.8354V22M11.2727 4.99998C11.2724 4.17185 10.6213 3.50063 9.81824 3.50063C9.01493 3.50063 8.36373 4.1722 8.36373 5.00062L8.36353 13.4623L6.79236 11.837C6.103 11.1238 4.96746 11.1889 4.35844 11.9764C3.89244 12.579 3.87957 13.4314 4.32715 14.0488L7.81767 18.647C8.4855 19.5267 8.84836 20.8827 8.84836 22M11.2727 4.99998V9.99993" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 12px' }" />
          </svg>
        </div>
</template>
