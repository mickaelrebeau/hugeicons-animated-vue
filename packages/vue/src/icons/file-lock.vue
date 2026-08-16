<script setup lang="ts">
import { motion, useAnimationControls } from 'motion-v'
import type { Variants } from 'motion-v'
import { useIconAnimation } from '../composables/useIconAnimation'
import type { AnimatedIconHandle } from '../types'

defineOptions({ inheritAttrs: false, name: 'FileLockIcon' })

withDefaults(
  defineProps<{
    size?: number
  }>(),
  { size: 28 },
)

// after file-01: the sheet lifts from its stack while its details follow
// generated from @hugeicons/core-free-icons
const fileVariants: Variants = {
  normal: {
    transform: 'translateY(0px) rotate(0deg)',
  },
  animate: {
    transform: ['translateY(0px) rotate(0deg)', 'translateY(-0.81px) rotate(-1.01deg)', 'translateY(0.46px) rotate(0.51deg)', 'translateY(0px) rotate(0deg)'],
    transition: {
      duration: 0.58,
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
            <motion.path d="M4.5 11.0039V9.45908C4.5 6.21265 4.5 4.58943 5.38607 3.48998C5.56508 3.26787 5.76731 3.06554 5.98933 2.88646C7.08831 2 8.71082 2 11.9558 2C12.6614 2 13.0141 2 13.3372 2.11406C13.4044 2.13778 13.4702 2.16508 13.5345 2.19583C13.8436 2.3437 14.093 2.59325 14.5919 3.09236L19.3284 7.83096C19.9065 8.40927 20.1955 8.69843 20.3478 9.06613C20.5 9.43383 20.5 9.84276 20.5 10.6606V14.0052C20.5 17.7781 20.5 19.6645 19.3284 20.8366C18.3853 21.7801 16.9796 21.9641 14.5 22M13.5 2.50022V3.00043C13.5 5.83009 13.5 7.24492 14.3787 8.12398C15.2574 9.00304 16.6716 9.00304 19.5 9.00304H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '12.5px 12px' }" />
            <motion.path d="M9 17.5V16C9 14.8954 8.10457 14 7 14C5.89543 14 5 14.8954 5 16V17.5M9 17.5H5M9 17.5C9.82843 17.5 10.5 18.1716 10.5 19V19.75C10.5 20.4489 10.5 20.7984 10.3858 21.074C10.2336 21.4416 9.94157 21.7336 9.57403 21.8858C9.29837 22 8.94891 22 8.25 22H5.75C5.05109 22 4.70163 22 4.42597 21.8858C4.05843 21.7336 3.76642 21.4416 3.61418 21.074C3.5 20.7984 3.5 20.4489 3.5 19.75V19C3.5 18.1716 4.17157 17.5 5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :variants="fileVariants" :animate="controls" initial="normal" :style="{ transformOrigin: '7px 18px' }" />
          </svg>
        </div>
</template>
