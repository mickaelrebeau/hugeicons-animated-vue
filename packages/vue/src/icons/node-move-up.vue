<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'NodeMoveUpIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after share-08: the connected nodes receive the signal one after another
// generated from @hugeicons/core-free-icons
const wireVariants: Variants = {
  normal: {
    pathLength: 1,
    visibility: 'visible',
  },
  animate: {
    pathLength: [0, 1],
    visibility: 'visible',
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const nodeVariants: Variants = {
  normal: {
    transform: 'scale(1)',
  },
  animate: (i: number) => ({
    transform: ['scale(1)', 'scale(1.25)', 'scale(1)'],
    transition: { duration: 0.46, ease: 'easeInOut', delay: i * 0.12 },
  }),
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
            <motion.path d="M5.49609 8V12.5M5.49609 12.5V14C5.49609 16.8284 5.49609 18.2426 6.37411 19.1213C7.19879 19.9466 8.49556 19.9968 10.992 19.9998M5.49609 12.5H10.992" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.24px 14px' }" />
            <motion.path d="M10.9912 12.5C10.9912 11.5572 10.9912 11.0858 11.2839 10.7929C11.5766 10.5 12.0476 10.5 12.9897 10.5C13.9318 10.5 14.4028 10.5 14.6955 10.7929C14.9882 11.0858 14.9882 11.5572 14.9882 12.5C14.9882 13.4428 14.9882 13.9142 14.6955 14.2071C14.4028 14.5 13.9318 14.5 12.9897 14.5C12.0476 14.5 11.5766 14.5 11.2839 14.2071C10.9912 13.9142 10.9912 13.4428 10.9912 12.5Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12.99px 12.5px' }" />
            <motion.path d="M10.9912 20C10.9912 19.0572 10.9912 18.5858 11.2839 18.2929C11.5766 18 12.0476 18 12.9897 18C13.9318 18 14.4028 18 14.6955 18.2929C14.9882 18.5858 14.9882 19.0572 14.9882 20C14.9882 20.9428 14.9882 21.4142 14.6955 21.7071C14.4028 22 13.9318 22 12.9897 22C12.0476 22 11.5766 22 11.2839 21.7071C10.9912 21.4142 10.9912 20.9428 10.9912 20Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="2" :animate="controls" initial="normal" :style="{ transformOrigin: '12.99px 20px' }" />
            <motion.path d="M3.99654 2H6.99428C8.80812 2 8.99278 3.10993 8.99278 5C8.99278 6.89007 8.80812 8 6.99428 8H3.99654C2.18271 8 1.99805 6.89007 1.99805 5C1.99805 3.10993 2.18271 2 3.99654 2Z" stroke="currentColor" stroke-width="1.5" :variants="nodeVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5.5px 5px' }" />
            <motion.path d="M17.9933 11.089L19.4475 9.31639C19.6862 9.05001 19.8558 8.99948 20.004 9.00405M20.004 9.00405C20.1502 9.00857 20.2888 9.06707 20.4978 9.31639L22.0032 11.1003M20.004 9.00405L19.9813 17.2623C20.0523 18.1368 19.9319 19.8285 17.9844 20.0085" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="wireVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '19.99px 14.5px' }" />
          </svg>
        </div>
</template>
