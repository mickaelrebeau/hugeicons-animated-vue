<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DragRight02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the finger drags right behind the arrow
// authored from scripts/authored
const handVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1px, 0px)', 'translate(-0.12px, 0px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
      delay: 0.04,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
  },
};

const arrowVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: [
      'translate(0px, 0px)',
      'translate(1.4px, 0px)',
      'translate(-0.16799999999999998px, 0px)',
      'translate(0px, 0px)',
    ],
    transition: {
      duration: 0.5,
      times: [0, 0.44, 0.72, 1],
      ease: [
        [0.77, 0, 0.175, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
      ],
    },
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
            <motion.path d="M7.03333 13.6529L8.99988 15.3723V6.50071C8.99988 5.67192 9.67174 5.00006 10.5005 5.00006C11.3288 5.00006 12.0005 5.67113 12.0012 6.49941L12.0044 11.2631L14.6408 11.6904C16.3425 11.9493 17.1934 12.0787 17.7927 12.4428C18.7827 13.0442 19.4999 14.0001 19.4999 15.2658C19.4999 16.1842 19.2761 16.8003 18.7319 18.4557C18.3866 19.506 18.214 20.0312 17.9325 20.447C17.469 21.1314 16.7852 21.6312 15.9983 21.8606C15.5203 22 14.9744 22 13.8825 22H12.957C11.5053 22 10.7795 22 10.1334 21.7299C10.0175 21.6815 9.90424 21.6268 9.7941 21.5661C9.17992 21.2279 8.72223 20.6567 7.80686 19.5143L4.84348 15.8159C4.3881 15.2475 4.38506 14.4342 4.83618 13.8623C5.37839 13.1751 6.37432 13.0801 7.03333 13.6529Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.9px 13.5px' }" />
            <motion.path d="M12.4379 9.50006C13.6676 8.8177 14.4999 7.50607 14.4999 6.00006C14.4999 3.79092 12.709 2.00006 10.4999 2.00006C8.29074 2.00006 6.49988 3.79092 6.49988 6.00006C6.49988 7.50607 7.33217 8.8177 8.56188 9.50006" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="handVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.5px 5.8px' }" />
            <motion.path d="M17.5165 3.99615L19.2599 5.43687C19.515 5.70883 19.5576 5.91391 19.4318 6.21526C19.3862 6.32441 19.3088 6.41659 19.2203 6.49504L17.5165 8.00501M14.5966 5.98107H18.3332" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="arrowVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.1px 6px' }" />
          </svg>
        </div>
</template>
