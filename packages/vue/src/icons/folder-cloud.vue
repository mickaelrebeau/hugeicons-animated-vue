<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FolderCloudIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the cloud drifts off the corner and floats back
// authored from scripts/authored
const cloudVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1px, -0.8px)',
      'translate(-0.15px, 0.12px)',
      'translate(0px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.8,
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
            <path d="M8.00001 7.00116H16.75C18.8567 7.00116 19.9101 7.00116 20.6667 7.5069C20.9943 7.72584 21.2756 8.00717 21.4944 8.33484C21.9796 9.06117 21.9992 10.0608 22 12.0026V13.0029M12 7.00116L11.3666 5.73392C10.8418 4.68406 10.3622 3.6273 9.19927 3.19106C8.68991 3 8.10803 3 6.94428 3C5.1278 3 4.21957 3 3.53807 3.38043C3.05227 3.65161 2.65142 4.05257 2.38032 4.53851C2 5.22021 2 6.12871 2 7.94571V11.0023C2 15.7177 2 18.0754 3.46447 19.5403C4.70529 20.7815 6.58688 20.9711 10 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" />
            <motion.path d="M13 18.6667C13 19.9553 14.0074 21 15.25 21H19.975C21.0934 21 22 20.0598 22 18.9C22 17.7402 21.0833 16.8 19.9649 16.8C20.0897 15.3643 18.9799 14 17.5 14C16.2055 14 15.1431 15.0307 15.0342 16.3439C13.8928 16.4566 13 17.4535 13 18.6667Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cloudVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 17.5px' }" />
          </svg>
        </div>
</template>
