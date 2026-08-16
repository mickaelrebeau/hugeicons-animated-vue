<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CctvIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after grid-view: the pieces of the cctv take turns from their own geometric centers
// generated from @hugeicons/core-free-icons
const cellVariants: Variants = {
  normal: {
    transform: 'scale(1)',
    visibility: 'visible',
  },
  animate: (i: number) => ({
    transform: ['scale(0.72) rotate(-4.93deg)', 'scale(1.1) rotate(1.97deg)', 'scale(1) rotate(0deg)'],
    visibility: ['visible', 'visible', 'visible'],
    transition: { duration: 0.45, ease: [0.23, 1, 0.32, 1], delay: i * 0.055 },
  }),
}

const folderVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-1.73px) rotate(-2.03deg)', 'translateY(0.41px) rotate(0.71deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.56,
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
            <motion.path d="M8.08665 13.5V15C8.08665 16.8856 8.08665 17.8284 7.49072 18.4142C6.89478 19 5.93563 19 4.01733 19H3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="1" :animate="controls" initial="normal" :style="{ transformOrigin: '5.54px 16.25px' }" />
            <motion.path d="M3 17V21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.8166 13.1681C13.936 13.9644 13.4957 14.3625 12.9416 14.471C12.3876 14.5795 11.827 14.3773 10.7059 13.9729L6.17801 12.3397C4.39139 11.6952 3.49808 11.373 3.14495 10.6242C2.79182 9.87529 3.11655 8.99173 3.766 7.22462L4.16088 6.15021C4.81193 4.37875 5.13746 3.49301 5.89641 3.14325C6.65537 2.79348 7.55088 3.11649 9.34189 3.76251L17.564 6.72826C18.9624 7.23266 19.6616 7.48487 19.772 8.03615C19.8825 8.58744 19.3333 9.08404 18.2348 10.0772L14.8166 13.1681Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="folderVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M20.5674 12.2676C20.9706 12.7396 21.1187 13.4221 20.8971 14.0582L20.6156 14.8661C20.4349 15.3848 20.3445 15.6442 20.2222 15.8404C19.8152 16.493 19.0882 16.8468 18.3481 16.7525C18.1256 16.7241 17.8774 16.6296 17.381 16.4404L16.5 16.1046" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="cellVariants" :custom="0" :animate="controls" initial="normal" :style="{ transformOrigin: '18.81px 14.56px' }" />
          </svg>
        </div>
</template>
