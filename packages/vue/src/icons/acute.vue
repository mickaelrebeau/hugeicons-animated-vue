<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AcuteIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the acute move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.73px) rotate(-2.04deg)', 'translateY(0.41px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M10.5958 2.52324C11.3962 2.29824 13.2718 1.82324 13.7721 2.07324M13.7721 2.07324C14.2973 2.39824 14.3973 4.14824 14.5475 4.87324M13.7721 2.07324L3.81773 18.1732C3.81773 18.1732 3.29249 19.0232 3.59264 19.4982C3.81774 20.0232 5.11831 19.9982 5.11831 19.9982H20.5M20.5 19.9982C20.5 19.3982 18.6992 18.1982 18.5241 17.9982M20.5 19.9982C20.5 20.5982 19.0494 21.4482 18.5241 21.9982" stroke="currentColor" stroke-linecap="round" stroke-width="1.45" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 22px' }" />
            <motion.path d="M7.49414 12.498C9.36996 12.823 10.8049 13.723 11.6553 15.048C12.6057 16.398 12.7214 18.273 12.1462 19.798" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 22px' }" />
          </svg>
        </div>
</template>
