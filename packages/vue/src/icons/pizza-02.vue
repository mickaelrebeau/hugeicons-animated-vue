<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'Pizza02Icon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after home-01: the slice lifts by its crust and settles back onto the plate
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateY(0px) scaleY(1)',
  },
  animate: {
    transform: ['translateY(0px) scaleY(1)', 'translateY(1.33px) scaleY(0.82)', 'translateY(-3.24px) scaleY(1.08)', 'translateY(0.48px) scaleY(0.94)', 'translateY(0px) scaleY(1)'],
    transition: {
      duration: 0.65,
      times: [0, 0.18, 0.48, 0.78, 1],
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
            <motion.path d="M17.4258 2.87898C15.732 2.31011 13.9049 2 12 2C10.0951 2 8.26804 2.31011 6.57421 2.87898C5.21758 3.3346 4.53927 3.56241 4.16572 4.30884C3.79218 5.05528 4.08752 5.79951 4.67819 7.28799L8.00604 15.674C9.67961 19.8913 10.5164 22 12 22C13.4836 22 14.3204 19.8913 15.994 15.674L19.3218 7.28799C19.9125 5.79952 20.2078 5.05528 19.8343 4.30884C19.4607 3.56241 18.7824 3.3346 17.4258 2.87898Z" stroke="currentColor" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M19 7.98586C18.6678 7.70091 18.3891 7.35833 18.181 6.97194C17.3084 5.35222 15.2912 4.62976 13.5189 5.30223C12.6175 5.64425 11.6116 5.63498 10.7173 5.2764C8.9589 4.57139 6.92748 5.25652 6.02234 6.85986C5.76847 7.30957 5.41836 7.69694 5 8" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M6 10.3285C6.39004 10.1194 6.84125 10 7.32204 10C8.80104 10 10 11.13 10 12.524C10 13.7496 9.07312 14.7711 7.84398 15" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M14 14C13.5 14 13 14.5 13 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
            <motion.path d="M14.125 9H14M14.25 9C14.25 9.13807 14.1381 9.25 14 9.25C13.8619 9.25 13.75 9.13807 13.75 9C13.75 8.86193 13.8619 8.75 14 8.75C14.1381 8.75 14.25 8.86193 14.25 9Z" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22px' }" />
          </svg>
        </div>
</template>
