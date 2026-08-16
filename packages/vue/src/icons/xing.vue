<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'XingIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the xing separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.77px) rotate(-0.96deg)', 'translateY(0.43px) rotate(0.48deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.34px, -1.15px)', 'translate(0.19px, -0.19px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.5,
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
            <motion.path d="M17.9364 2H19.6547C20.4117 2 20.7903 2 20.9433 2.23713C21.0963 2.47427 20.927 2.79859 20.5884 3.44721L15.0896 13.9817C14.8301 14.479 14.7003 14.7276 14.7151 14.9919C14.73 15.2562 14.8869 15.49 15.2008 15.9577L18.2219 20.4592C18.6782 21.1392 18.9064 21.4792 18.758 21.7396C18.6096 22 18.1876 22 17.3437 22H15.2478C14.6566 22 14.361 22 14.1179 21.8649C13.8749 21.7298 13.7283 21.484 13.4349 20.9923L10.4147 15.9293C10.1433 15.4744 10.0076 15.2469 10.0003 14.9963C9.99304 14.7456 10.1154 14.5113 10.36 14.0426L16.0689 3.10557C16.3497 2.56766 16.4901 2.2987 16.7424 2.14935C16.9946 2 17.3086 2 17.9364 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '15.54px 12px' }" />
            <motion.path d="M4.27747 6H5.41341C6.00959 6 6.30768 6 6.54724 6.14935C6.78679 6.2987 6.9201 6.56766 7.18672 7.10557L8.67368 10.1056C8.89123 10.5445 9 10.7639 9 11C9 11.2361 8.89123 11.4555 8.67368 11.8944L7.18672 14.8944C6.9201 15.4323 6.78679 15.7013 6.54724 15.8507C6.30768 16 6.00959 16 5.41341 16H4.27747C3.55858 16 3.19914 16 3.05386 15.7629C2.90857 15.5257 3.06932 15.2014 3.39082 14.5528L4.70845 11.8944C4.92599 11.4555 5.03476 11.2361 5.03476 11C5.03476 10.7639 4.92599 10.5445 4.70844 10.1056L3.39082 7.44721C3.06932 6.79858 2.90857 6.47427 3.05386 6.23713C3.19914 6 3.55858 6 4.27747 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '5.95px 11px' }" />
          </svg>
        </div>
</template>
