<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'ClapperboardIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the clapperboard separate in depth and stack again
// generated from @hugeicons/core-free-icons
const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.52px, -1.3px)', 'translate(0.22px, -0.22px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.54,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.87px) rotate(-1.08deg)', 'translateY(0.49px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
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
            <motion.path d="M14.1914 2.87109L13.6914 7.37109" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.94px 5.12px' }" />
            <motion.path d="M8.69141 4.87109L8.19141 9.37109" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '8.44px 7.12px' }" />
            <motion.path d="M19.8538 4.75511C19.8996 4.90807 19.9225 4.98456 19.933 5.05129C20.003 5.4967 19.7663 5.93391 19.3551 6.11874C19.2934 6.14644 19.2169 6.16907 19.0638 6.21435L4.24949 10.5948C4.10345 10.638 4.03043 10.6596 3.96632 10.6698C3.52814 10.7395 3.09639 10.5122 2.90594 10.1114C2.87807 10.0528 2.85456 9.98038 2.80752 9.83553C2.65883 9.37768 2.58449 9.14875 2.54841 8.94988C2.30118 7.58702 3.0191 6.23208 4.2856 5.67128C4.47041 5.58945 4.70157 5.52239 5.16391 5.38829L15.5083 2.38788C15.9635 2.25586 16.1911 2.18985 16.3899 2.16011C17.7168 1.96169 19.0142 2.66842 19.5671 3.89086C19.6499 4.0741 19.7179 4.3011 19.8538 4.75511Z" stroke="currentColor" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11.15px 6.35px' }" />
            <motion.path d="M19.5 10.8711H3.5V15.8711C3.5 18.6995 3.5 20.1137 4.37868 20.9924C5.25736 21.8711 6.67157 21.8711 9.5 21.8711H15.5C18.3284 21.8711 19.7426 21.8711 20.6213 20.9924C21.5 20.1137 21.5 18.6995 21.5 15.8711V12.8711C21.5 11.9283 21.5 11.4569 21.2071 11.164C20.9142 10.8711 20.4428 10.8711 19.5 10.8711Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 16.37px' }" />
            <motion.path d="M15.5 17.8711H17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '16.5px 17.87px' }" />
          </svg>
        </div>
</template>
