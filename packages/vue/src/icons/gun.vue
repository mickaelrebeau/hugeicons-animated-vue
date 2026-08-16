<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'GunIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the gun take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.84px) rotate(-2.16deg)', 'translateY(0.43px) rotate(0.76deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-5.25deg)', 'scale(1.1) rotate(2.1deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.47, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
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
            <motion.path d="M10.3882 10.5688L8.79732 17.2511C8.75319 17.4365 8.73112 17.5292 8.71527 17.6205C8.61639 18.1898 8.68403 18.7755 8.91005 19.3073C8.9463 19.3926 8.9889 19.4778 9.07412 19.6482C9.1303 19.7606 9.15839 19.8168 9.17103 19.8601C9.25397 20.1449 9.07232 20.4388 8.78058 20.4919C8.73614 20.5 8.67371 20.5 8.54885 20.5C7.40755 20.5 5.5236 20.5 4.52785 20.5C3.36423 20.5 2.78242 20.5 2.48609 20.1181C2.18976 19.7361 2.33087 19.1681 2.61309 18.032L3.96647 12.5841C4.22077 11.5604 3.45143 10.5688 2.40292 10.5688C2.18039 10.5688 2 10.3872 2 10.1633V7.58942C2 5.12449 2.51119 4.61005 4.96053 4.61005H18.1677C18.7887 4.61005 19.257 4.46352 19.7632 4.1239C20.3544 3.72724 21.0829 3.00608 21.6191 4.00889C22.1576 5.0161 22.187 9.24315 21.3033 10.1325C20.8698 10.5688 20.172 10.5688 18.7764 10.5688H10.3882ZM10.3882 10.5688H8.90791" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M9 14.5H9.87689C10.8276 14.5 11.303 14.5 11.7196 14.4102C12.9146 14.1527 13.9263 13.3628 14.466 12.2659C14.6541 11.8835 14.7694 11.4224 15 10.5" stroke="currentColor" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12.5px' }" />
            <motion.path d="M2 7.5H4.02786C5.23068 7.5 5.83209 7.5 6.31539 7.2013C6.7987 6.9026 7.06766 6.36469 7.60557 5.28885L8 4.5" stroke="currentColor" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '5px 6px' }" />
            <motion.path d="M22 7.5L19 7.5" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
