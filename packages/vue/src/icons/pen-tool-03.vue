<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PenTool03Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the nib presses down toward its point and the handle rewrites
// authored from scripts/authored
const nibVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(-1px, 1px)',
      'translate(0.15px, -0.15px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.62,
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

const handleVariants: Variants = {
  normal: { pathLength: 1, pathOffset: 0, visibility: 'visible' },
  animate: {
    pathLength: [1, 0.14, 1],
    pathOffset: [0, 0.5, 0],
    transition: {
      duration: 0.68,
      delay: 0.16,
      times: [0, 0.34, 1],
      ease: [
        [0.77, 0, 0.175, 1],
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
            <motion.path d="M13.2852 19.3647L5.82243 20.7506C4.39103 21.0164 3.67534 21.1493 3.26303 20.737C2.85072 20.3246 2.98362 19.6089 3.24943 18.1774L4.63523 10.7143C4.85745 9.51762 4.96856 8.91925 5.36302 8.5577C5.75749 8.19616 6.47889 8.1256 7.9217 7.98448C9.31227 7.84847 10.6283 7.37177 12 6L18 12.0005C16.6283 13.3723 16.1513 14.6874 16.0151 16.0781C15.8738 17.5211 15.8031 18.2426 15.4416 18.637C15.0801 19.0314 14.4818 19.1425 13.2852 19.3647Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.4px 13.6px' }" />
            <motion.path d="M11 15.2105C10.4405 15.1197 9.92895 14.8763 9.52632 14.4737M9.52632 14.4737C9.12368 14.0711 8.8803 13.5595 8.78947 13M9.52632 14.4737L4 20" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.5px 16.5px' }" />
            <motion.path d="M12 6C12.7123 4.9491 13.6771 3.1812 15.1065 3.01098C16.0822 2.89479 16.8906 3.70312 18.5072 5.31978L18.6802 5.49277C20.2969 7.10944 21.1052 7.91777 20.989 8.8935C20.8188 10.3229 19.0509 11.2877 18 12" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="handleVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
