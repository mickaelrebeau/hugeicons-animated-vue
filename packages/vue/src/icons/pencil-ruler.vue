<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'PencilRulerIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after edit-02: the pencil scribbles and lifts from the written line
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.79px) rotate(-0.99deg)', 'translateY(0.45px) rotate(0.5deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.57,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const nibVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translate(0px, 0px)',
  },
  animate: {
    transform: ['rotate(0deg) translate(0px, 0px)', 'rotate(-7.45deg) translate(-0.37px, 0.56px)', 'rotate(3.73deg) translate(0.28px, -0.28px)', 'rotate(0deg) translate(0px, 0px)'],
    transition: {
      duration: 0.6,
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
            <motion.path d="M16.044 11L19.3137 14.2698C20.3397 15.2958 20.8527 15.8088 20.9665 16.4258C21.0112 16.6677 21.0112 16.9158 20.9665 17.1577C20.8527 17.7747 20.3397 18.2877 19.3137 19.3137C18.2877 20.3397 17.7747 20.8527 17.1577 20.9665C16.9158 21.0112 16.6677 21.0112 16.4258 20.9665C15.8088 20.8527 15.2958 20.3397 14.2698 19.3137L11 16.044M7.84313 12.8871L4.68627 9.73022C3.66027 8.70423 3.14727 8.19123 3.03347 7.5742C2.98884 7.33227 2.98884 7.08422 3.03347 6.84228C3.14727 6.22526 3.66027 5.71226 4.68627 4.68627C5.71226 3.66027 6.22526 3.14727 6.84228 3.03347C7.08422 2.98884 7.33227 2.98884 7.5742 3.03347C8.19123 3.14727 8.70423 3.66027 9.73022 4.68627L13 7.95605" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M15.5 5.5L17.4697 3.53033C17.8092 3.19076 18.2698 3 18.75 3C19.2302 3 19.6908 3.19077 20.0303 3.53033L20.4697 3.96967C20.8092 4.30923 21 4.76978 21 5.25C21 5.73022 20.8092 6.19077 20.4697 6.53033L18.5 8.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="nibVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '18.25px 5.75px' }" />
            <motion.path d="M7.36645 19.6331L18.5 8.5L15.5 5.5L4.36648 16.6331C4.12613 16.8735 3.951 17.1711 3.85762 17.4979L3.01687 20.4405C3.00568 20.4797 3 20.5203 3 20.561C3 20.8032 3.19636 20.9996 3.43858 20.9996C3.47933 20.9996 3.51988 20.9939 3.55906 20.9827L6.50171 20.1419C6.82851 20.0486 7.12612 19.8735 7.36645 19.6331Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '10.75px 13.25px' }" />
            <motion.path d="M10 5L8.5 6.5M19 14L17.5 15.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.75px 10.25px' }" />
          </svg>
        </div>
</template>
