<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ScreenLockRotationIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after lock: the body reacts while the keyway turns in its own seat
// generated from @hugeicons/core-free-icons
const bodyVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['rotate(0deg) scale(1)', 'rotate(-1.04deg) scale(0.985)', 'rotate(1.46deg) scale(1.018)', 'rotate(-0.36deg) scale(0.997)', 'rotate(0deg) scale(1)'],
    transition: {
      duration: 0.73,
      times: [0, 0.18, 0.48, 0.78, 1],
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const keyVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg) scale(1)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg) scale(1)', 'translateY(0.2px) rotate(0deg) scale(0.96)', 'translateY(-0.35px) rotate(-16.19deg) scale(1.035)', 'translateY(-0.12px) rotate(4.05deg) scale(1.012)', 'translateY(0px) rotate(0deg) scale(1)'],
    transition: {
      duration: 0.72,
      times: [0, 0.16, 0.42, 0.68, 0.86, 1],
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
            <motion.path d="M12.0339 3.74684C11.735 3.60141 11.4456 3.52354 11.1423 3.51237C10.0481 3.47207 9.20023 4.31523 7.50448 6.00155C5.80872 7.68786 4.96084 8.53102 5.00137 9.61906C5.04189 10.7071 5.95499 11.6151 7.78119 13.4311L11.1017 16.7332C12.9279 18.5492 13.841 19.4573 14.9352 19.4975C16.0293 19.5378 16.8772 18.6947 18.5729 17.0084C19.9404 15.6485 20.7565 14.8369 21 14.0031" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.98px 11.5px' }" />
            <motion.path d="M2.99998 12.5042C3.11819 15.3761 4.97782 20.9955 11.3699 21.4774C11.7462 21.5058 11.9344 21.5199 11.9883 21.406C12.0423 21.292 11.9063 21.1598 11.6344 20.8955L10.4137 19.7092" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="bodyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7.52px 17.01px' }" />
            <motion.path d="M15.7365 5.67839L15.7364 4.28742C15.7364 4.08196 15.745 3.87395 15.8187 3.68209C16.0147 3.17138 16.5341 2.50232 17.4796 2.50232C18.4251 2.50232 18.9648 3.17138 19.1609 3.68209C19.2345 3.87395 19.2431 4.08196 19.2431 4.28742L19.2431 5.67839M15.806 11.5039H19.194C20.1914 11.5039 21 10.6969 21 9.70151V7.69927C21 6.70385 20.1914 5.89691 19.194 5.89691H15.806C14.8086 5.89691 14 6.70385 14 7.69927V9.70151C14 10.6969 14.8086 11.5039 15.806 11.5039Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="keyVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '17.5px 7px' }" />
          </svg>
        </div>
</template>
