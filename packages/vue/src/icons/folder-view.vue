<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FolderViewIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after folder-01: the tab leads a compact lift and the folder lands on its base
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
            <motion.path d="M8.00001 7.00116H16.75C18.8567 7.00116 19.9101 7.00116 20.6667 7.5069C20.9943 7.72584 21.2756 8.00717 21.4944 8.33484C21.9796 9.06117 21.9992 10.0608 22 12.0026V13.0029M12 7.00116L11.3666 5.73392C10.8418 4.68406 10.3622 3.6273 9.19927 3.19106C8.68991 3 8.10803 3 6.94428 3C5.1278 3 4.21957 3 3.53807 3.38043C3.05227 3.65161 2.65142 4.05257 2.38032 4.53851C2 5.22021 2 6.12871 2 7.94571V11.0023C2 15.7177 2 18.0754 3.46447 19.5403C4.70529 20.7815 6.58688 20.9711 10 21" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M17 21C19.7614 21 22 18 22 18C22 18 19.7614 15 17 15C14.2386 15 12 18 12 18C12 18 14.2386 21 17 21Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
            <motion.path d="M17.125 18H17M17.25 18C17.25 18.1381 17.1381 18.25 17 18.25C16.8619 18.25 16.75 18.1381 16.75 18C16.75 17.8619 16.8619 17.75 17 17.75C17.1381 17.75 17.25 17.8619 17.25 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 21px' }" />
          </svg>
        </div>
</template>
