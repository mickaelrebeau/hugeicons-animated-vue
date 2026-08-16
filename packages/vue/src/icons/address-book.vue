<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AddressBookIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// the spine tabs are pulled out and the contact on the open page comes forward
// authored from scripts/authored
const coverVariants: Variants = {
  normal: { transform: 'scaleX(1)' },
  animate: {
    transform: ['scaleX(1)', 'scaleX(0.97)', 'scaleX(1.008)', 'scaleX(1)'],
    transition: { duration: 0.6, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const contactVariants: Variants = {
  normal: { transform: 'scale(1)' },
  animate: {
    transform: ['scale(1)', 'scale(0.9)', 'scale(1.05)', 'scale(1)'],
    transition: { duration: 0.58, delay: 0.1, times: [0, 0.34, 0.7, 1], ease: [0.23, 1, 0.32, 1] },
  },
};

const tabsVariants: Variants = {
  normal: { transform: 'translateX(0px)' },
  animate: {
    transform: ['translateX(0px)', 'translateX(-1.1px)', 'translateX(0.2px)', 'translateX(0px)'],
    transition: {
      duration: 0.62,
      times: [0, 0.34, 0.68, 1],
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
            <motion.path d="M4.5 10C4.5 6.22876 4.5 4.34315 5.67157 3.17157C6.84315 2 8.72876 2 12.5 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H12.5C8.72876 22 6.84315 22 5.67157 20.8284C4.5 19.6569 4.5 17.7712 4.5 14V10Z" stroke="currentColor" stroke-width="1.5" :variants="coverVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 12px' }" />
            <motion.path d="M15.25 10.0002V12.5002C15.25 13.3286 15.9216 14.0002 16.75 14.0002C17.5784 14.0002 18.25 13.3286 18.25 12.5002V12C18.25 9.23858 16.0114 7 13.25 7C10.4886 7 8.25 9.23858 8.25 12C8.25 14.7614 10.4886 17 13.25 17C14.3758 17 15.4147 16.6279 16.2505 16M15.25 12.0002C15.25 13.1048 14.3546 14.0002 13.25 14.0002C12.1454 14.0002 11.25 13.1048 11.25 12.0002C11.25 10.8956 12.1454 10.0002 13.25 10.0002C14.3546 10.0002 15.25 10.8956 15.25 12.0002Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="contactVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.3px 12px' }" />
            <motion.path d="M4.5 6L2 6M4.5 12L2 12M4.5 18H2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="tabsVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '4.5px 12px' }" />
          </svg>
        </div>
</template>
