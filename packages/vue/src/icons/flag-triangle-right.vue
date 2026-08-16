<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FlagTriangleRightIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after bookmark-01: the cloth snaps in a short wind, then hangs
// generated from @hugeicons/core-free-icons
const iconVariants: Variants = {
  normal: {
    transform: 'rotate(0deg) translateX(0px)',
  },
  animate: {
    transform: ['rotate(0deg) translateX(0px)', 'rotate(-11.29deg) translateX(1.51px)', 'rotate(4.71deg) translateX(-0.38px)', 'rotate(-1.88deg) translateX(0.19px)', 'rotate(0deg) translateX(0px)'],
    transition: {
      duration: 0.66,
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
            <motion.path d="M5 22C5 22.4142 5.33579 22.75 5.75 22.75C6.16421 22.75 6.5 22.4142 6.5 22H5.75H5ZM10.0047 3.12627L10.3338 2.45235V2.45235L10.0047 3.12627ZM14.7407 5.43925L14.4116 6.11317V6.11317L14.7407 5.43925ZM14.8139 10.8056L14.4662 10.141L14.4662 10.141L14.8139 10.8056ZM5.75 15.5484H5V16.7873L6.09772 16.2129L5.75 15.5484ZM6.44448 2.16767L6.84651 2.80082L6.84651 2.80082L6.44448 2.16767ZM10.0047 3.12627L9.67558 3.80019L14.4116 6.11317L14.7407 5.43925L15.0699 4.76532L10.3338 2.45235L10.0047 3.12627ZM14.8139 10.8056L14.4662 10.141L5.40228 14.8838L5.75 15.5484L6.09772 16.2129L15.1616 11.4701L14.8139 10.8056ZM5.75 15.5484H6.5V5.82793H5.75H5V15.5484H5.75ZM14.7407 5.43925L14.4116 6.11317C15.6001 6.69362 16.413 7.09284 16.9407 7.4545C17.4711 7.81802 17.4988 8.0002 17.5 8.08417L18.2499 8.07394L18.9998 8.06371C18.9883 7.22062 18.427 6.65467 17.7887 6.21721C17.1477 5.77789 16.2123 5.32329 15.0699 4.76532L14.7407 5.43925ZM14.8139 10.8056L15.1616 11.4701C16.2885 10.8804 17.211 10.3999 17.8398 9.94292C18.4658 9.48789 19.0113 8.90667 18.9998 8.06371L18.2499 8.07394L17.5 8.08417C17.5011 8.16827 17.4782 8.35134 16.9578 8.72959C16.4402 9.10587 15.6384 9.52764 14.4662 10.141L14.8139 10.8056ZM10.0047 3.12627L10.3338 2.45235C9.40131 1.99692 8.62503 1.61555 7.99431 1.41649C7.35177 1.21369 6.6688 1.13681 6.04244 1.53453L6.44448 2.16767L6.84651 2.80082C6.91463 2.75756 7.05652 2.69345 7.54285 2.84694C8.041 3.00416 8.6976 3.32257 9.67558 3.80019L10.0047 3.12627ZM5.75 5.82793H6.5C6.5 4.73008 6.50195 3.99148 6.57887 3.46722C6.65431 2.95303 6.77555 2.84587 6.84651 2.80082L6.44448 2.16767L6.04244 1.53453C5.41893 1.93045 5.19293 2.58033 5.09475 3.24947C4.99805 3.90855 5 4.77959 5 5.82793H5.75ZM5.75 22H6.5V9H5.75H5V22H5.75Z" fill="currentColor" :variants="iconVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12px 22.75px' }" />
          </svg>
        </div>
</template>
