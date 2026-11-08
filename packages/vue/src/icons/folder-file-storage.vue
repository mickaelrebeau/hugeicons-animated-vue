<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FolderFileStorageIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the storage file slides out of the corner and back
// authored from scripts/authored
const fileVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(0px, -1.2px)',
      'translate(0px, 0.18px)',
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
            <path d="M12.0027 21C7.2874 21 4.92973 21 3.46487 19.5355C2 18.0711 2 15.714 2 11V7.94427C2 6.1278 2 5.21956 2.38042 4.53806C2.6516 4.05227 3.05255 3.65142 3.53848 3.38032C4.22017 3 5.12865 3 6.94562 3C8.10969 3 8.69172 3 9.20122 3.19101C10.3645 3.62712 10.8442 4.68358 11.3691 5.73313L12.0027 7M8.00164 7H16.754C18.8613 7 19.9149 7 20.6718 7.50559C20.9995 7.72447 21.2808 8.00572 21.4997 8.33329C21.8937 8.92282 21.9808 9.69244 22 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M22 18V16.7426C22 16.1295 22 15.823 21.8858 15.5473C21.7716 15.2716 21.5549 15.0549 21.1213 14.6213L20.3787 13.8787C19.9451 13.4451 19.7284 13.2284 19.4527 13.1142C19.177 13 18.8705 13 18.2574 13C16.8431 13 15.8787 13 15.4393 13.4393C15 13.8787 15 14.5858 15 16V18C15 19.4142 15 20.1213 15.4393 20.5607C15.8787 21 16.5858 21 18 21H19C20.4142 21 21.1213 21 21.5607 20.5607C22 20.1213 22 19.4142 22 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.5px 17px' }" />
          </svg>
        </div>
</template>
