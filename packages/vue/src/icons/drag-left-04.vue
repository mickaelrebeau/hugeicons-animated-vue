<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'DragLeft04Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after cursor-pointer-01: the grabbed object pulls away, carries momentum, and returns
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(3.18px) rotate(3.98deg)', 'translateX(-0.4px) rotate(-1deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.61,
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
            <motion.path d="M21.4979 13.0526V13.2264M21.4979 13.2264C21.4979 12.3517 20.8545 11.6051 19.9768 11.4613L18.7673 11.2632V12.1579M21.4979 13.2264V15.4386C21.4979 17.3832 21.4979 18.3555 21.1966 19.1296C20.7358 20.3132 19.7873 21.2485 18.587 21.7029C17.802 22 16.816 22 14.844 22C13.8098 22 13.2927 22 12.8115 21.8957C12.0773 21.7366 11.3947 21.4 10.8251 20.9163C10.4517 20.5992 10.1414 20.1913 9.52089 19.3755L6.78664 15.7805C6.3665 15.2281 6.37859 14.4654 6.81601 13.9262C7.38768 13.2215 8.45358 13.1633 9.10067 13.8014L10.4845 15.2557V6.5C10.4845 5.67157 11.1569 5 11.9863 5C12.8157 5 13.4881 5.67157 13.4881 6.5V9.4737M18.7673 12.1579C18.7673 11.1696 17.9523 10.3684 16.9469 10.3684H16.0368V11.2632M18.7673 12.1579V13.0526M13.4881 9.4737H14.2163C15.2217 9.4737 16.0368 10.2749 16.0368 11.2632M13.4881 9.4737V12.1579M16.0368 11.2632V12.1579" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.93px 22px' }" />
            <motion.path d="M10.4849 9.5C9.25372 8.81764 8.48248 7.50601 8.48248 6C8.48248 3.79086 10.2756 2 12.4874 2C14.6992 2 16.4923 3.79086 16.4923 6C16.4923 7.50601 15.659 8.81764 14.4278 9.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.93px 22px' }" />
            <motion.path d="M7.88241 6.02289H2.50201M2.50201 6.02289C2.50201 6.50098 3.01689 6.71721 3.33909 7.01159L4.52068 8.01018M2.50201 6.02289C2.50201 5.51181 3.02499 5.29883 3.33909 5.00162L4.52068 3.99023" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.93px 22px' }" />
          </svg>
        </div>
</template>
