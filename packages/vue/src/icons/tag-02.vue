<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Tag02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the tag move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.68px) rotate(-1.97deg)', 'translateY(0.39px) rotate(0.69deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M2.73552 11.6867C1.78253 12.7511 1.76203 14.3569 2.63665 15.4865C4.37226 17.7281 6.2719 19.6277 8.51351 21.3633C9.64313 22.238 11.2489 22.2175 12.3133 21.2645C15.203 18.6771 17.8494 15.9731 20.4033 13.0016C20.6558 12.7078 20.8137 12.3477 20.8492 11.9619C21.0059 10.2561 21.3279 5.34144 19.9932 4.00675C18.6586 2.67207 13.7439 2.99408 12.0381 3.15083C11.6523 3.18627 11.2922 3.34421 10.9984 3.59671C8.02692 6.15064 5.32291 8.797 2.73552 11.6867Z" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.54px 22.24px' }" />
            <motion.path d="M7.5 14.5L9.5 16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.54px 22.24px' }" />
            <motion.path d="M18 6L22 2" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.54px 22.24px' }" />
          </svg>
        </div>
</template>
