<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AiFolder01Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the folder opens and feeds three branches, the middle one dropping first
// authored from scripts/authored
const folderVariants: Variants = {
  normal: { transform: 'translateY(0px) scaleY(1)' },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(-0.8px) scaleY(1.04)', 'translateY(0px) scaleY(1)'],
    transition: { duration: 0.6, times: [0, 0.4, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const branchRightVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.28)', 'scale(1.07)', 'scale(1)'],
    opacity: [1, 0.4, 1, 1],
    transition: { duration: 0.52, delay: 0.16, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const branchLeftVariants: Variants = {
  normal: { transform: 'scale(1)', opacity: 1 },
  animate: {
    transform: ['scale(1)', 'scale(0.28)', 'scale(1.07)', 'scale(1)'],
    opacity: [1, 0.4, 1, 1],
    transition: { duration: 0.52, delay: 0.08, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const branchDownVariants: Variants = {
  normal: { transform: 'scaleY(1)' },
  animate: {
    transform: ['scaleY(1)', 'scaleY(0.18)', 'scaleY(1.08)', 'scaleY(1)'],
    transition: { duration: 0.52, times: [0, 0.3, 0.68, 1], ease: [0.23, 1, 0.32, 1] },
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
            <motion.path d="M7 6H16.75C18.8567 6 19.91 6 20.6667 6.50559C20.9943 6.72447 21.2755 7.00572 21.4944 7.33329C22 8.08996 22 9.14331 22 11.25C22 14.7612 22 16.5167 21.1573 17.7779C20.975 18.0508 20.7666 18.3045 20.5355 18.5355M3.46447 18.5355C2 17.0711 2 14.714 2 10V6.94427C2 5.1278 2 4.21956 2.38032 3.53806C2.65142 3.05227 3.05227 2.65142 3.53806 2.38032C4.21956 2 5.1278 2 6.94427 2C8.10802 2 8.6899 2 9.19926 2.19101C10.3622 2.62712 10.8418 3.68358 11.3666 4.73313L12 6" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 18.5px' }" />
            <motion.path d="M18.25 21.25L16 19L16 16M18.25 20.5C17.8358 20.5 17.5 20.8358 17.5 21.25C17.5 21.6642 17.8358 22 18.25 22C18.6642 22 19 21.6642 19 21.25C19 20.8358 18.6642 20.5 18.25 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branchRightVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16px 16px' }" />
            <motion.path d="M5.75 21.25L8 19L8 16M5.75 20.5C6.16421 20.5 6.5 20.8358 6.5 21.25C6.5 21.6642 6.16421 22 5.75 22C5.33579 22 5 21.6642 5 21.25C5 20.8358 5.33579 20.5 5.75 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branchLeftVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8px 16px' }" />
            <motion.path d="M12 21.25L12 16M12 20.5C11.5858 20.5 11.25 20.8358 11.25 21.25C11.25 21.6642 11.5858 22 12 22C12.4142 22 12.75 21.6642 12.75 21.25C12.75 20.8358 12.4142 20.5 12 20.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="branchDownVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 16px' }" />
          </svg>
        </div>
</template>
