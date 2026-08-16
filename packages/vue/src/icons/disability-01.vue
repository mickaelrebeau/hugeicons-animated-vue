<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Disability01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the disability move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.82px) rotate(-2.14deg)', 'translateY(0.43px) rotate(0.75deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M19.5 18H18.177C17.8491 18 17.6852 18 17.5582 17.914C17.4312 17.8281 17.3703 17.6758 17.2486 17.3714L16.7514 16.1286C16.6297 15.8242 16.5688 15.6719 16.4418 15.586C16.3148 15.5 16.1509 15.5 15.823 15.5H13.5C13.0286 15.5 12.7929 15.5 12.6464 15.3536C12.5 15.2071 12.5 14.9714 12.5 14.5V10.5M12.5 8V10.5M12.5 10.5H16.3889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
            <motion.path d="M12.5 6C11.3954 6 10.5 5.10457 10.5 4C10.5 2.89543 11.3954 2 12.5 2C13.6046 2 14.5 2.89543 14.5 4C14.5 5.10457 13.6046 6 12.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
            <motion.path d="M9.55796 10C6.68735 10.4794 4.5 12.9645 4.5 15.9582C4.5 19.295 7.21743 22 10.5696 22C12.6003 22 14.3982 21.0072 15.5 19.4826" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10px 22px' }" />
          </svg>
        </div>
</template>
