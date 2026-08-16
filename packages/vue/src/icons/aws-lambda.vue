<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'AwsLambdaIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after copy-01: the nested parts of the aws lambda separate in depth and stack again
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.86px) rotate(-1.07deg)', 'translateY(0.48px) rotate(0.54deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.6,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

const frontVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px)',
  },
  animate: {
    transform: ['translate(0px, 0px)', 'translate(1.5px, -1.29px)', 'translate(0.21px, -0.21px)', 'translate(0px, 0px)'],
    transition: {
      duration: 0.54,
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
            <motion.path d="M9 7H8C7.05719 7 6.58579 7 6.29289 6.70711C6 6.41421 6 5.94281 6 5C6 4.05719 6 3.58579 6.29289 3.29289C6.58579 3 7.05719 3 8 3H9.52786C10.7307 3 11.3321 3 11.8154 3.2987C12.2987 3.5974 12.5677 4.13531 13.1056 5.21115L19 17C19.9428 17 20.4142 17 20.7071 17.2929C21 17.5858 21 18.0572 21 19C21 19.9428 21 20.4142 20.7071 20.7071C20.4142 21 19.9428 21 19 21H18.4721C17.2693 21 16.6679 21 16.1846 20.7013C15.7013 20.4026 15.4323 19.8647 14.8944 18.7889L9 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '13.5px 12px' }" />
            <motion.path d="M6.81966 21H3.7942C3.35558 21 3 20.6444 3 20.2058C3 20.0708 3.0344 19.9381 3.09994 19.8201L8 11L10.5 16L8.52786 19.9443C8.28351 20.433 8.16133 20.6773 7.94949 20.8234C7.92208 20.8422 7.89375 20.8598 7.8646 20.8758C7.63926 21 7.36606 21 6.81966 21Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="frontVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '6.75px 16px' }" />
          </svg>
        </div>
</template>
