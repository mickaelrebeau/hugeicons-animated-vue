<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LicenseMaintenanceIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after credit-card: the credential slides forward for inspection, then returns
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'translateX(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateX(0px) rotate(0deg)', 'translateX(2.46px) rotate(2.05deg)', 'translateX(-0.31px) rotate(-0.51deg)', 'translateX(0px) rotate(0deg)'],
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
            <motion.path d="M12 22H10.5C6.72873 22 4.8431 22 3.67153 20.8284C2.49995 19.6568 2.49997 17.7712 2.5 13.9999L2.50004 9.99993C2.50007 6.22872 2.50008 4.34312 3.67166 3.17156C4.84323 2 6.72883 2 10.5 2H11.4999C15.2712 2 17.1568 2 18.3284 3.17157C19.4999 4.34315 19.4999 6.22876 19.4999 10V11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M7 7H15M7 12H11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M17.5 20.7727C19.2673 20.7727 20.7 19.3075 20.7 17.5C20.7 15.6925 19.2673 14.2273 17.5 14.2273M17.5 20.7727C15.7327 20.7727 14.3 19.3075 14.3 17.5C14.3 15.6925 15.7327 14.2273 17.5 14.2273M17.5 20.7727V22M17.5 14.2273V13M14.5913 15.7149L13.5004 15.0455M21.5 19.9545L20.4092 19.2851M20.4087 15.7149L21.4996 15.0455M13.5 19.9545L14.5908 19.2851" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
          </svg>
        </div>
</template>
