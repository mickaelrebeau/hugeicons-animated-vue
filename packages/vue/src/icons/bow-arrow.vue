<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'BowArrowIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after arrow-right-02: the mark commits right along its own axis
// generated from @hugeicons/core-free-icons
const arrowVariants: Variants = {
  normal: {
    transform: 'translateX(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateX(0px) scaleY(1)', 'translateX(2.83px) scaleY(0.94)', 'translateX(-0.33px) scaleY(1.02)', 'translateX(0.49px) scaleY(0.99)', 'translateX(0px) scaleY(1)'],
    transition: {
      duration: 0.52,
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
            <motion.path d="M10 14L20 4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M5.24299 15.1543C4.7142 15.68 4.15657 16.232 3.66853 16.7143C3.23749 17.1402 3.02197 17.3532 3.00283 17.5346C2.98465 17.7068 3.05493 17.8761 3.19001 17.9854C3.3323 18.1007 3.63618 18.1007 4.24396 18.1007C4.80191 18.1007 5.08089 18.1007 5.29552 18.2051C5.50131 18.3052 5.66771 18.4705 5.76847 18.675C5.87356 18.8883 5.87358 19.1705 5.87362 19.7349C5.87367 20.3641 5.87369 20.6786 5.9997 20.8231C6.10363 20.9423 6.25695 21.0073 6.41543 20.9994C6.60759 20.9897 6.83179 20.7762 7.2802 20.349L8.74318 18.9552C9.3558 18.3716 9.66211 18.0798 9.82722 17.7045C9.83213 17.6933 9.83693 17.6821 9.84164 17.6709C10 17.2927 10 16.8711 10 16.0277V15.9499C10 15.0807 10 14.6461 9.75179 14.3582C9.71731 14.3182 9.67978 14.2809 9.63954 14.2466C9.34982 14 8.91248 14 8.03779 14C7.27234 14 6.88961 14 6.54321 14.1274C6.49316 14.1458 6.4449 14.1656 6.39642 14.1878C6.0609 14.3412 5.78826 14.6123 5.24299 15.1543Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M17 3.22126C17 3.22126 20.2808 2.72341 20.7787 3.22129C21.2766 3.71917 20.7787 7 20.7787 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M18.2396 11C19.0904 13.2868 19.0543 15.8774 18.1635 18.1685C17.617 19.5741 17.3438 20.2769 16.2839 20.4999C15.224 20.7228 14.5402 20.0391 13.1728 18.6718M5.32864 10.8285C3.95727 9.45733 3.27159 8.77172 3.48591 7.71854C3.70024 6.66535 4.4056 6.38049 5.81632 5.81077C8.11856 4.88101 10.7129 4.8173 13 5.68707" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
