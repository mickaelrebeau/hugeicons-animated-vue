<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DoorClosedLockedIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-open: it swings open from the hinge, then closes on the same arc
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotateX(0deg) scaleY(1)',
  },
  animate: {
    transform: ['rotateX(0deg) scaleY(1)', 'rotateX(-55deg) scaleY(0.72)', 'rotateX(7.48deg) scaleY(1.04)', 'rotateX(0deg) scaleY(1)'],
    transition: {
      duration: 0.68,
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
            <motion.path d="M2.5 20.502L10.5 20.502" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 2.5px' }" />
            <motion.path d="M16 17.002V15.502C16 14.3974 16.8954 13.502 18 13.502C19.1046 13.502 20 14.3974 20 15.502V17.002M16 17.002H20M16 17.002C15.5341 17.002 15.3011 17.002 15.1173 17.0781C14.8723 17.1796 14.6776 17.3742 14.5761 17.6193C14.5 17.803 14.5 18.036 14.5 18.502V19.502C14.5 20.4448 14.5 20.9162 14.7929 21.2091C15.0858 21.502 15.5572 21.502 16.5 21.502H19.5C20.4428 21.502 20.9142 21.502 21.2071 21.2091C21.5 20.9162 21.5 20.4448 21.5 19.502V18.502C21.5 18.036 21.5 17.803 21.4239 17.6193C21.3224 17.3742 21.1277 17.1796 20.8827 17.0781C20.6989 17.002 20.4659 17.002 20 17.002" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 2.5px' }" />
            <motion.path d="M7.5 11.502H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 2.5px' }" />
            <motion.path d="M18.5 9.50195V8.50195C18.5 5.67353 18.5 4.25931 17.6213 3.38063C16.7426 2.50195 15.3284 2.50195 12.5 2.50195H10.5C7.67157 2.50195 6.25736 2.50195 5.37868 3.38063C4.5 4.25931 4.5 5.67353 4.5 8.50195V20.502" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.5px 2.5px' }" />
          </svg>
        </div>
</template>
