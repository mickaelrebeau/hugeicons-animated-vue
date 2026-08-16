<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FishSymbolIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after leaf-01: it flicks its tail and glides a body-length forward
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(2.54px) rotate(-6.34deg)', 'translateX(3.38px) rotate(4.23deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.72,
      ease: [0.77, 0, 0.175, 1],
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
            <motion.path d="M3 16.0455C4.09676 16.2648 5.63538 16.5182 7.34198 16.658M7.34198 16.658C11.1422 16.9694 15.7753 16.7182 18.2175 14.276C20.6332 11.8603 21.0701 8.78509 20.9916 6.28838C20.9477 4.89219 20.9257 4.1941 20.3658 3.63419C19.8059 3.07429 19.1078 3.05233 17.7116 3.00841C15.2149 2.92988 12.1397 3.36684 9.72401 5.78251C7.28181 8.2247 7.03055 12.8578 7.34198 16.658ZM7.34198 16.658C7.48184 18.3646 7.73518 19.9032 7.95453 21M11.1396 5.07472C11.1677 6.82198 12.025 8.79129 13.6169 10.3831C15.2087 11.975 17.178 12.8323 18.9253 12.8604" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.04px 11.96px' }" />
            <motion.path d="M15.5 6.5V6.375M15.75 6.5C15.75 6.63807 15.6381 6.75 15.5 6.75C15.3619 6.75 15.25 6.63807 15.25 6.5C15.25 6.36193 15.3619 6.25 15.5 6.25C15.6381 6.25 15.75 6.36193 15.75 6.5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.04px 11.96px' }" />
          </svg>
        </div>
</template>
