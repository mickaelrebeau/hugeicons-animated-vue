<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PhysicsIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the physics move from their own mass and settle together
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
            <motion.path d="M12 5.79314C13.1131 6.59894 14.2449 7.56172 15.3416 8.65837C16.4383 9.75506 17.4011 10.8869 18.2069 12.0001M18.2069 12.0001C20.7912 8.43014 21.7609 5.05281 20.3541 3.64594C18.9472 2.23908 15.5699 3.20879 12 5.79314C10.8869 6.59894 9.75509 7.56172 8.65843 8.65838C7.56175 9.75507 6.59895 10.8869 5.79314 12.0001M18.2069 12.0001C20.7912 15.5699 21.7608 18.9472 20.354 20.3541C19.3109 21.3971 17.1848 21.1338 14.7 19.8747M18.2069 12.0001C17.4011 13.1132 16.4383 14.245 15.3417 15.3416C14.245 16.4383 13.1131 17.4011 12 18.2069M12 18.2069C10.8869 17.4011 9.75503 16.4383 8.65834 15.3416C7.5617 14.245 6.59893 13.1132 5.79314 12.0001M12 18.2069C8.43014 20.7912 5.05287 21.7609 3.64602 20.3541C2.23917 18.9472 3.20885 15.5699 5.79314 12.0001M5.79314 12.0001C3.20878 8.43014 2.23907 5.0528 3.64593 3.64593C4.689 2.60286 6.81521 2.86619 9.3 4.12538" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.76px' }" />
            <motion.circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21.76px' }" />
          </svg>
        </div>
</template>
