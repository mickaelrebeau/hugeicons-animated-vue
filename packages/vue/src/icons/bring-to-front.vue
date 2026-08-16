<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BringToFrontIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the bring to front move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.59px) rotate(-1.87deg)', 'translateY(0.37px) rotate(0.65deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M16.5981 8.5C17 9.19615 17 10.1308 17 12C17 13.8692 17 14.8038 16.5981 15.5C16.3348 15.9561 15.9561 16.3348 15.5 16.5981C14.8038 17 13.8692 17 12 17C10.1308 17 9.19615 17 8.5 16.5981C8.04394 16.3348 7.66523 15.9561 7.40192 15.5C7 14.8038 7 13.8692 7 12C7 10.1308 7 9.19615 7.40192 8.5C7.66523 8.04394 8.04394 7.66523 8.5 7.40192C9.19615 7 10.1308 7 12 7C13.8692 7 14.8038 7 15.5 7.40192C15.9561 7.66523 16.3348 8.04394 16.5981 8.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M8 4.00359C7.9804 3.50152 7.92512 3.17171 7.76918 2.90161C7.61091 2.62749 7.38328 2.39985 7.10915 2.24159C6.69071 2 6.12893 2 5.00538 2C3.88183 2 3.32006 2 2.90161 2.24159C2.62749 2.39985 2.39985 2.62749 2.24159 2.90161C2 3.32006 2 3.88183 2 5.00538C2 6.12893 2 6.69071 2.24159 7.10915C2.39985 7.38328 2.62749 7.61091 2.90161 7.76918C3.17171 7.92512 3.50152 7.9804 4.00359 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
            <motion.path d="M16 19.9964C16.0196 20.4985 16.0749 20.8283 16.2308 21.0984C16.3891 21.3725 16.6167 21.6001 16.8908 21.7584C17.3093 22 17.8711 22 18.9946 22C20.1182 22 20.6799 22 21.0984 21.7584C21.3725 21.6001 21.6001 21.3725 21.7584 21.0984C22 20.6799 22 20.1182 22 18.9946C22 17.8711 22 17.3093 21.7584 16.8908C21.6001 16.6167 21.3725 16.3891 21.0984 16.2308C20.8283 16.0749 20.4985 16.0196 19.9964 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 17px' }" />
          </svg>
        </div>
</template>
