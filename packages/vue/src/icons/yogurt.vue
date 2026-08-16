<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'YogurtIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the parts of the yogurt move from their own mass and settle together
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.64px) rotate(-1.93deg)', 'translateY(0.39px) rotate(0.68deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M15.5911 5.75202C17.1781 6.35504 18.2293 8.60237 16.9214 10.2725C16.477 10.8399 15.8249 11.2489 15.0731 11.3952M16.9214 10.2725C18.8538 10.2727 21.1104 12.7982 19.3857 15M9 10.9247C8.26918 10.353 7.34468 10.1719 6.49945 10.3221C4.71115 10.6399 3.08337 13.0641 4.59984 15M13.841 7.90896C14.8748 7.24795 15.4267 6.4945 15.5911 5.75202C16.0145 3.83963 13.8671 2 10.7606 2C11.5972 2.53491 11.8868 3.19088 11.858 3.80353C11.7071 7.01202 5.67427 5.23022 6.49945 10.3221" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 15px' }" />
            <motion.path d="M3 15L3.82811 17.7374C4.44939 19.7911 4.76004 20.8179 5.55635 21.4089C6.35266 22 7.42546 22 9.57107 22H14.4289C16.5745 22 17.6473 22 18.4437 21.4089C19.24 20.8179 19.5506 19.7911 20.1719 17.7374L21 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 15px' }" />
            <motion.path d="M2 15H22" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.1px 15px' }" />
          </svg>
        </div>
</template>
