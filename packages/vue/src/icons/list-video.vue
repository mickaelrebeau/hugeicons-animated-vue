<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ListVideoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the play button pushes forward beside the list
// authored from scripts/authored
const playVariants: Variants = {
  normal: { transform: 'translate(0px, 0px)' },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1px, 0px)', 'translate(-0.12px, 0px)', 'translate(0px, 0px)'],
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
            <path d="M3 5H21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <path d="M3 12H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
            <motion.path d="M20.9453 15.4512C20.7686 16.1675 19.9333 16.6736 18.2629 17.6859C16.648 18.6645 15.8406 19.1538 15.1899 18.9571C14.9209 18.8758 14.6758 18.7214 14.4781 18.5086C14 17.9941 14 16.9961 14 15C14 13.0039 14 12.0059 14.4781 11.4914C14.6758 11.2786 14.9209 11.1242 15.1899 11.0429C15.8406 10.8462 16.648 11.3355 18.2629 12.3141C19.9333 13.3264 20.7686 13.8325 20.9453 14.5488C21.0182 14.8445 21.0182 15.1555 20.9453 15.4512Z" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" :variants="playVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 15px' }" />
            <path d="M3 19H9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" />
          </svg>
        </div>
</template>
