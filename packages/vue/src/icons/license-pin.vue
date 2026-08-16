<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'LicensePinIcon' })

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
    transform: ['translateX(0px) rotate(0deg)', 'translateX(2.36px) rotate(1.97deg)', 'translateX(-0.3px) rotate(-0.49deg)', 'translateX(0px) rotate(0deg)'],
    transition: {
      duration: 0.55,
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
            <motion.path d="M7 7H15M7 12H12.5M7 17L11 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M19.5 11V10C19.5 6.22876 19.5 4.34315 18.3284 3.17157C17.1569 2 15.2712 2 11.5 2H10.5001C6.7289 2 4.84329 2 3.67172 3.17156C2.50015 4.34312 2.50014 6.22872 2.5001 9.99993L2.50007 13.9999C2.50004 17.7712 2.50002 19.6568 3.67159 20.8284C4.84317 22 6.7288 22 10.5001 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
            <motion.path d="M18.5 19H17.0754C16.1713 19 15.7192 19 15.5534 18.7463C15.3875 18.4927 15.6201 18.157 16.0853 17.4855L16.5384 16.8315C16.6519 16.6677 16.7086 16.5858 16.727 16.4938C16.7454 16.4019 16.7238 16.3083 16.6805 16.1209L16.4669 15.1961C16.3391 14.6427 16.2753 14.366 16.4485 14.183C16.6217 14 16.9475 14 17.5992 14H19.4008C20.0525 14 20.3783 14 20.5515 14.183C20.7248 14.366 20.6609 14.6427 20.5331 15.1961L20.3195 16.1209C20.2762 16.3083 20.2546 16.4019 20.273 16.4938C20.2914 16.5858 20.3481 16.6677 20.4616 16.8315L20.9147 17.4855C21.3799 18.157 21.6125 18.4927 21.4466 18.7463C21.2808 19 20.8287 19 19.9246 19H18.5ZM18.5 19V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '11px 12px' }" />
          </svg>
        </div>
</template>
