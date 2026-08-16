<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'CovidInfoIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after bug-01: the body jitters the way a live culture does under the lens
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translate(0px, 0px) rotate(0deg)',
  },
  animate: {
    transform: ['translate(0px, 0px) rotate(0deg)', 'translate(0.56px, -0.47px) rotate(2.81deg)', 'translate(-0.47px, 0.37px) rotate(-2.81deg)', 'translate(0.37px, 0.47px) rotate(1.87deg)', 'translate(-0.28px, -0.37px) rotate(-0.94deg)', 'translate(0px, 0px) rotate(0deg)'],
    transition: {
      duration: 0.49,
      ease: 'linear',
    },
  },
}

const controls = useAnimationControls()
const { onMouseEnter, onMouseLeave, startAnimation, stopAnimation } = useIconAnimation({
  controls,
  loops: true,
})

defineExpose<AnimatedIconHandle>({ startAnimation, stopAnimation })
</script>

<template>
  <div class="hia-icon" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" v-bind="$attrs">
          <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" fill="none" overflow="visible">
            <motion.circle cx="12" cy="12" r="10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
            <motion.path d="M14.5269 15.0816C18.5281 12.0136 17.8948 8.61324 16.0422 7.51869C14.5897 6.66047 13.3219 7.00632 12.5603 7.55723C12.248 7.78311 12.0919 7.89605 12 7.89605C11.9081 7.89605 11.752 7.78311 11.4397 7.55723C10.6781 7.00632 9.41034 6.66047 7.95778 7.51869C6.11193 8.60928 5.64895 12.1138 9.61321 15.1813C10.37 15.7669 11.1711 16.2935 12 16.7713C13.7788 17.7965 16.4168 19 19 19M5 19C6.54872 19 8.11718 18.5674 9.50835 18" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 12px' }" />
          </svg>
        </div>
</template>
